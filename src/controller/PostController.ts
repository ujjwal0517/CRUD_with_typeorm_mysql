import {Request, Response} from 'express'
import { getRepository } from 'typeorm'
import { PlatformTools } from 'typeorm/platform/PlatformTools'
import {Post} from '../entity/Post'

export class PostController{
    static getAllData = async(req:Request, res:Response)=>{
            const result =  await getRepository(Post).find()
            res.json(result)
    }
    static getData = async(req:Request, res:Response)=>{
        const id = req.params.id;
        const result = await getRepository(Post).findOne(id)
        res.json(result);
    }
    static createPost =async (req:Request, res:Response) => {
        const newPost = {
            title: req.body.title,
            content: req.body.content
        }
     
       
        const result = await getRepository(Post).save(newPost)
        res.json({data:result, message:'Post added Successfully'})
       
    }
    static updatePost = async (req: Request, res:Response)=>{
        const id = req.params.id;
        const post = await getRepository(Post).findOne(id)
        if(post){
            getRepository(Post).merge(post, req.body)
            const result = await getRepository(Post).save(post)
            res.json({data:result, message:"Post Updated successfully"})
        }else{
            res.status(204).json({message: 'Post not found to Update'})
        }
    }
    static deletePost = async (req:Request, res:Response)=>{
        const id = req.params.id;
       
        const result = await getRepository(Post).delete(id);
        res.json({message:"Post Deleted Successfully"})
    }
}