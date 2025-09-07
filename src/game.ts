import chalk from 'chalk';
const readline = require('readline-sync');

import { sceneManager } from './engine/scenes';
import { audio } from './engine/audio';
import { GodzillaEngine } from './logic/godzilla';
import { propulsores } from './logic/propulsores';
import { Calculoslogicos } from './logic/Calculos';
import { AIHelper } from './engine/aiHelper';

export class Game {
    private sceneManager: sceneManager;
    private audio: audio;
    private godzilla: GodzillaEngine;
    private propulsionSystem: propulsores;
    private calculations: Calculoslogicos;
    private aiHelper: AIHelper;
    
    private playerHealth: number;
    private gameState: 'menu' | 'playing' | 'combat' | 'escape' | 'victory' | 'defeat';
    private missionProgress: number;
    private distanciaAGodzilla: number;
    
    constructor() {
        this.sceneManager = new sceneManager();
        this.audio = new audio();
        this.godzilla = new GodzillaEngine();
        this.propulsionSystem = new propulsores();
        this.calculations = new Calculoslogicos();
        this.aiHelper = new AIHelper();
        
        this.playerHealth = 100;
        this.gameState = 'menu';
        this.missionProgress = 0;
        this.distanciaAGodzilla = 0;
    }

    async inicio(): Promise<void> {
        await this.sceneManager.intro();
        await this.audio.introinicio();
        
        this.gameState = 'playing';
        await this.mainGameLoop();
    }

    private async mainGameLoop(): Promise<void> {
        while (this.gameState === 'playing') {
            await this.showMainMenu();
            const choice = this.getUserChoice();
            await this.processChoice(choice);
            
            // Verificar condiciones de victoria/derrota
            if (this.playerHealth <= 0) {
                this.gameState = 'defeat';
                break;
            }
            
            if (this.missionProgress >= 100) {
                this.gameState = 'victory';
                break;
            }
        }
        
        await this.endGame();
    }

    private async showMainMenu(): Promise<void> {
        console.clear();
        console.log(chalk.cyan.bold('\n🚀 CENTRO DE COMANDO - MISIÓN SALVACIÓN MUNDIAL 🚀'));
        console.log(chalk.white('═'.repeat(60)));
        
        // Mostrar estado actual
        console.log(chalk.green(`❤️  Salud de la nave: ${this.playerHealth}%`));
        console.log(chalk.blue(`📊 Progreso de misión: ${this.missionProgress}%`));
        console.log(chalk.yellow(`🎯 Distancia a Godzilla: ${this.distanciaAGodzilla.toFixed(2)}m`));
        
        // Estado de propulsores
        const estadoIzq = this.propulsionSystem.estadoPropulsorIzquierdo() ? '✅' : '❌';
        const estadoDer = this.propulsionSystem.estadoPropulsorDerecho() ? '✅' : '❌';
        console.log(chalk.white(`🔧 Propulsores: Izq=${estadoIzq} Der=${estadoDer}`));
        
        if (this.godzilla.esta_superccarga_activada()) {
            console.log(chalk.red.bold('⚡ ¡ADVERTENCIA: GODZILLA EN MODO SUPERCARGA!'));
        }
        
        console.log(chalk.white('═'.repeat(60)));
        console.log(chalk.cyan('OPCIONES DISPONIBLES:'));
        console.log(chalk.white('1. 📏 Calcular distancia a Godzilla'));
        console.log(chalk.white('2. 🔧 Verificar sistemas de propulsión'));
        console.log(chalk.white('3. 🚀 Intentar secuencia de escape'));
        console.log(chalk.white('4. ⚔️  Combate directo contra Godzilla'));
        console.log(chalk.white('5. 🔐 Generar código de seguridad'));
        console.log(chalk.white('6. 🤖 Consultar IA estratégica'));
        console.log(chalk.white('7. 📊 Análisis completo de situación'));
        console.log(chalk.white('0. ❌ Abandonar misión'));
    }

    private getUserChoice(): number {
        const choice = readline.questionInt(chalk.yellow('\n➤ Selecciona una opción: '));
        return choice;
    }

