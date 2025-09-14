import type * as mdast from 'mdast'
import type { RemarkPlugin } from '@astrojs/markdown-remark'
import { toString } from 'mdast-util-to-string'

const remarkDescription: RemarkPlugin = (options?: { maxChars?: number }) => {
  const maxChars = (options && options.maxChars) || 200
  return function (tree, { data }) {
    const root = tree as mdast.Root

    const isMoreHtml = (node: any) =>
      node && node.type === 'html' && typeof (node as any).value === 'string' && /<!--\s*more\s*-->/i.test((node as any).value)

    // Remove any <!--more--> markers anywhere in the tree so they don't render
    function stripMoreMarkers(node: mdast.Root | mdast.Parent) {
      if ('children' in node && Array.isArray(node.children)) {
        node.children = node.children.filter((child: any) => !isMoreHtml(child))
        for (const child of node.children as any) {
          if (child && 'children' in child && Array.isArray(child.children)) {
            stripMoreMarkers(child as any)
          }
        }
      }
    }

    // Simple greeting/trivial line detector
    const trivialRe = /^(merhaba(\s+arkada(s|ş)lar)?|selam(lar)?|slm)\b/iu
    const isTrivial = (s: string) => s.trim().length < 40 || trivialRe.test(s.trim())

    // Try to extract description from content before <!--more-->, return first meaningful paragraph
    function getExcerptFromMore(root: mdast.Root): string | undefined {
      if (!('children' in root) || !Array.isArray(root.children)) return undefined
      const idx = (root.children as any[]).findIndex((c) => isMoreHtml(c))
      if (idx > -1) {
        const segment: mdast.Root = { type: 'root', children: root.children.slice(0, idx) as any[] }
        // Find first non-trivial paragraph within the segment
        const text = findFirstParagraph(segment) || toString(segment).trim()
        return text && !isTrivial(text) ? text : undefined
      }
      return undefined
    }
    function findFirstParagraph(
      node: mdast.Root | mdast.RootContent,
    ): string | undefined {
      if ('children' in node && Array.isArray(node.children)) {
        for (const child of node.children) {
          if (
            child.type === 'paragraph' &&
            child.children.length > 0 &&
            child.children[0].type !== 'image'
          ) {
            const s = toString(child).trim()
            if (s.length > 0 && !isTrivial(s)) {
              return s
            }
          } else {
            const result = findFirstParagraph(child)
            if (result) {
              return result
            }
          }
        }
      }
      return undefined
    }
    // Prefer explicit excerpt before <!--more-->, then existing frontmatter, then first non-trivial paragraph
    const excerpt = getExcerptFromMore(root)
    // Ensure <!--more--> doesn't show in rendered content
    stripMoreMarkers(root)
    let description = excerpt || data.astro?.frontmatter?.description || findFirstParagraph(tree)
    // If description still trivial, try to find the next meaningful paragraph
    if (description && isTrivial(description)) {
      const next = findFirstParagraph(root)
      if (next && !isTrivial(next)) description = next
    }
    if (description && data.astro?.frontmatter) {
      if (description.length > maxChars) {
        const lastSpace = description.slice(0, maxChars).lastIndexOf(' ')
        description = description.slice(0, lastSpace) + '…'
      }
      data.astro.frontmatter.description = description
    }
  }
}

export default remarkDescription
