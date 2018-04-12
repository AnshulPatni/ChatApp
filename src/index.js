import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import chat from './reducers'

import * as types from '../constants/ActionTypes'

let nextMessageId = 0
let nextUserId = 0

export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author
})

export const addUser = name => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name
})

export const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author
})

export const populateUsersList = users => ({
  type: types.USERS_LIST,
  users
})

const store = createStore(chat)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()