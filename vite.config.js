import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteRequire } from 'vite-require'

export default defineConfig({
    plugins: [
        viteRequire(),
        react({
            jsxRuntime: 'classic',
            babel: {
                plugins: [
                    '@babel/plugin-proposal-do-expressions',
                ],
            },
        }),
    ],
})