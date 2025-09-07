"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.audio = void 0;
const play_sound_1 = __importDefault(require("play-sound"));
const chalk_1 = __importDefault(require("chalk"));
const path_1 = __importDefault(require("path"));
class audio {
    constructor() {
        this.player = (0, play_sound_1.default)({});
    }
    async playSound(soundName) {
        const soundPath = path_1.default.join(__dirname, '../../sounds', `${soundName}.mp3`);
        return new Promise((resolve, reject) => {
            this.player.play(soundPath, (err) => {
                if (err) {
                    console.log(chalk_1.default.yellow(`⚠️  No se pudo reproducir ${soundName}.mp3: ${err.message}`));
                    resolve(); // 
                }
                else {
                    console.log(chalk_1.default.green(`🔊 Reproduciendo: ${soundName}`));
                    resolve();
                }
            });
        });
    }
    async playRoar() {
        await this.playSound('roar');
    }
    async introinicio() {
        await this.playSound('introinicio');
    }
    async playRocketstartup() {
        await this.playSound('rocketstartup');
    }
    async playRocketfail() {
        await this.playSound('rocketfail');
    }
    async playAttack() {
        await this.playSound('attack');
    }
}
exports.audio = audio;
