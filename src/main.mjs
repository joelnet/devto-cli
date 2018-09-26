import pipe from 'mojiscript/core/pipe'

const main = ({ log }) => pipe ([
  'Hello World',
  log
])

export default main
