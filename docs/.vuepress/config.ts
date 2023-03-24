import { defaultTheme, viteBundler } from 'vuepress'
import { path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import navbar from './config/navbar'
import sidebar from './config/sidebar'

export default {
    title: 'vuePressBlog',
    base: '/',
    theme: defaultTheme({
        logo: '/images/logo/white.jpg',
        repo: 'https://github.com/Maxiaochuan123',
        navbar,
        sidebar
    }),
    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components')
        }),
    ],
    bundler: viteBundler({
        viteOptions: {
            ssr: {
                noExternal: ['element-plus']
            }
        }
    })
}