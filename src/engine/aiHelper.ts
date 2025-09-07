import chalk from 'chalk';


export class AIHelper {
    movimientoSugerido(distancia: number, combustible: number): string {
        if (combustible < 100) return 'Ahorra combustible';
        if (distancia < 200) return 'Usa toda la potencia';
        return 'Mantén velocidad media';
    }

    estrategia(escenario: string, propulsorIzquiero: boolean, propulsorDerecho: boolean, distancia?: number): string {
        console.log(chalk.cyan.bold('\n🤖 CONSEJO DE IA, TU ALIADA🤖'));
        
        switch (escenario) {
            case 'propulsor_failure':
                if (!propulsorIzquiero && !propulsorDerecho) {
                    return chalk.red('⚠️  CRÍTICO: Ambos propulsores fallaron. Super Charge inminente. Recomiendo activar protocolo de emergencia y preparar para combate directo.');
                } else if (!propulsorIzquiero || !propulsorDerecho) {
                    return chalk.yellow('⚠️  ADVERTENCIA: Un propulsor fallo. Calcula potencia adicional requerida. Considera reparacion de emergencia.');
                }
                break;
                
            case 'distance_calculation':
                if (distancia && distancia < 300) {
                    return chalk.yellow('👻 SIGILO: Distancia critica detectada. Activa velo de invisibilidad y reposiciona la nave inmediatamente.');
                } else if (distancia && distancia >= 300) {
                    return chalk.green('✅ SEGURO: Distancia adecuada mantenida. Procede con la mision.');
                }
                break;
                
            case 'launch_decision':
                if (propulsorIzquiero && propulsorDerecho) {
                    return chalk.green('🚀 OPTIMO: Ambos propulsores operativos. Umbral de 75% aplicable. Despegue recomendado.');
                } else {
                    return chalk.yellow('⚠️  CAUTELA: Propulsor(s) dañado(s). Umbral de 90% requerido. Verifica cálculos antes del despegue.');
                }
                
            case 'combat_vs_escape':
                return chalk.blue('⚔️  DECISION ESTRATEGICA: Combate directo vs Escape. Combate: Mayor riesgo pero posibilidad de victoria. Escape: Mas seguro pero Godzilla persiste.');
                
            case 'super_charge':
                return chalk.red('💀 EMERGENCIA MAXIMA: Super Charge activado. Todos los ataques x10. Recomiendo evasión inmediata o contraataque coordinado.');
                
            default:
                return chalk.blue('🤖 IA: Analizando situacion... Manten la calma y sigue los protocolos establecidos.');
        }
        
        return chalk.blue('🤖 IA: Situación analizada. Procede con precaucion.');
    }

    async provideAdvice(escenario: string, contexto: any): Promise<void> {
        // Mostrar ASCII art épico de IA
        console.log( `╔══════════════════════════════════════════════════════════════╗
            ║                    🤖 IA ALIADA ACTIVADA 🤖                  ║
            ╠══════════════════════════════════════════════════════════════╣
            ║                                                              ║
            ║                         ██╗ █████╗                           ║
            ║                         ██║██╔══██╗                           ║
            ║                         ██║███████║                           ║
            ║                         ██║██╔══██║                           ║
            ║                         ██║██║  ██║                           ║
            ║                         ╚═╝╚═╝  ╚═╝                           ║
            ║                                                              ║
            ║              ANÁLISIS ESTRATÉGICO EN PROGRESO                ║
            ║                                                              ║
            ╚══════════════════════════════════════════════════════════════╝`);
        
        
        
        const consejo = this.estrategia(escenario, contexto.propulsorIzquiero, contexto.propulsorDerecho, contexto.distancia);
        console.log(consejo);
        
        
        
        // Simular tiempo de procesamiento de IA
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}