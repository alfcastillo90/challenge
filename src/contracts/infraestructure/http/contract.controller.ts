import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ContractService } from '../../application/services/contract.service';
import { Contract } from '../../domain/contract.entity';

@Controller('contracts')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @Post()
  async createContract(@Body() contractData: Contract): Promise<Contract> {
    return this.contractService.createContract(contractData);
  }

  @Get()
  async getContracts(
    @Query('accountNumber') accountNumber?: string,
  ): Promise<Contract[]> {
    return this.contractService.getContracts(accountNumber);
  }
}
