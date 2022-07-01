/*
 * @Author: shimingxia
 * @Date: 2022-07-01 09:44:29
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-07-01 09:46:05
 * @Description: 
 */
var request = require('request')
setInterval(() => {
  request('http://localhost:3000', function(error, response, body) {
    console.log('body: ', body)
  })
}, 1000)