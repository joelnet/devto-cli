import pipe from 'mojiscript/core/pipe'

const helpText = `usage: devto [<command>] [<args>]

  <default>
    Show article feed
  read <id>    Read an article
`

export const showHelp = ({ log }) => pipe ([
  () => log (helpText)
])
