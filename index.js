const request = require('superagent');
//h
const {Client} = require('discord.js');
const client = new Client();
client.on('message', message => {
  const args = message.content.split(' ');
  var details = {
    email: 'zannko@woko.cow',
    password: 'zannkowo'
  };
  request
  .post('https://discord.com/api/auth/login')
  .send(details)
  .end(function(err, res) {
  console.log(err)
  var dat = res.body;
  console.log(dat.token);
});
