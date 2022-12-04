import { defaultTheme } from '@vuepress/theme-default'

export default {
    theme: defaultTheme({
    title: 'HalfStar\'s blog ！', // 站点标题
    description: '这是我的第一个 VuePress 站点', // 站点描述
    base: '/', // 部署站点的基础路径
        navbar: [
            { text: '主页', link: '/' },
            { text: 'learn', link: '/learn/' },
        ]
    }),
}