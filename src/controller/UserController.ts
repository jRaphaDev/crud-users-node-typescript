import { Observable } from 'rxjs/';

import { UserRepository } from './../repository/UserRepository';
import { User } from './../entity/User';

import { JsonController, Get, Controller, Res, Req, Param, Post, Body } from 'routing-controllers';
import { Router, Request, Response, NextFunction } from 'express'
import { getConnection } from 'typeorm';
import { Subscription } from 'rxjs/Subscription';

@JsonController('/api/v1/users')
export class UserController {

  private userRepository: UserRepository

  constructor() {
    this.userRepository = new UserRepository()
  }

  @Post('/')
  create(@Body() user: User, @Res() response: Response): Promise<Response> {

    return this.userRepository.create(user).toPromise()
      .then((user: User) => {

        if (user == null) {
          console.log('User was not created')
          return response.status(400).send('User was not create')
        }

        console.log('User created with success')
        return response.status(200).json(user)
      })
      .catch(err => {

        console.log(`INTERNAL SERVER ERROR: ${err}`)
        return response.status(500).send(err)
      })
  }

  @Get('/')
  getAll(@Res() response: Response): Promise<Response> {

    return this.userRepository.findAll().toPromise()
      .then((users: User[]) => {

        console.log(`was found ${users.length} users with success`)
        return response.status(200).send(users)
      })
      .catch(err => {

        console.log(`INTERNAL SERVER ERROR: ${err}`)
        return response.status(500).send(err);
      })
  }

  @Get('/:id')
  getOne(@Param("id") id: number, @Res() response: Response): Promise<Response> {

    return this.userRepository.findOne(id).toPromise()
      .then((user: User) => {

        if (user == null) {
          console.log(`the user was not found`)
          return response.status(404).send(user)
        }

        console.log(`the user ${user.getName()} was found with success`)
        return response.status(200).send(user)
      })
      .catch(err => {

        console.log(`INTERNAL SERVER ERROR: ${err}`)
        return response.status(500).send(err);
      })
  }

}