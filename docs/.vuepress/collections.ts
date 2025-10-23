/* @see https://theme-plume.vuejs.press/guide/collection/ 查看文档了解配置详情。 */

import { defineCollection, defineCollections } from 'vuepress-theme-plume'

const Guide = defineCollection({
  type: 'doc',
  dir: 'guide',
  linkPrefix: '/guide',
  title: '指南',
  sidebar: [
    { text: '序', icon: 'lucide:book', link: '/guide/preface' },
    { text: '硬件', icon: 'ion:hardware-chip-outline', prefix: 'hardware', items: 'auto', collapsed: false },
    { text: '系统', icon: 'ix:operating-system', prefix: 'system', items: 'auto', collapsed: false },
    { text: '软件', icon: 'lucide:box', prefix: 'software', items: 'auto', collapsed: false },
    { text: '技巧', icon: 'lucide:lightbulb', prefix: 'tips', items: 'auto', collapsed: false },
  ],
});

const Faq = defineCollection({
  type: 'post',
  dir: 'faq',
  title: '常见问题',
  link: '/faq/',
  //   linkPrefix: '/article/', // 相关文章的链接前缀
  //   postList: true, // 是否启用文章列表页
  //   tags: true, // 是否启用标签页
    archives: false, // 是否启用归档页
  //   categories: true, // 是否启用分类页
  //   postCover: 'right', // 文章封面位置
  //   pagination: 15, // 每页显示文章数量
})

export default defineCollections([
  Guide,
  Faq
])
