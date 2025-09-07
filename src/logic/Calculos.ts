import chalk from 'chalk';
const readline = require('readline-sync');
import { sceneManager } from '../engine/scenes';

export class Calculoslogicos {
    calculateDistance(): number {
        console.log(chalk.blue.bold('\n📏 CÁLCULO DE DISTANCIA A GODZILLA'));
        console.log(chalk.yellow('Ingresa las coordenadas (valores entre 50 y 1000, todos diferentes):'));

        while (true) {
            let x1 = parseFloat(readline.question("Introduce X1: "));
            if (x1 < 50 || x1 > 1000) {
                console.log(chalk.red('❌ Error: X1 debe estar entre 50 y 1000.'));
                continue;
            }

            let y1 = parseFloat(readline.question("Introduce Y1: "));
            if (y1 < 50 || y1 > 1000) {
                console.log(chalk.red('❌ Error: Y1 debe estar entre 50 y 1000.'));
                continue;
            }

            let x2 = parseFloat(readline.question("Introduce X2: "));
            if (x2 < 50 || x2 > 1000) {
                console.log(chalk.red('❌ Error: X2 debe estar entre 50 y 1000.'));
                continue;
            }

            let y2 = parseFloat(readline.question("Introduce Y2: "));
            if (y2 < 50 || y2 > 1000) {
                console.log(chalk.red('❌ Error: Y2 debe estar entre 50 y 1000.'));
                continue;
            }

            let escaladoX1 = x1 * 100;
            let escaladoY1 = y1 * 100;
            let escaladoX2 = x2 * 100;
            let escaladoY2 = y2 * 100;

            let distancia = Math.sqrt(
                Math.pow(escaladoX2 - escaladoX1, 2) +
                Math.pow(escaladoY2 - escaladoY1, 2)
            );

            console.log(chalk.green(`✅ Distancia calculada: ${distancia.toFixed(2)} metros`));
            return distancia; // Sale del while después de calcular
        }
    }

    activacionVelo(distancia: number): boolean {
        if (distancia < 300) {
            console.log(chalk.red('👻 VELO DE INVISIBILIDAD ACTIVADO'));
            console.log(chalk.red('ESTÁS MUY CERCA'));
            return false;
        } else {
            console.log(chalk.green('✅ Distancia segura alcanzada. Sigilo mantenido.'));
            return true;
        }
    }

    revaluodistancia() {
        let sigilo = false;
        while (!sigilo) {
            let buscandodistancia: number = this.calculateDistance();
            sigilo = this.activacionVelo(buscandodistancia);
        }
    }

    generarCodigoSeguridad(): number[] {
        console.log(chalk.blue.bold('\n🔐 GENERANDO CÓDIGO DE SEGURIDAD...'));
        const codigo: number[] = [];
        const rangolimite: number = 20;
        const adicional: number = 1;

        while (codigo.length < 10) {
            const n = Math.floor(Math.random() * rangolimite) + adicional;
            const number = 50 * n + 1;
            if (!codigo.includes(number)) {
                codigo.push(number);
            }
        }

        codigo.sort((a, b) => b - a); // Orden descendente

        console.log(chalk.green('🔐 Código de seguridad generado:'));
        console.log(chalk.green(`   ${codigo.join(' - ')}`));
        return codigo;
    }

    async launchSequence(): Promise<void> {
        console.log(`            
                                /\\
                               /  \\
                              /    \\
                             /______\\
                            |        |
                            |        |
                            |        |
                            |        |
                            |        |
                            |        |
                           /|   ||   |\\
                          / |   ||   | \\
                         /  |   ||   |  \\
                        /___|   ||   |___\\
                            |        |
                             \\      /
                              ||  ||`);

        console.log(chalk.yellow('Secuencia de 2 minutos en escala 5x (24 segundos reales)'));

        const totalSegundosSimilados = 120; // 2 minutos
        const escala5x = 200; // 200ms reales por segundo simulado (escala 5x)
        const intervaloActualizacion = 5; // Actualizar cada 5 segundos simulados

        for (let TiempoSimulado = 0; TiempoSimulado <= totalSegundosSimilados; TiempoSimulado += intervaloActualizacion) {
            const minutos = Math.floor(TiempoSimulado / 60);
            const segundos = TiempoSimulado % 60;
            const reloj = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

            const progreso = (TiempoSimulado / totalSegundosSimilados) * 100;

            console.clear();
            const sceneManagerInstance = new sceneManager(); // ⚠️ Revisa si está exportado como "class sceneManager"
            sceneManagerInstance.escenaescape(progreso);

            const progressBar = '█'.repeat(Math.floor(progreso / 5)) + '░'.repeat(20 - Math.floor(progreso / 5));

            if (progreso < 25) {
                console.log(chalk.blue(`⏱️  T+${reloj} | [${progressBar}] ${progreso.toFixed(1)}% - INICIANDO MOTORES`));
            } else if (progreso < 50) {
                console.log(chalk.yellow(`⏱️  T+${reloj} | [${progressBar}] ${progreso.toFixed(1)}% - CALENTANDO PROPULSORES`));
            } else if (progreso < 75) {
                console.log(chalk.yellow(`⏱️  T+${reloj} | [${progressBar}] ${progreso.toFixed(1)}% - PREPARANDO DESPEGUE`));
            } else if (progreso < 100) {
                console.log(chalk.red(`⏱️  T+${reloj} | [${progressBar}] ${progreso.toFixed(1)}% - DESPEGUE INMINENTE`));
            } else {
                console.log(chalk.green(`⏱️  T+${reloj} | [${progressBar}] ${progreso.toFixed(1)}% - DESPEGUE COMPLETO`));
            }

            if (TiempoSimulado < totalSegundosSimilados) {
                await new Promise(resolve => setTimeout(resolve, escala5x * intervaloActualizacion));
            }
        }

        // ✅ Mensaje final fuera del for
        console.log(chalk.green('⭐⭐⭐ DESPEGUE EXITOSO ⭐⭐⭐'));
    }
}