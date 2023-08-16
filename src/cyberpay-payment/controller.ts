import { Request, Response } from "express";
import { Card } from "./model";


export const paymentProcessing = async (req: Request, res: Response) => {
    const data = req.body as Card;
    const { amount, pan, cardHolderName } = data;

    if (pan.length !== 16) {
        throw new Error("incorrect card number format")
    }

    const currentDate = Date.now();
    if (data.expireDate <= currentDate) {
        throw new Error("can not accept card with")
    }

    const arr = [];
    let payment;
    
    if (amount >= 500000) {
        data.paymentGateway = "cyberPay";
        payment = arr.push(data);
        return res.status(201).json({message:"successfully", data:payment})
    }
    if (amount >= 300000 && amount < 500000) {
        data.paymentGateway = "paystack";
        payment = arr.push(data);
        return res.status(201).json({message:"successfully", data:payment})
    }
    if (amount < 300000) {
        data.paymentGateway = "fluterwave";
        payment = arr.push(data);
        return res.status(201).json({message:"successfully", data:payment})
    }

}