const jsonserver=require('json-server');
const server=jsonserver.create();
const router=jsonserver.router('db.json');
require('dotenv').config()
const middlewares=jsonserver.defaults();
const cors=require('cors');
const port=3030;

server.use(cors());
server.use(jsonserver.bodyParser)
server.use(middlewares)
server.use(router)


server.listen(port,()=>{
    console.log(`Server is running at ${port}` );
})