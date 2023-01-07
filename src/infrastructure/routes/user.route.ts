import { MongoRepository } from './../repositorys/mongo.repo';
import { UserController } from './../controllers/user.controller';
import { UserUseCase } from './../../application/user.usecase';
import { Router } from 'express';

const route = Router();

/* Inicializacion del repositorio y use case */
const mongoUserRepository = new MongoRepository();
const userUseCase = new UserUseCase(mongoUserRepository);

/* Inicializa la clase controlador para ruta */
const userController = new UserController(userUseCase);

/* End points de la entidad usuario */
route.get('/api/user', userController.getAllUsers);
route.get('/api/user/:id', userController.getUserById);
route.post('/api/user', userController.createNewUser);

export default route;
