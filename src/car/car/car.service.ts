import { Injectable } from '@nestjs/common';
import { Car } from 'src/interfaces/car.interface';

@Injectable()
export class CarService {
  private readonly cars: Car[] = [
    {
      name: 'BMW',
      model: 'd',
      year: 20,
    },
    {
      name: 'BMW',
      model: 'd',
      year: 20,
    },
  ];
  createCar(car: Car) {
    this.cars.push(car);
  }
  findAll() {
    return this.cars;
  }
}
