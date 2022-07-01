/*
 * @Author: shimingxia
 * @Date: 2022-07-01 09:12:02
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-07-01 09:14:15
 * @Description: 
 */
const http = require('http')
const server = http.createServer((request, response) => {
  Math.random() > 0.5 ? aa() : 2
  response.end('hello stoney')
})

if(!module.parent) {
  server.listen(3000)
  console.log('app started at port 3000...')
} else {
  module.exports = server
}