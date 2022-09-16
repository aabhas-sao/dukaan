import { Body, Controller, Post, Res } from '@nestjs/common';
import { OperatorsService } from './operators.service';
import { OperatorsDocument } from './schemas/operators.schema';

@Controller('operators')
export class OperatorsController {
  constructor(private readonly operatorsService: OperatorsService) {}

  @Post('signin')
  signIn(
    @Body() body,
    @Res() res,
  ): Promise<string> | Promise<OperatorsDocument> {
    return this.operatorsService.signIn(body, res);
  }

  @Post('signup')
  signUp(
    @Body() body: any,
    @Res() res,
  ): Promise<string> | Promise<OperatorsDocument> {
    return this.operatorsService.signUp(body, res);
  }
}
