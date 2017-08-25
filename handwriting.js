'use strict';

var request = require('request');
var fs = require('fs');

var config = {
  url: 'url',
  token: 'your token',
}


function main() {
  request({
    method: "POST",
    url: config.url,
    formData: {
      token: config.token,
      img: fs.createReadStream('./demo.jpg'),
    }
  }, function(err, res) {
    if (err) {
      console.error(err)
      return;
    }

    console.log(res.body);
  })
}

main();