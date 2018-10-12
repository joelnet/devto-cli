import pipe from 'mojiscript/core/pipe'

const getData = response => response.data

export const getUrl = axios => pipe ([
  url => axios.get (url) ({}),
  getData
])

export const getDevToHtml = axios => pipe ([
  () => getUrl (axios) ('https://dev.to')
])
