import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  singup(@Body() createUserhDto: CreateUserDto){
    return this.authService.registerUser(createUserhDto)
  }

  @Post("login")
  login(@Body() createUserDto: CreateUserDto){
    return this.authService.loginUser(createUserDto)
  }
}
