import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
    constructor(private powerService: PowerService) {}

    readData() {
        const powerCunsumption = 10;
        console.log(`Reading data chunk, needed power - ${powerCunsumption} watts...`);
        this.powerService.supplyPower(powerCunsumption);
        return 'A chunk of data'
    }
}
