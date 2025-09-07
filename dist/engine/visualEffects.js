"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisualEffects = void 0;
const chalk_1 = __importDefault(require("chalk"));
class VisualEffects {
    static async typewriter(text, delay = 50) {
        for (const char of text) {
            process.stdout.write(char);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
        console.log();
    }
    static async loadingBar(duration, message) {
        const totalSteps = 20;
        const stepDelay = duration / totalSteps;
        console.log(chalk_1.default.blue(message));
        process.stdout.write('[');
        for (let i = 0; i < totalSteps; i++) {
            process.stdout.write('█');
            await new Promise(resolve => setTimeout(resolve, stepDelay));
        }
        console.log('] 100%');
    }
    static async matrixRain(duration) {
        const chars = '01';
        const width = 50;
        const height = 10;
        for (let frame = 0; frame < duration / 100; frame++) {
            console.clear();
            console.log(chalk_1.default.green.bold('🌍 CONECTANDO CON IA ALIADA...'));
            for (let y = 0; y < height; y++) {
                let line = '';
                for (let x = 0; x < width; x++) {
                    line += chars[Math.floor(Math.random() * chars.length)];
                }
                console.log(chalk_1.default.green(line));
            }
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }
    static async explosionEffect() {
        const frames = [
            '💥',
            '💥💥',
            '💥💥💥',
            '💥💥💥💥',
            '💥💥💥💥💥'
        ];
        for (const frame of frames) {
            console.clear();
            console.log(chalk_1.default.red.bold(frame));
            await new Promise(resolve => setTimeout(resolve, 200));
        }
    }
    static async pulseEffect(text, color, cycles = 3) {
        for (let i = 0; i < cycles; i++) {
            console.clear();
            console.log(color.bold(text));
            await new Promise(resolve => setTimeout(resolve, 300));
            console.clear();
            console.log(color(text));
            await new Promise(resolve => setTimeout(resolve, 300));
        }
    }
    static async scrollingText(text, width = 50) {
        const paddedText = text.padStart(width + text.length);
        for (let i = 0; i < paddedText.length - width; i++) {
            console.clear();
            console.log(chalk_1.default.cyan(paddedText.substring(i, i + width)));
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }
    static async countdown(seconds, message) {
        for (let i = seconds; i > 0; i--) {
            console.clear();
            console.log(chalk_1.default.red.bold(`${message}: ${i}`));
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    static async sparkleEffect(text) {
        const sparkles = ['✨', '⭐', '💫', '🌟'];
        for (let i = 0; i < 5; i++) {
            console.clear();
            const sparkle = sparkles[Math.floor(Math.random() * sparkles.length)];
            console.log(chalk_1.default.yellow(`${sparkle} ${text} ${sparkle}`));
            await new Promise(resolve => setTimeout(resolve, 200));
        }
    }
    static async waveEffect(text) {
        const lines = text.split('\n');
        for (let wave = 0; wave < 3; wave++) {
            console.clear();
            lines.forEach((line, index) => {
                const offset = Math.sin(wave + index * 0.5) * 2;
                const spaces = ' '.repeat(Math.max(0, Math.floor(offset + 10)));
                console.log(chalk_1.default.blue(spaces + line));
            });
            await new Promise(resolve => setTimeout(resolve, 300));
        }
    }
    static async glitchEffect(text) {
        const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        for (let i = 0; i < 10; i++) {
            console.clear();
            let glitchedText = '';
            for (const char of text) {
                if (Math.random() < 0.3) {
                    glitchedText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
                }
                else {
                    glitchedText += char;
                }
            }
            console.log(chalk_1.default.red(glitchedText));
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        console.clear();
        console.log(chalk_1.default.green(text));
    }
}
exports.VisualEffects = VisualEffects;
