import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { ContractRepository } from '../../domain/contract.repository.interface';
import { Contract } from '../../domain/contract.entity';
import { Prisma } from '@prisma/client';

@Injectable()
export class PrismaContractRepository implements ContractRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(contract: Contract): Promise<Contract> {
    const prismaContract = await this.prisma.contract.create({
      data: {
        clientName: contract.clientName,
        email: contract.email,
        initialDate: contract.initialDate,
        accountNumber: contract.accountNumber,
        amount: contract.amount,
        currency: contract.currency,
      },
    });
    return new Contract(
      prismaContract.id,
      prismaContract.clientName,
      prismaContract.email,
      prismaContract.initialDate,
      prismaContract.accountNumber,
      prismaContract.amount,
      prismaContract.currency,
    );
  }

  async findAll(): Promise<Contract[]> {
    const prismaContracts = await this.prisma.contract.findMany();
    return prismaContracts.map(
      (c) =>
        new Contract(
          c.id,
          c.clientName,
          c.email,
          c.initialDate,
          c.accountNumber,
          c.amount,
          c.currency,
        ),
    );
  }

  async findByAccountNumber(accountNumber: string): Promise<Contract[]> {
    const prismaContracts = await this.prisma.contract.findMany({
      where: { accountNumber },
    });
    return prismaContracts.map(
      (c) =>
        new Contract(
          c.id,
          c.clientName,
          c.email,
          c.initialDate,
          c.accountNumber,
          c.amount,
          c.currency,
        ),
    );
  }
}
