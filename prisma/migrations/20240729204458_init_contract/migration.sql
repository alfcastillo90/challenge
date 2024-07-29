-- CreateTable
CREATE TABLE "Contract" (
    "id" SERIAL NOT NULL,
    "clientname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "initialdate" TIMESTAMP(3) NOT NULL,
    "accountNumber" INTEGER,
    "amount" BIGINT NOT NULL,
    "currency" INTEGER NOT NULL,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);
