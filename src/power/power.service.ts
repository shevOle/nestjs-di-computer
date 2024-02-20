import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
    supplyPower(amount: number): void {
        console.log(`Supplying ${amount} watts of power!`);
    }
}
