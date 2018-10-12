import pipe from 'mojiscript/core/pipe'
import cond from 'mojiscript/logic/cond'
import { shouldShowFeed, showFeed } from './showFeed'
import { showHelp } from './showHelp'
import { shouldShowArticle, showArticle } from './showArticle'

const main = dependencies => pipe ([
  cond ([
    [ shouldShowArticle, args => showArticle (dependencies) (args[1]) ],
    [ shouldShowFeed, showFeed (dependencies) ],
    [ () => true, showHelp (dependencies) ]
  ])
])

export default main
