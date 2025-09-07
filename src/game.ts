import chalk from 'chalk';
const readline = require('readline-sync');
// import { GodzillaEngine } from './logic/godzilla';
// import { propulsores } from './logic/propulsores';
import {Calculoslogicos} from './logic/Calculos'
// import { aiHelper } from './engine/aiHelper';
import { sceneManager} from './engine/scenes';

export class Game {
    private sceneManager: sceneManager;
    // private godzilla: GodzillaEngine;
    // private propulsores: propulsores;
    private calculos: Calculoslogicos;
    // private aiHelper: aiHelper;
 

    constructor() {
        this.sceneManager = new sceneManager();
        // this.godzilla = new GodzillaEngine()
        // this.propulsores = new propulsores();
        // this.aiHelper = new aiHelper();
    
        this.calculos = new Calculoslogicos();
    } 

    async inicio(){
        try {
            // Escena de inicio
            await this.sceneManager.intro();
            
            this.calculos.calculateDistance();
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
            
       
        } catch (error) {
            console.log(chalk.red('❌ Error en la misión:', error));
        }   
    }
    
}
