import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: true,
        javascriptEnabled: true, // 支持～替换
        // additionalData: '@import "./src/assets/style/global.less";',
      },
      scss: { charset: true },
    },
  },
  resolve: {
    alias: [
      { find: /^~/, replacement: '' }, // 解决proLayout less导入报错的问题
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
});
