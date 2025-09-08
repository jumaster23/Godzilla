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
    private calculations: Calculoslogicos;
    private godzilla: GodzillaEngine;
    private propulsion: propulsores;
    private aiHelper: AIHelper;
    private gameState: {
        codigoSeguridad: number[];
        distanciaCalculada: number;
        propulsoresFuncionando: boolean[];
        misionCompleta: boolean;
        combateActivo: boolean;
    };

    constructor() {
        this.sceneManager = new sceneManager();
        this.calculations = new Calculoslogicos();
        this.godzilla = new GodzillaEngine();
        this.propulsion = new propulsores();
        this.aiHelper = new AIHelper();
        
        this.gameState = {
            codigoSeguridad: [],
            distanciaCalculada: 0,
            propulsoresFuncionando: [true, true],
            misionCompleta: false,
            combateActivo: false
        };
    }

    // Método principal que ejecuta toda la secuencia del juego
    async iniciarJuego(): Promise<void> {
        try {
            console.clear();
            
            // FASE 1: Introducción épica
            await this.ejecutarIntroduccion();
            
            // FASE 2: Generación de código de seguridad
            await this.ejecutarGeneracionCodigo();
            
            // FASE 3: Cálculo de distancia y sistema de sigilo
            await this.ejecutarSistemaDistancia();
            
            // FASE 4: Verificación de propulsores y análisis de potencia
            await this.ejecutarVerificacionPropulsores();
            
            // FASE 5: Consulta con IA Aliada
            await this.ejecutarConsultaIA();
            
            // FASE 6: Decisión crítica - ¿Combate o Escape?
            await this.ejecutarDecisionCritica();
            
            // FASE 7: Secuencia final
            await this.ejecutarSecuenciaFinal();
            
        } catch (error) {
            console.log(chalk.red('\n❌ Error crítico en el sistema:'), error);
            await this.sceneManager.escenaDerrota();
        }
    }

    private async ejecutarIntroduccion(): Promise<void> {
        console.log(chalk.cyan.bold('\n🎮 INICIANDO PROTOCOLO DE EMERGENCIA GLOBAL...'));
        await this.pausa(2000);
        
        await this.sceneManager.intro();
        
        console.log(chalk.yellow('\n📋 MISIÓN: Escapar de Godzilla y salvar a la humanidad'));
        console.log(chalk.yellow('⚠️  ADVERTENCIA: Cada decisión puede ser la diferencia entre la vida y la muerte'));
        await this.pausa(3000);
    }

    private async ejecutarGeneracionCodigo(): Promise<void> {
        console.log(chalk.blue.bold('\n🔐 FASE 1: GENERANDO CÓDIGOS DE ACCESO AL SISTEMA DE ESCAPE'));
        console.log(chalk.gray('Estableciendo credenciales de seguridad...'));
        
        await this.pausa(1000);
        
        // Generar código de seguridad
        this.gameState.codigoSeguridad = this.calculations.generarCodigoSeguridad();
        
        console.log(chalk.green('✅ Códigos de seguridad establecidos exitosamente'));
        await this.pausa(2000);
    }

    private async ejecutarSistemaDistancia(): Promise<void> {
        console.log(chalk.blue.bold('\n📡 FASE 2: SISTEMA DE DETECCIÓN Y SIGILO'));
        console.log(chalk.gray('Calculando distancia a Godzilla y activando contramedidas...'));
        
        await this.pausa(1000);
        
        // Ejecutar cálculo de distancia y sistema de sigilo
        this.calculations.revaluodistancia();
        
        // Simular obtención de la distancia para el estado del juego
        this.gameState.distanciaCalculada = this.calculations.calculateDistance();
        
        // Godzilla se acerca basado en la distancia
        this.godzilla.cercania();
        
        console.log(chalk.green('✅ Sistema de sigilo configurado'));
        await this.pausa(2000);
    }

    private async ejecutarVerificacionPropulsores(): Promise<void> {
        console.log(chalk.blue.bold('\n🚀 FASE 3: DIAGNÓSTICO DE SISTEMAS DE PROPULSIÓN'));
        console.log(chalk.gray('Verificando integridad de los propulsores...'));
        
        await this.pausa(1000);
        
        // Verificar estado de propulsores
        const verificacionPropulsores = this.propulsion.verificarpropulsores();
        
        console.log(chalk.blue(`📊 Diagnóstico de propulsores: ${verificacionPropulsores}%`));
        
        // Simular posible fallo de propulsores (25% de probabilidad)
        if (Math.random() < 0.25) {
            const fallaIzquierdo = Math.random() < 0.5;
            const fallaDerecho = Math.random() < 0.5;
            
            this.propulsion.estadoambospropulsores(!fallaIzquierdo, !fallaDerecho);
            this.gameState.propulsoresFuncionando = [!fallaIzquierdo, !fallaDerecho];
            
            console.log(chalk.red('⚠️  ALERTA: Fallo detectado en sistema de propulsión'));
        }
        
        // Análisis de potencia
        const analisisPotencia = this.propulsion.calculopodernave();
        
        if (analisisPotencia.lanzamiento) {
            console.log(chalk.green('✅ Sistemas de propulsión: OPERATIVOS'));
        } else {
            console.log(chalk.yellow('⚠️  Sistemas de propulsión: CRÍTICO'));
        }
        
        await this.pausa(2000);
    }

    private async ejecutarConsultaIA(): Promise<void> {
        console.log(chalk.blue.bold('\n🤖 FASE 4: CONSULTA CON IA ALIADA'));
        console.log(chalk.gray('Analizando situación táctica...'));
        
        await this.pausa(1000);
        
        // Consultar con IA sobre diferentes escenarios
        const contexto = {
            propulsorIzquiero: this.gameState.propulsoresFuncionando[0],
            propulsorDerecho: this.gameState.propulsoresFuncionando[1],
            distancia: this.gameState.distanciaCalculada
        };
        
        await this.aiHelper.darConsejo('propulsor_failure', contexto);
        await this.pausa(1000);
        await this.aiHelper.darConsejo('distance_calculation', contexto);
        await this.pausa(1000);
        await this.aiHelper.darConsejo('launch_decision', contexto);
        
        console.log(chalk.green('✅ Análisis de IA completado'));
        await this.pausa(2000);
    }

    private async ejecutarDecisionCritica(): Promise<void> {
        console.log(chalk.red.bold('\n⚔️  FASE 5: DECISIÓN CRÍTICA'));
        console.log(chalk.yellow('Godzilla se acerca rápidamente. Debes decidir:'));
        console.log(chalk.yellow('1. 🚀 ESCAPE - Intentar despegue inmediato'));
        console.log(chalk.yellow('2. ⚔️  COMBATE - Enfrentar a Godzilla directamente'));
        
        await this.pausa(2000);
        
        // Evaluar si ambos propulsores están dañados
        if (!this.gameState.propulsoresFuncionando[0] && !this.gameState.propulsoresFuncionando[1]) {
            console.log(chalk.red.bold('💀 AMBOS PROPULSORES DAÑADOS - COMBATE FORZOSO'));
            this.godzilla.supercargaActivo();
            this.propulsion.supercargaActivo();
            this.gameState.combateActivo = true;
            
            await this.sceneManager.mostrarsupercargas();
            await this.aiHelper.darConsejo('super_charge', {});
        } else {
            // Decisión basada en el análisis de potencia
            const intentoLanzamiento = this.propulsion.intentoLanzamiento();
            
            if (intentoLanzamiento.suceso) {
                console.log(chalk.green('🚀 DECISIÓN: SECUENCIA DE ESCAPE AUTORIZADA'));
                this.gameState.combateActivo = false;
            } else {
                console.log(chalk.red('⚔️  DECISIÓN: COMBATE DIRECTO INEVITABLE'));
                this.gameState.combateActivo = true;
            }
        }
        
        await this.pausa(3000);
    }

    private async ejecutarSecuenciaFinal(): Promise<void> {
        if (this.gameState.combateActivo) {
            await this.ejecutarCombateFinal();
        } else {
            await this.ejecutarEscapeFinal();
        }
    }

    private async ejecutarCombateFinal(): Promise<void> {
        console.log(chalk.red.bold('\n⚔️  FASE FINAL: COMBATE CONTRA GODZILLA'));
        
        await this.sceneManager.escenaCombate();
        await this.pausa(2000);
        
        // Ejecutar todos los ataques de Godzilla
        const poderGodzilla = await this.godzilla.executeAllAttacks();
        const poderNave = this.propulsion.conseguirPoderbase();
        
        console.log(chalk.blue(`⚔️  PODER DE LA NAVE: ${poderNave}`));
        console.log(chalk.red(`🦖 PODER DE GODZILLA: ${poderGodzilla}`));
        
        if (poderNave > poderGodzilla) {
            console.log(chalk.green.bold('\n🎉 ¡VICTORIA! La nave ha derrotado a Godzilla!'));
            await this.sceneManager.escenaVictoria();
            this.gameState.misionCompleta = true;
        } else {
            console.log(chalk.red.bold('\n💀 DERROTA... Godzilla ha destruido la nave'));
            await this.sceneManager.escenaDerrota();
        }
    }

    private async ejecutarEscapeFinal(): Promise<void> {
        console.log(chalk.blue.bold('\n🚀 FASE FINAL: SECUENCIA DE ESCAPE'));
        console.log(chalk.gray('Iniciando protocolo de evacuación planetaria...'));
        
        await this.pausa(1000);
        
        // Ejecutar secuencia de lanzamiento
        await this.calculations.launchSequence();
        
        // Verificar si Godzilla alcanza la nave
        const godzillaAlcanza = this.godzilla.avancegodzilla(this.gameState.distanciaCalculada);
        
        if (!godzillaAlcanza) {
            console.log(chalk.green.bold('\n🎉 ¡ESCAPE EXITOSO! La humanidad ha sido salvada!'));
            await this.sceneManager.escenaVictoria();
            this.gameState.misionCompleta = true;
        } else {
            console.log(chalk.red.bold('\n💀 Godzilla alcanzó la nave durante el despegue...'));
            await this.sceneManager.escenaDerrota();
        }
    }

    // Método para mostrar resumen final
    async mostrarResumenFinal(): Promise<void> {
        console.log(chalk.cyan.bold('\n📊 RESUMEN DE LA MISIÓN'));
        console.log(chalk.cyan('═'.repeat(50)));
        
        console.log(chalk.blue(`🔐 Código de seguridad: ${this.gameState.codigoSeguridad.slice(0, 3).join('-')}...`));
        console.log(chalk.blue(`📡 Distancia final: ${this.gameState.distanciaCalculada.toFixed(2)} metros`));
        console.log(chalk.blue(`🚀 Propulsor izquierdo: ${this.gameState.propulsoresFuncionando[0] ? '✅' : '❌'}`));
        console.log(chalk.blue(`🚀 Propulsor derecho: ${this.gameState.propulsoresFuncionando[1] ? '✅' : '❌'}`));
        console.log(chalk.blue(`⚔️  Modo combate: ${this.gameState.combateActivo ? 'SÍ' : 'NO'}`));
        console.log(chalk.blue(`🎯 Misión completada: ${this.gameState.misionCompleta ? '✅' : '❌'}`));
        
        if (this.gameState.misionCompleta) {
            console.log(chalk.green.bold('\n🌟 ¡ERES UN HÉROE! Has salvado a la humanidad'));
        } else {
            console.log(chalk.red.bold('\n💀 La humanidad ha caído... pero tu sacrificio será recordado'));
        }
    }

    // Método auxiliar para pausas
    private async pausa(milisegundos: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, milisegundos));
    }

    // Método para reiniciar el juego
    async reiniciarJuego(): Promise<void> {
        console.log(chalk.yellow('\n🔄 Reiniciando sistemas...'));
        
        // Reiniciar estado del juego
        this.gameState = {
            codigoSeguridad: [],
            distanciaCalculada: 0,
            propulsoresFuncionando: [true, true],
            misionCompleta: false,
            combateActivo: false
        };
        
        // Reiniciar sistemas
        this.godzilla = new GodzillaEngine();
        this.propulsion = new propulsores();
        
        await this.pausa(1000);
        await this.iniciarJuego();
    }
}

// Función principal para ejecutar el juego
async function main() {
    const juego = new Game();
    
    try {
        console.log(chalk.green.bold('🎮 SALVANDO AL MUNDO - INICIANDO...'));
        await juego.iniciarJuego();
        await juego.mostrarResumenFinal();
        
    } catch (error) {
        console.log(chalk.red('❌ Error fatal del sistema:'), error);
    }
}

// Ejecutar si este archivo se ejecuta directamente
if (require.main === module) {
    main();
}

export { main };