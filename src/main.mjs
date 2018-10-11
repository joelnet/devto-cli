import pipe from 'mojiscript/core/pipe'
import map from 'mojiscript/list/map'
import $ from 'mojiscript/string/template'
import { getDevToHtml } from './api'
import { getElements } from './interop/cheerio'
import { parseElement } from './interop/parser'

const formatPost = $`${'title'}
${'url'}\n#${'tags'}
${'username'} ・ 💖  ${'comments'} 💬  ${'reactions'}
`

const main = ({ axios, log }) => pipe ([
  getDevToHtml (axios),
  getElements ('.single-article:not(.feed-cta)'),
  map (parseElement),
  map (formatPost),
  map (log)
])

export default main
