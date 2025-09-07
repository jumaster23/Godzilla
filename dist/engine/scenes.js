"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sceneManager = void 0;
const chalk_1 = __importDefault(require("chalk"));
const readline = require('readline-sync');
const audio_1 = require("./audio");
const Calculos_1 = require("../logic/Calculos");
class sceneManager {
    constructor() {
        this.audio = new audio_1.audio;
        this.calculations = new Calculos_1.Calculoslogicos();
    }
    async intro() {
        console.clear();
        console.log(chalk_1.default.yellow("==========================================================================="));
        console.log(chalk_1.default.yellow("===================== BIENVENIDO A SALVANDO AL MUNDO ======================"));
        console.log(chalk_1.default.yellow("==========================================================================="));
        await new Promise(resolve => setTimeout(resolve, 3000));
        // Simple menu text instead of ASCII art
        console.log(chalk_1.default.green("Estamos en peligro..."));
        console.log(chalk_1.default.red("Un monstruo amenaza la ciudad!"));
        console.log("\n");
        await new Promise(resolve => setTimeout(resolve, 2000));
        await console.log(chalk_1.default.yellow.bold(`
            Soldados, la humanidad está al borde de la destrucción.
            Godzilla ha despertado y amenaza con destruirlo todo.
            Tú y tu equipo deben programar la nave que puede salvar a la humanidad.
            
            El destino del mundo está en sus manos...
                `));
        await new Promise(resolve => setTimeout(resolve, 8000));
        await this.audio.playRoar();
        await console.log(chalk_1.default.red.bold('                                                        GODZILLA SE ACERCA...'));
        await new Promise(resolve => setTimeout(resolve, 1000));
        await console.log(chalk_1.default.red.bold('                               GODZILLA SE ACERCA...'));
        await new Promise(resolve => setTimeout(resolve, 1000));
        await console.log(chalk_1.default.red.bold('        GODZILLA SE ACERCA...'));
        await new Promise(resolve => setTimeout(resolve, 1000));
        await console.log(chalk_1.default.red.bold(`
     █████████████████████████████████████████████████
     ██████░░░░░░░████████████████████████████████████
     ███░░░░░░░░░░░░░░░███████████████████████████████
     ██░░░░░░░░░░░░░░░░░░░░░░█████████████████████████
     █░░░░░░░░░░░░░░░░░░░░░░░░░█████████████░░░░██████
     ████░░░░░░░░░░░░░░░░░░░░░█████████████░░░████████
     █████░░███░░░░░░░░░░░░░░░░░░░████████░░░░████████
     ██████████░░░░░░░░░░░░░░░░░░░████████░░░░████████
     ██████████░░░░░░░░░░░░░░░░░░████████░░░░░████████
     ████░░░░░░░░░░░░░░░░░░░░░░░░░░░█████░░░░░████████
     ███░░░░░░░░░░░░░░░░░░░░░░░░░░░███████░░░░████████
     ████░░░░█░░░░░░░░░░░░░░░░░█░░░░░█████░░░░░███████
     ████████████░░░░░░░░░░░░░░░░░░░░█████░░░░░░██████
     ██████████░░░░░░░░░░░░░░░░░░░░░███████░░░░░██████
     █████████░░░░░░░░░░░░░░░░░░░░░░░█████░░░░░░██████
     ████████░░░░░░░░░░░░░░░░░░░░░░░░░░░█░░░░░░░░█████
     ████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██████
     ██████████░░░░░░░░█░░░░░░░░░░░░░░░░░░░░░░░░░░░░██████
     ██████████░░░░░░░░██░░░░░░░░░░░░░░░░░░░░░░░░░░███████
     ████████░░░░░░░░░░██░░░░░░░░░░░░░░░░░░░░░░░░█████████
     ██████░░░░░░░░░░░░█░░░░░░░░░░░░░░░░░░░░░░░███████████
     ██████████████████░░░░░░░░░░░████████████████████
     █████████████████████████████████████████████████
            
            
            
            
            
            `));
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}
exports.sceneManager = sceneManager;
