/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  {
    text: '指南',
    icon: 'mi:book',
    items: [
      { text: '硬件', icon: 'ion:hardware-chip-outline', link: '/guide/hardware/component' },
      { text: '系统', icon: 'ix:operating-system', link: '/guide/system/windows' },
      { text: '软件', icon: 'lucide:box', link: '/guide/software/1.integrated.html' },
      { text: '技巧', icon: 'lucide:lightbulb', link: '/guide/tips/first' },
    ],
  },
  {
    text: '常见问题',
    icon: 'mingcute:question-line',
    link: '/faq/',
  },
  { text: '友链', icon: 'ic:round-people', link: '/friends' },
  { text: 'ACS', icon: 'lineicons:vite', link: 'https://nav.jursin.top/' },
])
