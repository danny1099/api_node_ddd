import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import userRoute from './infrastructure/routes/user.route';
import { connect } from './infrastructure/database/mongo';

const app = express();
const PORT = process.env.PORT;

/* Configuración inicial del servidor */
app.use(cors());
app.use(express.json());

/* Carga de rutas de la applicación */
app.use(userRoute);

/* Inicialización del servidor con el evento listen */
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  connect();
});
