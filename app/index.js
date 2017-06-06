import express from 'express'
import dotenv from 'dotenv'
import { join } from 'path'
import { readFileSync } from 'fs'
import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import fetch from 'isomorphic-fetch'
import redis from 'redis'
import FormData from 'form-data'

import reducers from '../src/reducers'
import HelloCenter from '../src/components/HelloCenter'

import instagram from './instagram'

import renderFullPage from './server-render'

dotenv.config();

const app = express();

app.use(instagram);

app.use(express.static(join(__dirname, './dist')));

app.use((req, res) => {
  const store = createStore(reducers);
  const html = renderToString(<Provider store={store}><HelloCenter /></Provider>);
  const preloadedState = store.getState(); res.send(renderFullPage(html, preloadedState))
});

app.listen(process.env.PORT, () => console.log(`Server start on ${process.env.PORT}`));