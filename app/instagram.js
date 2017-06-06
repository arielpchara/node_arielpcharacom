import express from 'express'

const router = new express.Router();

export default router;

//831e367d117c42d4ac88f8fd14aef654
//876aeac1bc2940fca67a26e2782534b3

//https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=code
const REDIRECT_URI = 'http://ariel.pchara.com/instagram/code'
const CLIENT_ID = '831e367d117c42d4ac88f8fd14aef654';
const CLIENT_SECRET = '4f7e98a19f074fb5b73d2593cb0e03db';

fetch(`https://api.instagram.com/oauth/authorize/?client_id=CLIENT_ID&redirect_uri=${REDIRECT_URI}&response_type=code`)
  // .then(response => console.log(JSON.stringify(response.body)));

router.get('/instagram/code', (req, res) => {
  const { code } = req.query;
  console.log(`Instagram send code: ${code}`)
  const form = new FormData();
  form.append('client_id', CLIENT_ID);
  form.append('client_secret', CLIENT_SECRET);
  form.append('grant_type', 'authorization_code');
  form.append('code', code);
  form.append('redirect_uri', 'http://ariel.pchara.com/instagram/token');
  res.json(form);
  fetch(`https://api.instagram.com/oauth/access_token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: form
  })
  // .then(response => response.json())
  .then(response => console.log(response.status, response.statusText));
});

router.all('/instagram/token', (req, res) => {
  console.log(`Instagram Token is: ${JSON.stringify(req.body)}`);
});

