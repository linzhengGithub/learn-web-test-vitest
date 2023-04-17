import { readFileSync } from 'fs';

/**
 * 依赖倒置原则, 程序接缝的概念
 * a -> b ===>  a -> 接口 <- b
 * 原本(a)强依赖于 fs 中的函数, 但是通过抽离成传入一个(b)函数
 * 通过一个接口来限制这个函数
 * 比如含read方法 那么(b)中只要符合这个接口限制含有一个read 但是read方法中的实现可以自由定义
 */

// 这里强依赖于 fs 中的 readFileSync 函数
// export function readAndProcessFile(filePath: string) {
//   const content: string = readFileSync(filePath, { encoding: 'utf-8' })
//   // process ...
//   return 'Finally:' + content
// }

export interface FileReaderStruct {
  read(filePath: string): string
}
// 通过外部传入的方式 解决强依赖问题
export function readAndProcessFile(filePath: string, fileReader: FileReaderStruct): string {
  const content: string = fileReader.read(filePath)
  // process ...
  return 'Finally' + content
}

// 函数形式
export class FileReaderFn implements FileReaderStruct {
  read(filePath: string): string {
    return readFileSync(filePath, { encoding: 'utf-8' })
  }
}

// const result = readAndProcessFile('./test', new FileReaderFn())
// console.log(result);

// class 形式
// 构造函数
export class FileReaderClass_constructor {
  private _fileReader: any;
  constructor(fileReader: FileReaderStruct) {
    this._fileReader = fileReader
  }

  run(filePath: string): string {
    const content = this._fileReader.read(filePath, { encoding: 'utf-8' })
    // process ...
    return 'Finally' + content
  }
}
// 属性
export class FileReaderClass_property {
  private _fileReader: any;
  constructor() { }

  run(filePath: string): string {
    const content = this._fileReader.read(filePath, { encoding: 'utf-8' })
    // process ...
    return 'Finally' + content
  }

  set fileReader(fileReader: FileReaderStruct) {
    this._fileReader = fileReader
  }
}
// 方法
export class FileReaderClass_Fn {
  private _fileReader: any;
  constructor() { }

  run(filePath: string): string {
    const content = this._fileReader.read(filePath, { encoding: 'utf-8' })
    // process ...
    return 'Finally' + content
  }

  setFileReader(fileReader: FileReaderStruct) {
    this._fileReader = fileReader
  }
}
