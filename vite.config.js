import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2'
const { resolve } = require('path');

export default defineConfig({
	plugins: [createVuePlugin()],
	build: {
		outDir: 'lib',
		lib: {
			entry: resolve(__dirname, 'packages/index.js'),
			name: 'TbComp',
			fileName: 'tb-comp',
		},
		rollupOptions: {
			// 确保外部化处理那些你不想打包进库的依赖
			external: ['vue'],
			output: {
				// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: {
					vue: 'Vue',
				},
			},
		},
	},
});
