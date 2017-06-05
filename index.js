import express from 'express'
import dotenv from 'dotenv'
import { join } from 'path'
import { readFileSync } from 'fs'
import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import reducers from './src/reducers'
import fetch from 'isomorphic-fetch'
import redis from 'redis'

import HelloCenter from './src/components/HelloCenter';

dotenv.config();

const app = express();

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Ariel Pchara</title>
        <link href="https://fonts.googleapis.com/css?family=Architects+Daughter|Playfair+Display|Palanquin+Dark" rel="stylesheet">
        <link rel="stylesheet" href="/bundle.css">
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/bundle.js" type="text/javascript"></script>
      </body>
    </html>`
}


//831e367d117c42d4ac88f8fd14aef654
//876aeac1bc2940fca67a26e2782534b3

//https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=code
const REDIRECT_URI = 'http://ariel.pchara.com/instagram/code'
const CLIENT_ID = '831e367d117c42d4ac88f8fd14aef654';
const CLIENT_SECRET = '4f7e98a19f074fb5b73d2593cb0e03db';

fetch(`https://api.instagram.com/oauth/authorize/?client_id=CLIENT_ID&redirect_uri=${REDIRECT_URI}&response_type=code`)
  // .then(response => console.log(JSON.stringify(response.body)));

app.get('/instagram/code', (req, res) => {
  const { code } = req.query;
  console.log(`Instagram send code: ${code}`)
  res.send(1);
  fetch(`https://api.instagram.com/oauth/access_token`, {
    methid: 'POST',
    body: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: 'authorization_code',
      code,
      redirect_uri: 'http://ariel.pchara.com/instagram/token'
    }
  })
    .then(response => console.log(JSON.stringify(response)));
});

app.all('/instagram/token', (req, res) => {
  console.log(`Instagram Token is: ${JSON.stringify(req.body)}`);
});

app.use(express.static(join(__dirname, './dist')));

app.use((req, res) => {
  const store = createStore(reducers);
  const html = renderToString(<Provider store={store}><HelloCenter /></Provider>);
  const preloadedState = store.getState(); res.send(renderFullPage(html, preloadedState))
});

app.listen(process.env.PORT, () => console.log(`Server start on ${process.env.PORT}`));