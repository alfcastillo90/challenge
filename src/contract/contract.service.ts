import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Contract } from '@prisma/client';

@Injectable()
export class ContractsService {
  constructor(private prisma: PrismaService) {}

  async createContract(data: {
    clientName: string;
    email: string;
    initialDate: Date;
    accountNumber?: string;
    amount: bigint;
    currency: string;
  }): Promise<Contract> {
    return this.prisma.contract.create({ data });
  }

  async getContracts(filter: {
    accountNumber?: string;
    startDate?: Date;
    endDate?: Date;
  }): Promise<Contract[]> {
    const { accountNumber, startDate, endDate } = filter;
    return this.prisma.contract.findMany({
      where: {
        accountNumber,
        initialDate: {
          gte: startDate,
          lte: endDate,
        },
      },
    });
  }
}
