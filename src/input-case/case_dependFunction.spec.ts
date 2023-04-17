import { it, expect, describe } from 'vitest'
import { FileReaderStruct, readAndProcessFile } from './dependInject'

describe('depend function', () => {
  it('function', () => {
    class StubFileReader implements FileReaderStruct {
      read(filePath: string) {
        return '->readFile'
      }
    }
    
    const result = readAndProcessFile('./test', new StubFileReader())

    expect(result).toBe('Finally->readFile');
  })
})

