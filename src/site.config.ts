import type { SiteConfig } from '~/types'

const config: SiteConfig = {
  // Absolute URL to the root of your published site, used for generating links and sitemaps.
  site: 'https://www.emrekarakaya.com.tr',
  // The name of your site, used in the title and for SEO.
  title: 'Emre Karakaya',
  // The description of your site, used for SEO and RSS feed.
  description:
    'Emre Karakaya’nın kişisel blogu. Yazılım geliştirme, internet teknolojileri, açık kaynak projeler, yapay zekâ ve dijital dünyaya dair güncel yazılar ve rehberler',
  // The author of the site, used in the footer, SEO, and RSS feed.
  author: 'Emre Karakaya',
  // Keywords for SEO, used in the meta tags.
  tags: ['Yazılım', 'Programlama', 'PHP', 'JavaScript', 'Astro', 'WordPress', 'Açık Kaynak', 'Linux', 'Sunucu', 'İnternet Teknolojileri', 'Domain', 'SEO', 'Yapay Zekâ', 'Blog', 'Rehber'],
  // Path to the image used for generating social media previews.
  // Needs to be a square JPEG file due to limitations of the social card generator.
  // Try https://squoosh.app/ to easily convert images to JPEG.
  socialCardAvatarImage: './src/content/avatar.jpg',
  // Font imported from @fontsource or elsewhere, used for the entire site.
  // To change this see src/styles/global.css and import a different font.
  font: 'JetBrains Mono Variable',
  // For pagination, the number of posts to display per page.
  pageSize: 5,
  // The navigation links to display in the header.
  navLinks: [
    {
      name: 'Anasayfa',
      url: '/',
    },
    {
      name: 'Hakkımda',
      url: '/about',
    },
    {
      name: 'Arşiv',
      url: '/archive',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/emrekara5aya',
      external: true,
    },
  ],
  // The theming configuration for the site.
  themes: {
    // The theming mode. One of "single" | "select" | "light-dark-auto".
    mode: 'light-dark-auto',
    // Use auto to follow system preference initially
    default: 'auto',
    // In light-dark-auto, include exactly [light, dark]
    include: ['github-light', 'github-dark'],
    // Optional overrides for specific themes to customize colors.
    // Their values can be either a literal color (hex, rgb, hsl) or another theme key.
    // See themeKeys list in src/types.ts for available keys to override and reference.
    overrides: {
      // Improve readability for aurora-x theme
      // 'aurora-x': {
      //   background: '#292929FF',
      //   foreground: '#DDDDDDFF',
      //   warning: '#FF7876FF',
      //   important: '#FF98FFFF',
      //   note: '#83AEFFFF',
      // },
      // Make the GitHub dark theme a little cuter
      // 'github-light': {
      //   accent: 'magenta',
      //   heading1: 'magenta',
      //   heading2: 'magenta',
      //   heading3: 'magenta',
      //   heading4: 'magenta',
      //   heading5: 'magenta',
      //   heading6: 'magenta',
      //   separator: 'magenta',
      //   link: 'list',
      // },
    },
  },
  // Social links to display in the footer.
  socialLinks: {
    github: 'https://github.com/emrekara5aya',
    linkedin: 'https://www.linkedin.com/in/emrekarakaya',
    twitter: 'https://twitter.com/emrekara5aya',
    instagram: 'https://www.instagram.com/emrekara5aya',
    rss: true, // Set to true to include an RSS feed link in the footer
  },
  // Disable Giscus (theme’s default) and enable Remark42 instead.
  giscus: undefined,
  // Remark42 configuration. You typically only change host and site_id.
  remark42: {
    host: 'https://yorum.emrekarakaya.com.tr',
    site_id: 'emrekarakaya',
    components: ['embed'], // or ['embed', 'counter'] if desired
    locale: 'tr',
  },
}

export default config
