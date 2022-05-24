
import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 按需导入 Element
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'


const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${pathSrc}/`,
    },
  },
  server: {
    port: 3069,
    open: true,
    // 配置代理
    proxy: {
      '/lure': {
        target: 'https://admin.haolubar.com/', // 测试环境
        // target: 'https://tcpn.niudaji.com', // 生产

        changeOrigin: true, // 开启代理
        ws: true, // 是否启用websockets
        rewrite: (path) => path.replace('^\/lure', '')
      }
    }
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@use "~/styles/element/index.scss" as *;`,
  //     },
  //   },
  // },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    ElementPlus()
  ]
})
