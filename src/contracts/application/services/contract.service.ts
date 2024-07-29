import { Injectable } from '@nestjs/common';
import { ContractRepository } from '../../domain/contract.repository.interface';
import { Contract } from '../../domain/contract.entity';

@Injectable()
export class ContractService {
  constructor(private readonly contractRepository: ContractRepository) {}

  async createContract(contract: Contract): Promise<Contract> {
    return this.contractRepository.create(contract);
  }

  async getContracts(accountNumber?: string): Promise<Contract[]> {
    if (accountNumber) {
      return this.contractRepository.findByAccountNumber(accountNumber);
    }
    return this.contractRepository.findAll();
  }
}
