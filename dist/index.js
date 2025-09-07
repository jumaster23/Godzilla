"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the game entry point
const game_1 = require("./game");
const audio_1 = require("./engine/audio");
async function main() {
    console.clear();
    await console.log("\n🌍 MISIÓN DE SALVANDO AL MUNDO 🌍\n");
    await new Promise(resolve => setTimeout(resolve, 2000));
    await console.log("\n🌍 INICIANDO...\n");
    const audioplayer = new audio_1.audio();
    await audioplayer.introinicio();
    await new Promise(resolve => setTimeout(resolve, 4000));
    const game = new game_1.Game();
    await game.inicio();
}
// Start the game
main().catch(console.error);
