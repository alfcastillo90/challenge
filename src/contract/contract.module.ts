import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ContractsController } from './contract.controller';
import { ContractsService } from './contract.service';

@Module({
  controllers: [ContractsController],
  providers: [ContractsService, PrismaService],
})
export class ContractModule {}
