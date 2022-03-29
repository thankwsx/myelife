import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'MY E LIFE 我的电子生活',
  base: '/docs/',
  outDir: '../public/docs',
  themeConfig: {
      sidebar: {
          '/': getSidebar()
      }
  }
})

function getSidebar() {
    return [{
        text: '开发笔记',
        children: [{
            text: '2022年3月', link: '/202203'
        }]
    }]
}