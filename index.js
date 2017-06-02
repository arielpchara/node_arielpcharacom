import express from 'express'
import dotenv from 'dotenv'
import { join } from 'path'
import { readFileSync } from 'fs'
import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import reducers from './src/reducers'

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

app.use(express.static(join(__dirname, './dist')));

app.use((req, res) => {

    const store = createStore(reducers);

    const html = renderToString(<Provider store = { store }>
            <HelloCenter/>
    </Provider>);
    const preloadedState = store.getState();
    res.send(renderFullPage(html, preloadedState))
    // res.send(readFileSync(join(__dirname, 'index.html'), 'utf-8'));
});

app.listen(process.env.PORT, () => console.log(`Server start on ${process.env.PORT}`));