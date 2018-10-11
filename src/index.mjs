import pipe from 'mojiscript/core/pipe'
import log from 'mojiscript/console/log'
import run from 'mojiscript/core/run'
//import axios from 'mojiscript/net/axios'
import main from './main'
import { readUtf8File } from './interop/fs'

const mockAxios = {
  get: () => pipe ([
    () => readUtf8File ('devto.html'),
    data => ({ data })
  ])
}

const dependencies = {
  axios: mockAxios,
  log
}

run ({ dependencies, main })
