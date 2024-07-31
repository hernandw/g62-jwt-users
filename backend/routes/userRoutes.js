
import express from 'express';
import { controller } from "../controllers/userController.js";
const router = express.Router()

router.get('/', controller.home)

router.post('/register', controller.register)

router.post('/login', controller.login)

router.get('/profile', controller.profile)

router.get('*', controller.notFound)


export default router