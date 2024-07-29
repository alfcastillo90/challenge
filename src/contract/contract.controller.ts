import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ContractsService } from './contract.service';
import { Contract } from '@prisma/client';

@Controller('contracts')
export class ContractsController {
  constructor(private contractsService: ContractsService) {}

  @Post()
  async createContract(
    @Body()
    contractData: {
      clientName: string;
      email: string;
      initialDate: Date;
      accountNumber?: string;
      amount: bigint;
      currency: string;
    },
  ): Promise<Contract> {
    return this.contractsService.createContract(contractData);
  }

  @Get()
  async getContracts(
    @Query('accountNumber') accountNumber: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ): Promise<Contract[]> {
    const filter = {
      accountNumber,
      startDate: startDate ? new Date(startDate) : undefined,
      endDate: endDate ? new Date(endDate) : undefined,
    };
    return this.contractsService.getContracts(filter);
  }
}
