import express from 'express';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import db from './infraestructure/database';
//routes
import userRoutes from './application/users.routes';
import productsRoutes from './application/products.routes';
import ordersRoutes from './application/orders.routes';

//Inicialitizations
const app = express();
dotenv.config();
app.set('port', process.env.APP_PORT);
// ************

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:4200'],
    credentials: true,
  })
);

//rutas
app.use(userRoutes);
app.use(productsRoutes);
app.use(ordersRoutes);
// ************

db.conectDB();
const server = app.listen(app.get('port'), () => {
  console.log('Server express on port:', app.get('port'));
});

app.get('/', (req, resp) => {
  resp.send('Server http ON last!!!');
});

var shutting_down = false;

app.use(function (req, resp, next) {
  if (!shutting_down) return next();
  resp.setHeader('Connection', 'close');
  resp.send(503);
});

function cleanup() {
  shutting_down = true;
  server.close(function () {
    console.log('Closed out remaining connections.');
    db.desconectarDB();
    process.exit();
  });
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);

export default server;
export { db };
