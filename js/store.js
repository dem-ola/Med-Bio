'use strict'

import { createStore } from 'redux'
import {userStatus} from './reducers.js'
export let store = createStore(userStatus)