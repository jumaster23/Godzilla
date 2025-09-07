import chalk from 'chalk';
const readline = require('readline-sync');

export class Calculoslogicos {
    

    calculateDistance(): number {
        console.log(chalk.blue.bold('\n📏 CÁLCULO DE DISTANCIA A GODZILLA'));
        console.log(chalk.yellow('Ingresa las coordenadas (valores entre 50 y 1000, todos diferentes):'));
        
        

        while(true){
            let x1 = parseFloat(readline.question("Introduce X1: "));
                if(x1 < 50 || x1 > 1000){
                        console.log(chalk.red('❌ Error: X1 debe estar entre 50 y 1000.'));
                        continue;
                    }
            let y1 = parseFloat(readline.question("Introduce Y1: "));
                if(y1 < 50 || y1 > 1000){
                    console.log(chalk.red('❌ Error: Y1 debe estar entre 50 y 1000.'));
                    continue;
                }
            let x2 = parseFloat(readline.question("Introduce X2: "));   
                if(x2 < 50 || x2 > 1000){
                    console.log(chalk.red('❌ Error: X2 debe estar entre 50 y 1000.'));
                    continue;
                }
            let y2 = parseFloat(readline.question("Introduce Y2: "));
                if(y2 < 50 || y2 > 1000){
                    console.log(chalk.red('❌ Error: Y2 debe estar entre 50 y 1000.'));
                    continue;
                }

        
        let escaladoX1 = x1 * 100;
        let escaladoY1 = y1 * 100;
        let escaladoX2 = x2 * 100;
        let escaladoY2 = y2 * 100;

        let distancia = Math.sqrt(
            Math.pow(escaladoX2 - escaladoX1, 2) + 
            Math.pow(escaladoY2 - escaladoY1, 2)
        );
        console.log(chalk.green(`✅ Distancia calculada: ${distancia.toFixed(2)}`));
        this.activacionVelo(distancia);
        // Exit the loop after one successful calculation
        return distancia;
    }
}
    
    private activacionVelo(distancia: number): boolean{
        
        if (distancia < 300){
            console.log(chalk.red('👻 VELO DE INVISIBILIDAD ACTIVADO'));
            console.log(chalk.red(' ESTAS MUY CERCA'));
            return false;
        } else  {
            console.log(chalk.green('✅ Distancia segura alcanzada. Sigilo mantenido.'));
            return true;
        }
    }            
            
    async revaluodistancia(){
        let sigilo = false;
        while(!sigilo){
            let buscandodistancia = this.calculateDistance();
            sigilo = this.activacionVelo(buscandodistancia);
        }
    }



}

