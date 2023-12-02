import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import '@kolibry/cli'

export default defineConfig({
   plugins: [
      Inspect(),
   ],
})
