import {Controller, Get, Injectable} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('/version')
    getVersion(): object {
        return this.appService.getVersion();
    }
}
