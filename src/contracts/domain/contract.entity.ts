export class Contract {
  constructor(
    public id: number,
    public clientName: string,
    public email: string,
    public initialDate: Date,
    public accountNumber: string,
    public amount: bigint,
    public currency: string,
  ) {}
}
