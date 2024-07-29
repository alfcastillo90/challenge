import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContractModule } from './contract/contract.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ContractModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
