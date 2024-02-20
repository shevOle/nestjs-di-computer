import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {
    constructor(private powerService: PowerService) {}

    compute(a: number, b: number): number {
        const powerCunsumption = 25;
        console.log(`Computing heavy operation, needed power - ${powerCunsumption} watts...`);
        this.powerService.supplyPower(powerCunsumption);
        return a ** b
    }
}
