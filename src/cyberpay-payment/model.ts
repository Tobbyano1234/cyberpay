

export interface Card {
    pan: string;
    ccv: number;
    cardHolderName: string;
    amount: number;
    paymentRef: string;
    expireDate: Date;
    paymentGateway?:string
}