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
            console.log(chalk.red.bold(`🔥 ALIENTO ATOMICO SUPER CHARGE: ${poder} de poder!`));
        }
        else{
            console.log(chalk.red(`🔥 Aliento Atomico: ${poder} DE PODER`));
        }
        return poder

    }       

    ejecutarRayoEspiral(): number{
        let poder = this.rayoespiral;
        if (this.supercarga) {
            poder = poder * 10
            console.log(chalk.red.bold(`🔥 RAYO ESPIRAl SUPER CHARGE: ${poder} DE PODER!`));
        }
        else{
            console.log(chalk.red(`🔥 Rayo Espiral: ${poder} de poder`));
        }
        return poder
    }

    ejecutarRayoAtomico(): number{
        let poder = this.rayoatomico;
        if (this.supercarga) {
            poder = poder * 10
            console.log(chalk.red.bold(`🔥 RAYO ATOMICO SUPER CHARGE: ${poder} DE PODER!`));
        }
        else{
            console.log(chalk.red(`🔥 Rayo Atomico: ${poder} de poder`));
        }
        return poder
    }

    ejecutarTodosLosAtaques(): number{
        const ataque1 = this.ejecutarAlientoatomico();
        const ataque2 = this.ejecutarRayoEspiral();
        const ataque3 = this.ejecutarRayoAtomico();
        console.log(chalk.red.bold(`🔥 TODOS LOS ATAQUES: ${ataque1 + ataque2 + ataque3} DE PODER`));
        console.log(chalk.red.bold(`🔥 GODZILLA HA ATACADO LA NAVE`));
        this.audio.playRoar();
        console.log(chalk.red.bold(`🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥`));
        return ataque1 + ataque2 + ataque3;
    }















































}