    private async processChoice(choice: number): Promise<void> {
        switch (choice) {
            case 1:
                await this.calculateDistanceModule();
                break;
            case 2:
                await this.verifyPropulsionSystems();
                break;
            case 3:
                await this.attemptEscapeSequence();
                break;
            case 4:
                await this.enterCombat();
                break;
            case 5:
                await this.generateSecurityCode();
                break;
            case 6:
                await this.consultAI();
                break;
            case 7:
                await this.fullSituationAnalysis();
                break;
            case 0:
                console.log(chalk.red('Abandonando misión... La humanidad está condenada.'));
                this.gameState = 'defeat';
                break;
            default:
                console.log(chalk.red('❌ Opción inválida. Inténtalo de nuevo.'));
                readline.question(chalk.yellow('Presiona Enter para continuar...'));
        }
    }

    private async calculateDistanceModule(): Promise<void> {
        console.log(chalk.blue.bold('\n🎯 MÓDULO DE CÁLCULO DE DISTANCIA'));
        
        this.distanciaAGodzilla = this.calculations.calculateDistance();
        
        // Activar velo de invisibilidad si es necesario
        const isSafe = this.calculations.activacionVelo(this.distanciaAGodzilla);
        
        if (!isSafe) {
            console.log(chalk.red('👻 Reposicionándote automáticamente...'));
            this.calculations.revaluodistancia();
        }
        
        // Avance de Godzilla
        this.godzilla.cercania();
        
        // Consultar IA automáticamente
        await this.aiHelper.provideAdvice('distance_calculation', {
            propulsorIzquiero: this.propulsionSystem.estadoPropulsorIzquierdo(),
            propulsorDerecho: this.propulsionSystem.estadoPropulsorDerecho(),
            distancia: this.distanciaAGodzilla
        });
        
        this.missionProgress += 10;
        readline.question(chalk.yellow('\nPresiona Enter para continuar...'));
    }

    private async verifyPropulsionSystems(): Promise<void> {
        console.log(chalk.blue.bold('\n🔧 VERIFICACIÓN DE SISTEMAS DE PROPULSIÓN'));
        
        // Simular posibles fallas aleatorias
        if (Math.random() < 0.3) {
            const leftFail = Math.random() < 0.5;
            const rightFail = Math.random() < 0.5;
            
            if (leftFail || rightFail) {
                console.log(chalk.red('⚠️  ¡FALLA DETECTADA EN SISTEMA DE PROPULSIÓN!'));
                this.propulsionSystem.estadoambospropulsores(!leftFail, !rightFail);
                
                await this.aiHelper.provideAdvice('propulsor_failure', {
                    propulsorIzquiero: !leftFail,
                    propulsorDerecho: !rightFail
                });
            }
        }
        
        // Realizar análisis de potencia
        const analysis = this.propulsionSystem.calculopodernave();
        const verification = this.propulsionSystem.verificarpropulsores();
        
        console.log(chalk.green(`🔋 Verificación de propulsores: ${verification}%`));
        
        if (this.propulsionSystem.esta_superccarga_activada()) {
            this.sceneManager.mostrarsupercargas();
            this.godzilla.supercargaActivo();
        }
        
        this.missionProgress += 15;
        readline.question(chalk.yellow('\nPresiona Enter para continuar...'));
    }

    private async attemptEscapeSequence(): Promise<void> {
        console.log(chalk.blue.bold('\n🚀 INICIANDO SECUENCIA DE ESCAPE'));
        
        // Consultar IA para decisión de lanzamiento
        await this.aiHelper.provideAdvice('launch_decision', {
            propulsorIzquiero: this.propulsionSystem.estadoPropulsorIzquierdo(),
            propulsorDerecho: this.propulsionSystem.estadoPropulsorDerecho()
        });
        
        const launchAttempt = this.propulsionSystem.intentoLanzamiento();
        
        if (launchAttempt.suceso) {
            console.log(chalk.green(launchAttempt.mensaje));
            await this.audio.playRocketstartup();
            
            // Ejecutar secuencia de lanzamiento
            await this.calculations.launchSequence();
            
            // Victoria si el escape es exitoso
            this.missionProgress = 100;
            console.log(chalk.green.bold('🎉 ¡ESCAPE EXITOSO! ¡LA HUMANIDAD ESTÁ SALVADA!'));
        } else {
            console.log(chalk.red(launchAttempt.mensaje));
            await this.audio.playRocketfail();
            
            // Penalización por fallo
            this.playerHealth -= 20;
            
            if (this.propulsionSystem.esta_superccarga_activada()) {
                console.log(chalk.red.bold('💀 SUPERCARGA ACTIVADA - SITUACIÓN CRÍTICA'));
                this.playerHealth -= 30;
            }
        }
        
        readline.question(chalk.yellow('\nPresiona Enter para continuar...'));
    }

