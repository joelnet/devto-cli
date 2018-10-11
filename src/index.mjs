#!/bin/sh 
':' //# comment; exec /usr/bin/env NODE_ENV=production node --experimental-modules --no-warnings "$0" "$@"

import log from 'mojiscript/console/log'
import run from 'mojiscript/core/run'
import ifElse from 'mojiscript/logic/ifElse'
import axios from 'mojiscript/net/axios'
import main from './main'
import mockAxios from './mocks/axios.mock'

const isProd = env => env === 'production'
const getAxios = () => axios
const getMockAxios = () => mockAxios

const state = process.argv.slice (2)

const dependencies = {
  axios: ifElse (isProd) (getAxios) (getMockAxios) (process.env.NODE_ENV),
  log
}

run ({ dependencies, state, main })
