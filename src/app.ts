import express from 'express';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
// import cors from 'cors';
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

//rutas
app.use(userRoutes);
app.use(productsRoutes);
app.use(ordersRoutes);
// ************

// db.conectarBD();
// db.conectMysql2();
// db.conectO();
db.conectDB();
app.listen(app.get('port'), () => {
  console.log('Server express on port:', app.get('port'));
});

app.get('/', (req, resp) => {
  resp.send('Server http ON last!!!');
});
