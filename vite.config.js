import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import checker from 'vite-plugin-checker'
// export default {

// }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  checka: [checker({ typescript: true })], // e.g. use TypeScript check
})
