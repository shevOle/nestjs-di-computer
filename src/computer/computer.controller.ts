import { Controller, Get } from '@nestjs/common';
import { CpuService } from '../cpu/cpu.service';
import { DiskService } from '../disk/disk.service';

@Controller('computer')
export class ComputerController {
    constructor(
        private diskService: DiskService,
        private cpuService: CpuService,
    ) {}

    @Get('/run')
    run() {
        const computationResult = this.cpuService.compute(3, 7);
        const dataChunk = this.diskService.readData();

        return [computationResult, dataChunk];
    }
}
