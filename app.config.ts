export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: '电教委指南',
      description: '介绍教室一体机的相关信息和使用方法，帮助电教委更好地了解和使用教室一体机。',
      umami: {
        enable: true,
        src: 'https://cloud.umami.is/script.js',
        dataWebsiteId: 'a39dd52a-40ad-4bee-b6c5-43435720c05b',
      }
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.5,
    },
    header: {
      title: '电教委指南',
      showTitle: true,
      darkModeToggle: true,
      languageSwitcher: {
        enable: false,
        triggerType: 'icon',
        dropdownType: 'select',
      },
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      nav: [],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/Jursin/CEC-Guide',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      levelStyle: 'aside',
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
      codeCopyToast: true,
      codeCopyIcon: true,
      codeCopyToastText: '已复制到剪贴板',
      fieldRequiredText: '必填',
      pm: ['npm', 'pnpm', 'bun', 'yarn'],
      editLink: {
        enable: true,
        pattern: 'https://github.com/Jursin/CEC-Guide/edit/main/content/:path',
        text: '在 GitHub 上编辑此页面',
        icon: 'lucide:square-pen',
        placement: ['docsFooter', 'toc'],
      },
    },
    footer: {
      credits: 'Copyright © 2025 | Jursin',
      boaeder: true,
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/Jursin/CEC-Guide',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      title: '页面索引',
      links: [{
        title: '在 GitHub 上标星',
        icon: 'lucide:star',
        to: 'https://github.com/Jursin/CEC-Guide',
        target: '_blank',
      }, {
        title: '在 GitHub 上创建议题',
        icon: 'lucide:circle-dot',
        to: 'https://github.com/Jursin/CEC-Guide/issues',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
      placeholder: '搜索…',
      placeholderDetailed: '搜索文档…',
    }
  }
});