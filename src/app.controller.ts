import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';

@Controller('get')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private prisma: PrismaService,
  ) {}

  @Get('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;

    const qtd = await this.prisma.rocketTeamMember.count();
    const members = await this.prisma.rocketTeamMember.findMany();

    const member = await this.prisma.rocketTeamMember.create({
      data: {
        id: randomUUID(),
        name,
        function: memberFunction,
      },
    });
    return {
      member,
      qtd,
      members,
    };
  }
}
