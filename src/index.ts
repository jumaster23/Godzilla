// index.ts - Punto de entrada principal
import chalk from 'chalk';
import { Game } from './game';

async function mostrarMenu(): Promise<void> {
    console.clear();
    console.log(chalk.green.bold(`
╔══════════════════════════════════════════════════════════════╗
║                   🦖 SALVANDO AL MUNDO 🦖                    ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║                    1. 🎮 Iniciar Nueva Partida              ║
║                    2. 📖 Instrucciones                      ║
║                    3. 🚪 Salir                              ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
    `));
}

async function mostrarInstrucciones(): Promise<void> {
    console.clear();
    console.log(chalk.cyan.bold(`
╔══════════════════════════════════════════════════════════════╗
║                     📖 INSTRUCCIONES 📖                      ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  OBJETIVO:                                                   ║
║  Escapar de Godzilla y salvar a la humanidad                ║
║                                                              ║
║  FASES DEL JUEGO:                                            ║
║  🔐 1. Generar código de seguridad                          ║
║  📡 2. Calcular distancia a Godzilla                        ║
║  🚀 3. Verificar sistemas de propulsión                     ║
║  🤖 4. Consultar con IA aliada                              ║
║  ⚔️  5. Decidir: ¿Combate o Escape?                         ║
║  🎯 6. Ejecutar plan final                                   ║
║                                                              ║
║  CONSEJOS:                                                   ║
║  • Mantén la distancia > 300m para evitar el sigilo         ║
║  • Si ambos propulsores fallan, prepárate para combate      ║
║  • La IA aliada te dará consejos estratégicos               ║
║  • ¡Cada decisión cuenta!                                   ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
    `));
    
    console.log(chalk.yellow('\nPresiona Enter para continuar...'));
    // En un entorno real usarías readline-sync aquí
    await new Promise(resolve => setTimeout(resolve, 5000));
}

async function ejecutarJuego(): Promise<void> {
    const juego = new Game();
    
    try {
        await juego.iniciarJuego();
        await juego.mostrarResumenFinal();
        
        // Preguntar si quiere jugar de nuevo
        console.log(chalk.yellow('\n¿Quieres jugar de nuevo? (Reiniciando en 5 segundos...)'));
        await new Promise(resolve => setTimeout(resolve, 5000));
        
        await main(); // Volver al menú principal
        
    } catch (error) {
        console.log(chalk.red('❌ Error durante el juego:'), error);
        console.log(chalk.yellow('Regresando al menú principal...'));
        await new Promise(resolve => setTimeout(resolve, 3000));
        await main();
    }
}

async function main(): Promise<void> {
    while (true) {
        await mostrarMenu();
        
        // Simulación de selección de menú (en un entorno real usarías readline-sync)
        console.log(chalk.yellow('Iniciando automáticamente nueva partida en 3 segundos...'));
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        // Por defecto ejecutar el juego (opción 1)
        const opcion: number = 1;
        
        switch (opcion) {
            case 1:
                await ejecutarJuego();
                break;
            case 2:
                await mostrarInstrucciones();
                break;
            case 3:
                console.log(chalk.green('¡Gracias por jugar! 🎮'));
                process.exit(0);
            default:
                console.log(chalk.red('Opción inválida. Intenta de nuevo.'));
                await new Promise(resolve => setTimeout(resolve, 2000));
        }
    }
}

// Ejecutar el programa
if (require.main === module) {
    console.log(chalk.green.bold('🚀 Iniciando Salvando al Mundo...'));
    main().catch(error => {
        console.error(chalk.red('Error fatal:'), error);
        process.exit(1);
    });
}

export { main };