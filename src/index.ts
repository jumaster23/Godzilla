// Import the game entry point
import { Game } from './game';
import { audio } from './engine/audio';


async function main() {
    console.clear();
    
    await console.log("\n🌍 MISIÓN DE SALVANDO AL MUNDO 🌍\n",);
    await new Promise(resolve => setTimeout(resolve, 2000));
    await console.log("\n🌍 INICIANDO...\n",);
    const audioplayer = new audio();
    await audioplayer.introinicio();
    await new Promise(resolve => setTimeout(resolve, 4000));
    const game = new Game()
    await game.inicio();
}
// Start the game
main().catch(console.error);