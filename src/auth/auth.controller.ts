import { Controller, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {}

    @Post('/login')
    postLogin(@Req() req, @Res() res): string {
        console.log('bdy', req.body);
        return 'true body'
    }   
}
