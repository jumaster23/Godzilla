import chalk from 'chalk';
import { audio } from '../engine/audio';


export class GodzillaEngine{
    private audio: audio;
    private position: number;
    private supercarga: boolean;

    private alientoatomico: number = 1000;
    private rayoespiral: number = 600;
    private rayoatomico: number = 800;



    constructor() {
        this.audio = new audio();
        this.position = 0;
        this.supercarga = false;
    }

    cercania(){
        let reposicionamiento: number = 75
        let avanceplus: number = 20
        this.position += Math.floor((Math.random() * reposicionamiento) + avanceplus);
        console.log(chalk.red(` Godzilla se acerca a la nave en la posición ${this.position}`));
        this.audio.playRoar();   
    }

    avancegodzilla(distancia: number){
        return this.position >= (1000 - distancia);
        
    }

    supercargaActivo(): void{
        this.supercarga = true;
        console.log(chalk.red(' Godzilla activo su supercarga, los ataques seran mas fuertes'));

    }
    esta_superccarga_activada(): boolean{
        return this.supercarga;
    }

    ejecutarAlientoatomico(): number{
        let poder = this.alientoatomico;
        if (this.supercarga) {
            poder = poder * 10
            console.log(chalk.red.bold(`🔥 ALIENTO ATÓMICO SUPER CHARGE: ${poder} de poder!`));
        }
        else{
            console.log(chalk.red(`🔥 Aliento Atómico: ${poder} de poder`));
        }
        return poder

    }       















































}