import chalk from 'chalk';

export class propulsores {
    private leftPropulsor: boolean;
    private rightPropulsor: boolean;
    private hidroPropulsor: number;
    private potencia: number;
    private superChargeActive: boolean;

    constructor() {
        this.leftPropulsor = true;
        this.rightPropulsor = true;
        this.hidroPropulsor = 5000;
        this.potencia = 10000;
        this.superChargeActive = false;
    }

} 