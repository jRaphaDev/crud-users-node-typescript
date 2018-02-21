import { User } from './../entity/User';

import { JsonController, Get, Controller, Res, Req, Param, Post, Body } from 'routing-controllers';
import { Router, Request, Response, NextFunction } from 'express'
import { getManager } from 'typeorm';



@JsonController('/api/v1/users')
export class UserController {

  @Post()
  create(@Body() user: User, @Res() response: Response) {

    const userRepository = getManager().getRepository(User);
    console.log(userRepository, ' 223322 ');
    return response.status(201).send(user)
  }

  @Get('/')
  getAll(@Res() response: Response) {
    const raphael = new User(1, 'Raphael Freitas');
    const victoria = new User(2, 'Victoria Rafaela');

    let users = [];
    users.push(raphael)
    users.push(victoria)

    return response.send(users)
  }

  @Get('/:id')
  getOne(@Param("id") id: number, @Res() response: Response) {
    let id1 : number = 1;
    let id2 : number = 2;

    const raphael = new User(id1, 'Raphael Freitas')
    const victoria = new User(id2, 'Victoria Rafaela')

    let users = [];
    users.push(raphael)
    users.push(victoria)

    const user = users.find(item => item.id === id)

    if (!user) {
      return response.status(404).send({
        message: 'No user found with the given id.',
        status: response.status
      })
    }

    return response.status(200).send({
      message: 'Success',
      status: response.status,
      user
    })
  }

}