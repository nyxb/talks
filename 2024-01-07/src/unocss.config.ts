import { defineConfig } from 'unocss/vite'
import config from '@kolibry/client/uno.config'
import { presetWebFonts } from 'unocss'

export default defineConfig({
   ...config,
   shortcuts: {
      ...config.shortcuts || {},
      'text-gradient': 'text-transparent bg-clip-text bg-gradient-to-tl from-hex-808cc8 via-hex-9945FF to-hex-6d6ff0',
   },
   presets: [
      presetWebFonts({
         fonts: {
            strong: 'Rubik Iso',
            hand: ['Caveat', 'cursive'],
         },
      }),
   ],
})
