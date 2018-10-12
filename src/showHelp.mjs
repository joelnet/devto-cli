import pipe from 'mojiscript/core/pipe'

export const showHelp = ({ log }) => pipe ([
  () => log ('usage: devto [<command>] [<args>]\n\n  <default>    Show article feed\n  read <id>    Read an article\n')
])
