import mongoose from 'mongoose';

/* Parametros de conexion de mongo db */
const connection: string = process.env.MONGO_DB_URI || '';

/* Conectar al servicio de mondo db con el metodo connect */
mongoose.set('strictQuery', false);

export const connect = async () => {
  try {
    await mongoose.connect(connection);
    return console.log('La base de datos se ha conectado exitosamente');
  } catch (e: any) {
    return console.log(e.message);
  }
};

export const disconnect = () => {
  return mongoose.connection.close();
};
