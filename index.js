const request = require('superagent');
//h
const {Client} = require('discord.js');
const client = new Client();
client.on('message', message => {
  if(message.channel.type !== 'dm')  return;
  const args = message.content.split(' ');
  var details = {
    email: args[0],
    password: args[1]
  };
  request
  .post('https://discord.com/api/auth/login')
  .send(details)
  .end(function(err, res) {
    console.log(err)
    var dat = res.body;
    if(!dat.token)
      return message.channel.send('メールアドレスかパスワードが無効です。\n又はアカウントが無効化されています');
    message.channel.send(dat.token);
  });
});
client.login(process.env.token);
