import fs from 'fs'
import curry from 'mojiscript/function/curry'
import { promisify } from 'util'

export const writeFile = curry (3) (promisify (fs.writeFile))

export const writeUtf8File = file => data => writeFile (file) (data) ('utf8')

export const readFile = curry (2) (promisify (fs.readFile))

export const readUtf8File = file => readFile (file) ('utf8')
