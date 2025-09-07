"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const chalk_1 = __importDefault(require("chalk"));
const readline = require('readline-sync');
// import { GodzillaEngine } from './logic/godzilla';
// import { propulsores } from './logic/propulsores';
const Calculos_1 = require("./logic/Calculos");
// import { aiHelper } from './engine/aiHelper';
const scenes_1 = require("./engine/scenes");
class Game {
    // private aiHelper: aiHelper;
    constructor() {
        this.sceneManager = new scenes_1.sceneManager();
        // this.godzilla = new GodzillaEngine()
        // this.propulsores = new propulsores();
        // this.aiHelper = new aiHelper();
        this.calculos = new Calculos_1.Calculoslogicos();
    }
    async inicio() {
        try {
            // Escena de inicio
            await this.sceneManager.intro();
            await this.calculos.calculateDistance();
            // // Fase 1: Cálculo de distancia y sigilo
            // await this.handleDistanceCalculation();
            // // Fase 2: Verificación de propulsores
            // await this.handlePropulsorCheck();
            // // Fase 3: Decisión principal (Combate vs Escape)
            // const choice = await this.getMainChoice();
            // if (choice === 'combat') {
            //     await this.handleCombatScenario();
            // } else {
            //     await this.handleEscapeScenario();
            // }
        }
        catch (error) {
            console.log(chalk_1.default.red('❌ Error en la misión:', error));
        }
    }
}
exports.Game = Game;
