// server.js
// https://github.com/typicode/json-server
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
