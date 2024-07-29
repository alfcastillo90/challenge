import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ContractModule } from './contracts/infraestructure/http/contract.module';

@Module({
  imports: [PrismaModule, ContractModule],
})
export class AppModule {}
