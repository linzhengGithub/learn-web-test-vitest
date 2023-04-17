import { it, expect, describe } from 'vitest'
import { FileReaderClass_Fn, FileReaderClass_constructor, FileReaderClass_property, FileReaderStruct } from './dependInject';


describe('depend Class', () => {
  it('构造函数', () => {
    class StubFileReadClass implements FileReaderStruct {
      read(filePath: string): string {
        return '->readFile'
      }
    }

    const readAndProcessClass = new FileReaderClass_constructor(new StubFileReadClass())
    const result = readAndProcessClass.run('./test')
    
    expect(result).toBe('Finally->readFile');
  })
  it('属性', () => {
    class StubFileReadClass implements FileReaderStruct {
      read(filePath: string): string {
        return '->readFile'
      }
    }

    const readAndProcessClass = new FileReaderClass_property()
    readAndProcessClass.fileReader = new StubFileReadClass()
    const result = readAndProcessClass.run('./test')

    expect(result).toBe('Finally->readFile');
  })
  it('方法', () => {
    class StubFileReadClass implements FileReaderStruct {
      read(filePath: string): string {
        return '->readFile'
      }
    }

    const readAndProcessClass = new FileReaderClass_Fn()
    readAndProcessClass.setFileReader(new StubFileReadClass())
    const result = readAndProcessClass.run('./test')

    expect(result).toBe('Finally->readFile');
  })
})
