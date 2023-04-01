import { Controller, Get, Injectable, Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

// Service
@Injectable()
export class AppService {
  sayHello() {
    return 'This is my first App';
  }
}

// Controller
@Controller()
export class AppController {
  constructor(private appService: AppService) { }

  @Get()
  sayHello() {
    return this.appService.sayHello();
  }
}


// Module
@Module({
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

// Bootstrap the application
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

