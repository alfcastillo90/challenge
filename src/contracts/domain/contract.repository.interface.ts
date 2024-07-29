import { Contract } from './contract.entity';

export interface ContractRepository {
  create(contract: Contract): Promise<Contract>;
  findAll(): Promise<Contract[]>;
  findByAccountNumber(accountNumber: string): Promise<Contract[]>;
}
