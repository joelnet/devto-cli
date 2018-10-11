import cheerio from 'cheerio'
import htmlToText from 'html-to-text'
import W from 'mojiscript/combinators/W'
import pipe from 'mojiscript/core/pipe'
import filter from 'mojiscript/list/filter'
import ifElse from 'mojiscript/logic/ifElse'
import $ from 'mojiscript/string/template'
import { getUrl } from './api'
import { parseArticle } from './interop/articleParser'
import { getArticles } from './showFeed'

const isArticleFound = article => article != null
const showArticleNotFound = $`Article ${0} not found.\n`
const getArticleTextFromUrl = axios => pipe ([
  ({ url }) => getUrl (axios) (url),
  cheerio.load,
  parseArticle,
  article => `${article.title}\n\n${htmlToText.fromString (article.body)}`
])

export const shouldShowArticle = args => args.length === 2 && args[0] === 'read'

const getArticle = ({ axios }) => W (id => pipe ([
  getArticles (axios),
  filter (article => article.id === id),
  articles => articles[0]
]))

export const showArticle = ({ axios, log }) => W (id => pipe ([
  getArticle ({ axios }),
  ifElse (isArticleFound) (getArticleTextFromUrl (axios)) (() => showArticleNotFound (id)),
  log
]))
