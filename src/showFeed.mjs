import pipe from 'mojiscript/core/pipe'
import map from 'mojiscript/list/map'
import $ from 'mojiscript/string/template'
import { getDevToHtml } from './api'
import { getElements } from './interop/cheerio'
import { parseElement } from './interop/feedParser'

const formatPost = $`${'id'}・${'title'}
${'url'}\n#${'tags'}
${'username'} ・ 💖  ${'comments'} 💬  ${'reactions'}
`

export const shouldShowFeed = args => args.length < 1

export const getArticles = axios => pipe ([
  getDevToHtml (axios),
  getElements ('.single-article:not(.feed-cta)'),
  map (parseElement)
])

export const showFeed = ({ axios, log }) => pipe ([
  getArticles (axios),
  map (formatPost),
  map (log)
])
