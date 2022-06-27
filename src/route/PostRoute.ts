import {Router} from 'express';
import { PostController } from '../controller/PostController';

const route = Router()
route.get('/', PostController.getAllData)
route.get('/get/:id', PostController.getData)
route.post('/create', PostController.createPost)
route.put('/update/:id', PostController.updatePost)
route.delete('/:id', PostController.deletePost)

export default route;