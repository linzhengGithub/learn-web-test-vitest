import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  test: {
    setupFiles: './vitest.setup.ts',
    // https://vitest.dev/guide/environment.html 可以自定义环境
    environment: 'happy-dom'
  },
  plugins: [vue()]
})