    private async enterCombat(): Promise<void> {
        console.log(chalk.red.bold('\n⚔️  INICIANDO COMBATE CONTRA GODZILLA'));
        
        await this.aiHelper.provideAdvice('combat_vs_escape', {
            propulsorIzquiero: this.propulsionSystem.estadoPropulsorIzquierdo(),
            propulsorDerecho: this.propulsionSystem.estadoPropulsorDerecho()
        });
        
        this.gameState = 'combat';
        this.sceneManager.escenaCombate();
        
        // Ejecutar combate
        const godzillaAttackPower = await this.godzilla.executeAllAttacks();
        const shipPower = this.propulsionSystem.conseguirPoderbase();
        
        console.log(chalk.blue(`🚀 Poder de la nave: ${shipPower}`));
        console.log(chalk.red(`🦖 Poder de ataque de Godzilla: ${godzillaAttackPower}`));
        
        if (shipPower > godzillaAttackPower) {
            console.log(chalk.green.bold('🏆 ¡VICTORIA EN COMBATE!'));
            this.missionProgress += 50;
            this.playerHealth += 10; // Bonus por victoria
        } else {
            console.log(chalk.red.bold('💀 DERROTA EN COMBATE'));
            this.playerHealth -= Math.floor(godzillaAttackPower / 100);
            
            // Activar supercarga de Godzilla tras combate
            this.godzilla.supercargaActivo();
            this.propulsionSystem.supercargaActivo();
        }
        
        this.gameState = 'playing';
        readline.question(chalk.yellow('\nPresiona Enter para continuar...'));
    }

    private async generateSecurityCode(): Promise<void> {
        console.log(chalk.blue.bold('\n🔐 GENERANDO CÓDIGO DE SEGURIDAD'));
        
        const securityCode = this.calculations.generarCodigoSeguridad();
        
        console.log(chalk.green('✅ Código de seguridad generado exitosamente'));
        console.log(chalk.yellow('Este código puede ser usado para sistemas críticos de emergencia.'));
        
        this.missionProgress += 5;
        readline.question(chalk.yellow('\nPresiona Enter para continuar...'));
    }

    private async consultAI(): Promise<void> {
        console.log(chalk.blue.bold('\n🤖 CONSULTA CON IA ESTRATÉGICA'));
        
        // Determinar escenario basado en el estado actual
        let scenario = 'default';
        
        if (this.godzilla.esta_superccarga_activada()) {
            scenario = 'super_charge';
        } else if (!this.propulsionSystem.estadoPropulsorIzquierdo() || !this.propulsionSystem.estadoPropulsorDerecho()) {
            scenario = 'propulsor_failure';
        } else if (this.distanciaAGodzilla > 0 && this.distanciaAGodzilla < 300) {
            scenario = 'distance_calculation';
        } else {
            scenario = 'combat_vs_escape';
        }
        
        await this.aiHelper.provideAdvice(scenario, {
            propulsorIzquiero: this.propulsionSystem.estadoPropulsorIzquierdo(),
            propulsorDerecho: this.propulsionSystem.estadoPropulsorDerecho(),
            distancia: this.distanciaAGodzilla
        });
        
        readline.question(chalk.yellow('\nPresiona Enter para continuar...'));
    }

