import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class HomeController {
    constructor() {}

    @Get()
    @Render('index.hbs')
    async renderIndex() {
        return { users: [] };
    }
}
