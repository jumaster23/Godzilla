"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropulsorSystem = void 0;
const chalk_1 = __importDefault(require("chalk"));
class PropulsorSystem {
    constructor() {
        this.leftPropulsor = true;
        this.rightPropulsor = true;
        this.hidroPropulsor = 5000;
        this.potencia = 10000;
        this.superChargeActive = false;
    }
    getPowerBase() {
        return this.hidroPropulsor + this.potencia;
    }
    getLeftPropulsorStatus() {
        return this.leftPropulsor;
    }
    getRightPropulsorStatus() {
        return this.rightPropulsor;
    }
    setPropulsorStatus(left, right) {
        this.leftPropulsor = left;
        this.rightPropulsor = right;
        // Si ambos propulsores fallan, activar Super Charge
        if (!left && !right) {
            this.superChargeActive = true;
            console.log(chalk_1.default.red.bold('⚠️  SOLDADO... Cuando los 2 propulsores no estén en funcionamiento... temo que debemos prepararnos para lo peor...'));
        }
    }
    isSuperChargeActive() {
        return this.superChargeActive;
    }
    calculateRequiredPower() {
        const powerBase = this.getPowerBase();
        let threshold;
        let requiredPower = powerBase;
        // Determinar umbral
        if (this.leftPropulsor && this.rightPropulsor) {
            threshold = 0.75; // 75% si ambos están buenos
        }
        else {
            threshold = 0.90; // 90% en cualquier otro caso
        }
        // Cálculo especial por propulsor
        if (this.leftPropulsor && !this.rightPropulsor) {
            // Solo izquierdo funciona
            const requiredIzquierdo = Math.pow(0.90, 2) / 3 * this.potencia;
            requiredPower = powerBase + requiredIzquierdo;
            console.log(chalk_1.default.yellow(`📊 Potencia requerida adicional (solo izquierdo): ${requiredIzquierdo.toFixed(2)}`));
        }
        else if (this.rightPropulsor && !this.leftPropulsor) {
            // Solo derecho funciona
            const requiredDerecho = Math.pow(0.90, 4) / 2 * this.hidroPropulsor;
            requiredPower = powerBase + requiredDerecho;
            console.log(chalk_1.default.yellow(`📊 Potencia requerida adicional (solo derecho): ${requiredDerecho.toFixed(2)}`));
        }
        const thresholdPower = powerBase * threshold;
        const canLaunch = requiredPower >= thresholdPower;
        console.log(chalk_1.default.blue(`📊 Análisis de potencia:`));
        console.log(chalk_1.default.blue(`   - Potencia base: ${powerBase}`));
        console.log(chalk_1.default.blue(`   - Umbral (${(threshold * 100)}%): ${thresholdPower.toFixed(2)}`));
        console.log(chalk_1.default.blue(`   - Potencia requerida: ${requiredPower.toFixed(2)}`));
        console.log(chalk_1.default.blue(`   - Estado propulsores: Izq=${this.leftPropulsor ? '✅' : '❌'}, Der=${this.rightPropulsor ? '✅' : '❌'}`));
        return {
            threshold,
            requiredPower,
            canLaunch
        };
    }
    attemptLaunch() {
        const analysis = this.calculateRequiredPower();
        if (this.superChargeActive) {
            return {
                success: false,
                message: '❌ FALLO TOTAL: Ambos propulsores inoperativos. Super Charge activado.'
            };
        }
        if (analysis.canLaunch) {
            return {
                success: true,
                message: '✅ DESPEGUE AUTORIZADO: Potencia suficiente para el despegue.'
            };
        }
        else {
            return {
                success: false,
                message: '❌ FALLO: Potencia insuficiente para el despegue.'
            };
        }
    }
    getThrust() {
        if (!this.leftPropulsor && !this.rightPropulsor) {
            return 0; // Sin propulsores, sin empuje
        }
        let thrust = 0;
        if (this.leftPropulsor)
            thrust += 50;
        if (this.rightPropulsor)
            thrust += 50;
        return thrust;
    }
}
exports.PropulsorSystem = PropulsorSystem;