    private async fullSituationAnalysis(): Promise<void> {
        console.log(chalk.blue.bold('\n📊 ANÁLISIS COMPLETO DE SITUACIÓN'));
        console.log(chalk.white('═'.repeat(70)));
        
        // Estado de la nave
        console.log(chalk.cyan.bold('🚀 ESTADO DE LA NAVE:'));
        console.log(chalk.white(`   ❤️  Salud: ${this.playerHealth}%`));
        console.log(chalk.white(`   📊 Progreso: ${this.missionProgress}%`));
        console.log(chalk.white(`   🔋 Poder base: ${this.propulsionSystem.conseguirPoderbase()}`));
        
        // Estado de propulsores
        console.log(chalk.cyan.bold('\n🔧 SISTEMAS DE PROPULSIÓN:'));
        const estadoIzq = this.propulsionSystem.estadoPropulsorIzquierdo() ? 'OPERATIVO' : 'FALLA';
        const estadoDer = this.propulsionSystem.estadoPropulsorDerecho() ? 'OPERATIVO' : 'FALLA';
        console.log(chalk.white(`   🔧 Propulsor izquierdo: ${estadoIzq}`));
        console.log(chalk.white(`   🔧 Propulsor derecho: ${estadoDer}`));
        console.log(chalk.white(`   ⚡ Supercarga activa: ${this.propulsionSystem.esta_superccarga_activada() ? 'SÍ' : 'NO'}`));
        
        // Estado de Godzilla
        console.log(chalk.cyan.bold('\n🦖 AMENAZA - GODZILLA:'));
        console.log(chalk.white(`   📍 Distancia: ${this.distanciaAGodzilla.toFixed(2)}m`));
        console.log(chalk.white(`   ⚡ Supercarga: ${this.godzilla.esta_superccarga_activada() ? 'ACTIVADA' : 'INACTIVA'}`));
        
        const attacks = this.godzilla.getAttackPower();
        console.log(chalk.white(`   🔥 Aliento atómico: ${attacks.atomicBreath}`));
        console.log(chalk.white(`   ⚡ Rayo espiral: ${attacks.spiralRay}`));
        console.log(chalk.white(`   💥 Golpe de cola: ${attacks.tailStrike}`));
        
        // Recomendaciones
        console.log(chalk.cyan.bold('\n🤖 RECOMENDACIONES ESTRATÉGICAS:'));
        const movementAdvice = this.aiHelper.movimientoSugerido(this.distanciaAGodzilla, this.playerHealth);
        console.log(chalk.white(`   📋 ${movementAdvice}`));
        
        // Análisis de probabilidad de éxito
        const launchAnalysis = this.propulsionSystem.calculopodernave();
        console.log(chalk.cyan.bold('\n📈 ANÁLISIS DE VIABILIDAD:'));
        console.log(chalk.white(`   🎯 Probabilidad de escape: ${launchAnalysis.lanzamiento ? 'ALTA' : 'BAJA'}`));
        console.log(chalk.white(`   ⚠️  Nivel de riesgo: ${this.playerHealth < 30 ? 'CRÍTICO' : this.playerHealth < 60 ? 'ALTO' : 'MODERADO'}`));
        
        console.log(chalk.white('═'.repeat(70)));
        readline.question(chalk.yellow('\nPresiona Enter para continuar...'));
    }

    private async endGame(): Promise<void> {
        if (this.gameState === 'victory') {
            this.sceneManager.escenaVictoria();
            console.log(chalk.green.bold(`
            🏆 ¡MISIÓN COMPLETADA EXITOSAMENTE! 🏆
            
            Has salvado a la humanidad de Godzilla.
            Puntuación final: ${this.missionProgress}/100
            Salud restante: ${this.playerHealth}%
            
            ¡Eres un verdadero héroe!
            `));
        } else {
            this.sceneManager.escenaDerrota();
            console.log(chalk.red.bold(`
            💀 MISIÓN FALLIDA 💀
            
            La humanidad ha caído ante Godzilla.
            Progreso alcanzado: ${this.missionProgress}/100
            
            Pero no todo está perdido...
            La próxima vez podrías ser tú quien salve al mundo.
            `));
        }
        
        const playAgain = readline.question(chalk.yellow('\n¿Quieres jugar de nuevo? (s/n): '));
        if (playAgain.toLowerCase() === 's' || playAgain.toLowerCase() === 'si') {
            // Reiniciar el juego
            this.resetGame();
            await this.inicio();
        } else {
            console.log(chalk.blue('¡Gracias por jugar! 🚀'));
        }
    }

    private resetGame(): void {
        this.playerHealth = 100;
        this.gameState = 'menu';
        this.missionProgress = 0;
        this.distanciaAGodzilla = 0;
        
        // Reiniciar sistemas
        this.godzilla = new GodzillaEngine();
        this.propulsionSystem = new propulsores();
    }
}