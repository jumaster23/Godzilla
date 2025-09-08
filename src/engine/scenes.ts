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
        
        console.log(chalk.yellow("BIENVENIDO A SALVANDO AL MUNDO"));
       
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
    escenaCombate(): void{
        console.clear();
        console.log("COMBATE INICIADO...\n");
        console.log(chalk.bgGreen(`
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%###.   .###%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%#**#%%%%*=:::+++++:::+*%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%*--==#*:-=+++.....+++---#%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%*--+*-. =++: %* *% :++-.*%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%###*==*.:++++:.*= =*.-+++=:-*%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%+=-==-=++.:++++++:::::+++++++=:-+%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%#+-****=.-=+++++++++:.+-..:=:.. :#%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%--=***=. =++++++++++++ -++- =++.-%%%%%%%%%%
%%%%%%%%%++%%%%%%%#*+++=-===:::=+++++++========::::-=#%%%%%%%%%%%
%%%%%%%=  :%%%%%%===+*****= =+++++++++++=----.   .*%%::#%%%%%%%%%
%%%%= :. :: *%%= #*--=*+- .+++++++++++++++=- .-*+: -%=: +%%%%%%%%
%%*..:   ==-  %%%-----*+- .+++++++++++++++++ -*****+-.:+:.#%%%%%%
%%*.:*##***+-----++*+=::-+++=-:=++++++++++++ :+####*-***:.#%%%%%%
%=.:=*#######*-+**+-. ++++++=: =+++++++ .+++ =########+.     #%%%
%-.=*####-----=--*= -++++++++== :++++: -=+++   -+#=---: -+%= #%%%
%=:+*###*-=****=- :++++++++++=- :=+++: -=+++ .-----:     .#= *%%%
%%#+=+*+--=*=----++++++++++++== :++++: +++++ .-===*- .:::-*- #%%%
%%#=----=--=. =++++++++++++++== :+..+: +++++     .*+ -=-=++: #%%%
%-  :-::-::.=++++++++++++++++===-.--.:=+==. =+***#%+ -- :-   +#%%
%- --:-----++++++++++++++++++++:-++++++=-.:-++++++#+ .::=+=:..:-#
%#+.:===++++++++++++====+++++++=-.=++==-:   .....:*+ .-+==**++= *
%%%%= -==============- :++++++++++. -== .-. +*%%%%%+ =**==*##*= *
%%%%%#-:::::::::-=====-: -=+++++++. :..--:.......:*= =*##*###.:%%
%%%%%%%%%%#++++++......  -==++++-::::-==-:::+++++++- =*######.:%%
%%%%%%%%%%%%%%%%%%%%%%%%*..=====--.                          *%%%
%%%%%%%%%%%%%%%%%%%%%%%%# .---=----- =%%%%%%%%%%%%%%%%%%%%%%%%%%%`))

    this.audio.playAttack();
    }

    escenaescape(progreso: number): string {
        console.clear();
        console.log("PREPARANDO SECUENCIA DE ESCAPE...\n");
    
        let cohete = `            
                                    /\\
                                   /  \\
                                  /    \\
                                 /______\\
                                |        |
                                |        |
                                |        |
                                |        |
                                |        |
                                |        |
                               /|   ||   |\\
                              / |   ||   | \\
                             /  |   ||   |  \\
                            /___|   ||   |___\\
                                |        |
                                 \\      /
                                  ||  || 
    `;
    
        let fuego = "";
    
        if (progreso > 25) {
            fuego += `            🔥🔥🔥🔥🔥🔥🔥`;
        }
        if (progreso > 50) {
            fuego += `        🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥`;
            fuego += `        🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥`;
        }
        if (progreso > 75) {
            fuego += `          🔥🔥🔥🔥🔥🔥🔥🔥`;
            fuego += `             🔥🔥🔥🔥🔥🔥`;
            fuego += `               🔥🔥🔥🔥`;
            fuego += `                  🔥🔥`;
            fuego += `                   🔥`;
        }
    
        return cohete + fuego;
    }
    
    escenaVictoria(): void{
        console.clear();
        console.log(chalk.green.bold(`
            ╔══════════════════════════════════════════════════════════════╗
            ║                    🎉 VICTORIA 🎉                            ║
            ╠══════════════════════════════════════════════════════════════╣
            ║                                                              ║
            ║              ¡LA HUMANIDAD HA SIDO SALVADA!                  ║
            ║                                                              ║
            ╚══════════════════════════════════════════════════════════════╝
                `));
    }

    escenaDerrota(): void{
        console.clear();
        console.log(chalk.red.bold(`
            ╔══════════════════════════════════════════════════════════════╗
            ║                    💀 DERROTA 💀                             ║
            ╠══════════════════════════════════════════════════════════════╣
            ║                                                              ║
            ║              GODZILLA HA DESTRUIDO EL MUNDO                  ║
            ║                                                              ║
            ╚══════════════════════════════════════════════════════════════╝
                `));
    }

    mostrarsupercargas(): void{
        console.log("SUPERCARGAS DETECTADAS")
        console.log("SUPERCARGAS ACTIVADAS")
        console.log(chalk.yellow.bold(`
    ╔══════════════════════════════════════════════════════════════╗
    ║                  ⚡ SUPER CHARGE ACTIVADO ⚡                 ║
    ╠══════════════════════════════════════════════════════════════╣
    ║                                                              ║
    ║    GODZILLA HA ENTRADO EN MODO DESTRUCCIÓN TOTAL            ║
    ║    TODOS SUS ATAQUES SE MULTIPLICAN POR 10                  ║
    ║                                                              ║
    ║    🦖 ALIENTO ATÓMICO x10                                   ║
    ║    ⚡ RAYO ESPIRAL x10                                       ║
    ║    🦴 GOLPE DE COLA x10                                     ║
    ║                                                              ║
    ╚══════════════════════════════════════════════════════════════`)) 





}      

}
