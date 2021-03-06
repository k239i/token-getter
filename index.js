const request = require('superagent');
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
//h
