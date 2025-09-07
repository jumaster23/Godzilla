import chalk from 'chalk';
const readline = require('readline-sync');
import { audio } from './audio';
import {Calculoslogicos} from '../logic/Calculos'

export class sceneManager {
    private audio: audio

    private calculations: Calculoslogicos;

    constructor() {
        this.audio = new audio;
        this.calculations = new Calculoslogicos();      
    
    }

    async intro(): Promise<void> {
        console.clear();
        
        console.log(chalk.yellow("==========================================================================="));
        console.log(chalk.yellow("===================== BIENVENIDO A SALVANDO AL MUNDO ======================"));
        console.log(chalk.yellow("==========================================================================="));
        await new Promise(resolve => setTimeout(resolve, 3000));
       
        
        // Simple menu text instead of ASCII art
        console.log(chalk.green("Estamos en peligro..."));
        console.log(chalk.red("Un monstruo amenaza la ciudad!"));
        console.log("\n");
        await new Promise(resolve => setTimeout(resolve, 2000));
            
        await console.log(chalk.yellow.bold(`
            Soldados, la humanidad está al borde de la destrucción.
            Godzilla ha despertado y amenaza con destruirlo todo.
            Tú y tu equipo deben programar la nave que puede salvar a la humanidad.
            
            El destino del mundo está en sus manos...
                `));
        await new Promise(resolve => setTimeout(resolve, 8000));    
        await this.audio.playRoar();
        await console.log(chalk.red.bold('                                                        GODZILLA SE ACERCA...'));
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        await console.log(chalk.red.bold('                               GODZILLA SE ACERCA...'));
        await new Promise(resolve => setTimeout(resolve, 1000));  
        await console.log(chalk.red.bold('        GODZILLA SE ACERCA...'));
        await new Promise(resolve => setTimeout(resolve, 1000));  
        
        await console.log(chalk.red.bold(`
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
