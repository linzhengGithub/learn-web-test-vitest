import glob from 'glob';
import fs from 'fs/promises';
import { build } from 'esbuild';

// 1. 获取所有的测试脚本
const files = glob.sync('*.spec.js')

// 2. 执行这些脚本
for (const file of files) {
  const fileContent = await fs.readFile(file, 'utf-8')
  await runModule(fileContent)
}


// 通过 build 打包所有测试文件 如果不打包import是直接执行不了的，要编译
async function runModule(fileContent) {
  // 打包
  const result = await build({
    stdin: {
      contents: fileContent,
      resolveDir: process.cwd()
    },
    write: false, // 是否创建到当前文件夹中
    bundle: true,
    target: 'esnext' // 输出
  })
  new Function(result.outputFiles[0].text)()
}



