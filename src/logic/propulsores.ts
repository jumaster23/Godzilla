import chalk from 'chalk';


export class propulsores {
    private propulsorizquierdo: boolean;
    private propulsorderecho: boolean;
    private hidroPropulsor: number;
    private potencia: number;
    private supercarga: boolean;
    

    constructor() {
        this.propulsorizquierdo = true;
        this.propulsorderecho = true;
        this.hidroPropulsor = 5000;
        this.potencia = 10000;
        this.supercarga = false;
    }

    conseguirPoderbase(): number{
       return this.hidroPropulsor + this.potencia;
    }

    estadoPropulsorIzquierdo(): boolean{
        return this.propulsorizquierdo;
    }

    estadoPropulsorDerecho(): boolean{
        return this.propulsorderecho;
    }

    estadoambospropulsores(left: boolean, right: boolean): void{
        this.propulsorizquierdo = left;
        this.propulsorderecho = right;
        if (!left && !right) {
            this.supercarga = true;
            console.log(chalk.red.bold('⚠️  SOLDADO... Cuando los 2 propulsores no estén en funcionamiento... temo que debemos prepararnos para lo peor...'));
        }
    }

    supercargaActivo(): void{
        this.supercarga = true;
        console.log(chalk.red(' Godzilla activo su supercarga, los ataques seran mas fuertes'));

    }

    esta_superccarga_activada(): boolean{
        return this.supercarga;
    }

    calculopodernave(): {minimopotencia: number, poderRequerido: number, lanzamiento: boolean}{
        const poderbase = this.conseguirPoderbase();
        let minimopotencia: number;
        let poderRequerido = poderbase;

        if (this.propulsorizquierdo && this.propulsorderecho){
            minimopotencia = 0.75;
        }else{
            minimopotencia = 0.90
        }

        if (this.propulsorizquierdo && this.propulsorderecho){
            const requeridoizquierdo = Math.pow(0.90, 2) / 3 * this.potencia;
            poderRequerido = poderbase + requeridoizquierdo;
            console.log(chalk.green(`✅ Potencia requerida adicional izquierda: ${requeridoizquierdo.toFixed(2)}`));
        }else if(this.propulsorizquierdo && !this.propulsorderecho){
            const requeridoDerecho = Math.pow(0.90, 4) / 2 * this.hidroPropulsor;
            poderRequerido = poderbase + requeridoDerecho;
            console.log(chalk.green(`✅ Potencia requerida adicional derecha: ${requeridoDerecho.toFixed(2)}`));
        }

        const poderminimo = poderbase * minimopotencia;
        const lanzamiento = poderRequerido >= poderminimo;

        console.log(chalk.blue(`📊 Análisis de potencia:`));
        console.log(chalk.blue(`   - Potencia base: ${poderbase}`));
        console.log(chalk.blue(`   - Umbral (${(minimopotencia * 100)}%): ${minimopotencia.toFixed(2)}`));
        console.log(chalk.blue(`   - Potencia requerida: ${poderRequerido.toFixed(2)}`));
        console.log(chalk.blue(`   - Estado propulsores: Izq=${this.propulsorizquierdo ? '✅' : '❌'}, Der=${this.propulsorderecho ? '✅' : '❌'}`));


        return {
            minimopotencia,
            poderRequerido,
            lanzamiento
        };
        
    }

    intentoLanzamiento():{suceso: boolean, mensaje: string}{
        const analisis = this.calculopodernave();

        if(this.supercarga){
            return{
                suceso: false,
                mensaje: '❌ FALLO TOTAL: Ambos propulsores inoperativos. Super Charge activado.'
            }
            
        }

        if (analisis.lanzamiento){
            return{
                suceso: true,
                mensaje: '✅ DESPEGUE AUTORIZADO: Potencia suficiente para el despegue.'
            }
        }else{
            return{
                suceso: false,
                mensaje: '❌ FALLO: Potencia insuficiente para el despegue.'
            }
        }

    }

    verificarpropulsores(): number{
        if(!this.propulsorizquierdo && !this.propulsorderecho){
            return 0
        }

        let verificacion = 0;
        if(this.propulsorizquierdo) verificacion = verificacion + 50;
        if(this.propulsorderecho) verificacion = verificacion + 50;
        return verificacion;
    }





































} 