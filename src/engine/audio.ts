import player from 'play-sound';
import chalk from 'chalk';
import path from 'path';

export class audio{
    private player: any;

    constructor() {
        this.player = player({});
    }

    async playSound(soundName: string): Promise<void> {
        const soundPath = path.join(__dirname, '../../sounds', `${soundName}.mp3`);
        
        return new Promise((resolve, reject) => {
            this.player.play(soundPath, (err: any) => {
                if (err) {
                    console.log(chalk.yellow(`⚠️  No se pudo reproducir ${soundName}.mp3: ${err.message}`));
                    resolve(); // 
                } else {
                    console.log(chalk.green(`🔊 Reproduciendo: ${soundName}`));
                    resolve();
                }
            });
        });
    }

    async playRoar(): Promise<void> {
        await this.playSound('roar');
    }

    async introinicio(): Promise<void> {
        await this.playSound('introinicio');
    }

    async playRocketstartup(): Promise<void> {
        await this.playSound('rocketstartup');
    }
    
    async playRocketfail(): Promise<void> {
        await this.playSound('rocketfail');
    }

    async playAttack(): Promise<void> {
        await this.playSound('attack');
    }
}