import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from 'src/dto/createcar-dto';
import { Car } from 'src/interfaces/car.interface';

@Controller('cars')
export class CarController {
  constructor(private carsService: CarService) {}
  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.createCar(createCarDto);
  }
  @Get()
  async findAll(): Promise<Car[]> {
    return this.carsService.findAll();
  }
}
