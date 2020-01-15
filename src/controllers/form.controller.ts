import { Controller, Get, Post } from '@nestjs/common';
import { FormService } from '../services/form.service';

@Controller()
export class FormController {
    constructor(private readonly formService: FormService) {
    }

    @Post('/form')
    getForm(): string {
        return this.formService.getForm();
    }
}
