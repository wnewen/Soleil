import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: [
          '**/*.{js,css,html,json,ico,png,svg}',
        ],
        globDirectory: 'dist/',
        swDest: 'dist/sw.js',
        runtimeCaching:[
          {
          urlPattern: /(.*?)\.(png|jpe?g|svg|gif|webp)/, 
          handler: 'CacheFirst',
          options: {
            cacheName: 'image-cache',
            },
          },
        ],
     },
      includeAssets:['favicon.svg'],
      manifest:{
        name:'Le soleil et la Lune',
        short_name:'Soleil',
        description:'A website that cares about your hands',
        theme_colo:'#EFEDE9',
      //   icons:[
      //   {
      //     src: 'pwa-192x192.png', 
      //     sizes: '192x192',
      //     type: 'image/png',
      //   },
      //   {
      //     src: '/pwa-512x512.png', 
      //     sizes: '512x512',
      //     type: 'image/png',
      //   },
      //   {
      //     src: 'pwa-512x512.png',
      //     sizes: '512x512',
      //     type: 'image/png',
      //     purpose: 'any maskable',
      //   },
      // ],
      }
    })
  ]
})
