import { Module } from '@nestjs/common';
import { ContractController } from './contract.controller';
import { ContractService } from '../../application/services/contract.service';
import { PrismaContractRepository } from '../prisma/prisma.contract.repository';
import { PrismaModule } from '../../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ContractController],
  providers: [
    ContractService,
    {
      provide: 'ContractRepository',
      useClass: PrismaContractRepository,
    },
  ],
})
export class ContractModule {}
