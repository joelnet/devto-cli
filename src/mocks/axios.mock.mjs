import pipe from 'mojiscript/core/pipe'
import ifElse from 'mojiscript/logic/ifElse'
import { readUtf8File } from '../interop/fs'

const feedOrArticle = ifElse (url => url === 'https://dev.to') (() => 'devto.html') (() => 'article.html')

const mockAxios = {
  get: url => pipe ([
    () => feedOrArticle (url),
    readUtf8File,
    data => ({ data })
  ])
}

export default mockAxios
