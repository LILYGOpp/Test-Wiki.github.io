import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import LanguageSwitcher from './LanguageSwitcher.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(LanguageSwitcher)
    })
  },
  enhanceApp({ app, router }) {
    // 加载 Spark 小部件样式和脚本
    if (typeof window !== 'undefined') {
      // 加载 CSS
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = '/css/spark-widget.css'
      document.head.appendChild(link)

      // 加载 JS
      const script = document.createElement('script')
      script.src = '/js/spark-widget.js'
      script.async = true
      document.head.appendChild(script)
    }
  }
}
