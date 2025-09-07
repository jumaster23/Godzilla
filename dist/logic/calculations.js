"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameCalculations = void 0;
const chalk_1 = __importDefault(require("chalk"));
const visualEffects_1 = require("../engine/visualEffects");
const epicASCII_1 = require("../engine/epicASCII");
const visualScenes_1 = require("../engine/visualScenes");
class GameCalculations {
    constructor(rl) {
        this.rl = rl;
    }
    fuelConsumption(thrust) {
        return Math.floor(thrust * 0.5);
    }
    async calculateDistance() {
        console.log(chalk_1.default.blue.bold('\n📏 CÁLCULO DE DISTANCIA A GODZILLA'));
        console.log(chalk_1.default.yellow('Ingresa las coordenadas (valores entre 50 y 1000, todos diferentes):'));
        let x1, y1, x2, y2;
        let validInput = false;
        while (!validInput) {
            x1 = await this.getValidCoordinate('X1');
            y1 = await this.getValidCoordinate('Y1');
            x2 = await this.getValidCoordinate('X2');
            y2 = await this.getValidCoordinate('Y2');
            // Verificar que todos sean diferentes
            const coordinates = [x1, y1, x2, y2];
            const uniqueCoordinates = [...new Set(coordinates)];
            if (uniqueCoordinates.length === 4) {
                validInput = true;
            }
            else {
                console.log(chalk_1.default.red('❌ Error: Todos los valores deben ser diferentes entre sí.'));
            }
        }
        // Escalado: multiplicar por 100 para obtener metros
        const scaledX1 = x1 * 100;
        const scaledY1 = y1 * 100;
        const scaledX2 = x2 * 100;
        const scaledY2 = y2 * 100;
        // Fórmula de Pitágoras
        const distance = Math.sqrt(Math.pow(scaledX2 - scaledX1, 2) + Math.pow(scaledY2 - scaledY1, 2));
        console.log(chalk_1.default.green(`📊 Coordenadas escaladas: (${scaledX1}, ${scaledY1}) a (${scaledX2}, ${scaledY2})`));
        console.log(chalk_1.default.green(`📏 Distancia calculada: ${distance.toFixed(2)} metros`));
        return distance;
    }
    async getValidCoordinate(label) {
        return new Promise((resolve) => {
            const askCoordinate = () => {
                this.rl.question(`${label}: `, (input) => {
                    const value = parseInt(input.trim());
                    if (value >= 50 && value <= 1000) {
                        resolve(value);
                    }
                    else {
                        console.log(chalk_1.default.red(`❌ ${label} debe estar entre 50 y 1000.`));
                        askCoordinate();
                    }
                });
            };
            askCoordinate();
        });
    }
    async checkStealth(distance) {
        if (distance < 300) {
            console.log(chalk_1.default.yellow.bold('👻 VELO DE INVISIBILIDAD ACTIVADO'));
            console.log(chalk_1.default.yellow('La nave está demasiado cerca. Debes reposicionarte.'));
            return false;
        }
        else {
            console.log(chalk_1.default.green('✅ Distancia segura alcanzada. Sigilo mantenido.'));
            return true;
        }
    }
    generateSecurityCode() {
        console.log(chalk_1.default.blue.bold('\n🔐 GENERANDO CÓDIGO DE SEGURIDAD'));
        const code = [];
        // Generar 10 números que cumplan n % 50 == 1 (números de la forma 50k + 1)
        while (code.length < 10) {
            const k = Math.floor(Math.random() * 20) + 1; // k de 1 a 20
            const number = 50 * k + 1;
            if (!code.includes(number)) {
                code.push(number);
            }
        }
        // Ordenar de forma estrictamente descendente
        code.sort((a, b) => b - a);
        console.log(chalk_1.default.green('🔐 Código de seguridad generado:'));
        console.log(chalk_1.default.green(`   ${code.join(' - ')}`));
        return code;
    }
    async launchSequence() {
        // Mostrar ASCII art épico de secuencia de despegue
        console.log(epicASCII_1.EpicASCII.getLaunchSequenceEpic());
        console.log(chalk_1.default.yellow('Secuencia de 2 minutos en escala 5x (24 segundos reales)'));
        const totalSimulatedSeconds = 120; // 2 minutos
        const realTimePerSimulatedSecond = 200; // 200ms reales por segundo simulado (escala 5x)
        const updateInterval = 5; // Actualizar cada 5 segundos simulados
        for (let simulatedTime = 0; simulatedTime <= totalSimulatedSeconds; simulatedTime += updateInterval) {
            const minutes = Math.floor(simulatedTime / 60);
            const seconds = simulatedTime % 60;
            const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            const progress = (simulatedTime / totalSimulatedSeconds) * 100;
            // Mostrar escena visual de la secuencia de despegue
            console.clear();
            visualScenes_1.VisualScenes.showScene('🚀 SECUENCIA DE DESPEGUE 🚀', 'launch', { progress });
            const progressBar = '█'.repeat(Math.floor(progress / 5)) + '░'.repeat(20 - Math.floor(progress / 5));
            // Efecto visual dinámico según el progreso
            if (progress < 25) {
                console.log(chalk_1.default.blue(`⏱️  T+${timeString} | [${progressBar}] ${progress.toFixed(1)}% - INICIANDO MOTORES`));
            }
            else if (progress < 50) {
                console.log(chalk_1.default.yellow(`⏱️  T+${timeString} | [${progressBar}] ${progress.toFixed(1)}% - CALENTANDO PROPULSORES`));
            }
            else if (progress < 75) {
                console.log(chalk_1.default.yellow(`⏱️  T+${timeString} | [${progressBar}] ${progress.toFixed(1)}% - PREPARANDO DESPEGUE`));
            }
            else if (progress < 100) {
                console.log(chalk_1.default.red(`⏱️  T+${timeString} | [${progressBar}] ${progress.toFixed(1)}% - DESPEGUE INMINENTE`));
            }
            else {
                console.log(chalk_1.default.green(`⏱️  T+${timeString} | [${progressBar}] ${progress.toFixed(1)}% - DESPEGUE COMPLETO`));
            }
            if (simulatedTime < totalSimulatedSeconds) {
                await new Promise(resolve => setTimeout(resolve, realTimePerSimulatedSecond * updateInterval));
            }
        }
        // Efecto de sparkle para el despegue completo
        await visualEffects_1.VisualEffects.sparkleEffect('🎉 DESPEGUE COMPLETO 🎉');
    }
}
exports.GameCalculations = GameCalculations;
