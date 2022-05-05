import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { format } from 'path';
import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/user.entity';
import { User } from '../models/user.inteface';
import { from } from 'rxjs';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity) private readonly userReposictory :Repository<UserEntity>
    ){}  

    create(user:User): Observable<User>{
        return from(this.userReposictory.save(user))
    }

    findOne(id:number): Observable<User>{
        return from(this.userReposictory.findOne({id}))            
    } 

    findAll(): Observable<User[]>{
        return from(this.userReposictory.find())            
    }

    deleteOne(id:number): Observable<any>{
        return from(this.userReposictory.delete(id))            
    }
 
    updateOne(id:number, user:User): Observable<any>{
        return from(this.userReposictory.update(id,user))            
    }



}
