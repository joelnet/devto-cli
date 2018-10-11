import pipe from 'mojiscript/core/pipe'

const getData = response => response.data

export const getDevToHtml = axios => pipe ([
  () => axios.get ('https://dev.to') ({}),
  getData
])
