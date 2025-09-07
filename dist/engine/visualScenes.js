"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisualScenes = void 0;
const chalk_1 = __importDefault(require("chalk"));
class VisualScenes {
    static createSceneBox(title, content) {
        const topBorder = '╔' + '═'.repeat(this.SCENE_WIDTH - 2) + '╗';
        const bottomBorder = '╚' + '═'.repeat(this.SCENE_WIDTH - 2) + '╝';
        const titleLine = `║ ${title.padEnd(this.SCENE_WIDTH - 4)} ║`;
        let scene = topBorder + '\n';
        scene += titleLine + '\n';
        scene += '╠' + '═'.repeat(this.SCENE_WIDTH - 2) + '╣\n';
        // Llenar el contenido
        for (let i = 0; i < this.SCENE_HEIGHT - 3; i++) {
            const line = content[i] || '';
            const paddedLine = line.padEnd(this.SCENE_WIDTH - 2);
            scene += `║${paddedLine}║\n`;
        }
        scene += bottomBorder;
        return scene;
    }
    static createSpaceScene() {
        const scene = new Array(this.SCENE_HEIGHT - 3).fill('');
        // Estrellas de fondo
        for (let i = 0; i < 15; i++) {
            const x = Math.floor(Math.random() * (this.SCENE_WIDTH - 2));
            const y = Math.floor(Math.random() * (this.SCENE_HEIGHT - 3));
            if (scene[y]) {
                scene[y] = scene[y].substring(0, x) + '⭐' + scene[y].substring(x + 1);
            }
        }
        // Planeta en la distancia
        scene[2] = '                    🌍';
        scene[3] = '                  🌍🌍🌍';
        scene[4] = '                🌍🌍🌍🌍🌍';
        return scene;
    }
    static createNaveInSpace(naveX, naveY) {
        const scene = this.createSpaceScene();
        // Dibujar la nave
        if (naveY >= 0 && naveY < scene.length && naveX >= 0 && naveX < this.SCENE_WIDTH - 2) {
            const nave = '🚀';
            scene[naveY] = scene[naveY].substring(0, naveX) + nave + scene[naveY].substring(naveX + 1);
        }
        return scene;
    }
    static createGodzillaScene() {
        const scene = new Array(this.SCENE_HEIGHT - 3).fill('');
        // Dibujar Godzilla
        scene[5] = '        🦖';
        scene[6] = '       🦖🦖🦖';
        scene[7] = '      🦖🦖🦖🦖🦖';
        scene[8] = '     🦖🦖🦖🦖🦖🦖🦖';
        scene[9] = '    🦖🦖🦖🦖🦖🦖🦖🦖🦖';
        scene[10] = '   🦖🦖🦖🦖🦖🦖🦖🦖🦖🦖🦖';
        // Ciudad destruida
        scene[12] = '🏢💥🏢💥🏢💥🏢💥🏢💥🏢';
        scene[13] = '💥🏢💥🏢💥🏢💥🏢💥🏢💥';
        scene[14] = '🏢💥🏢💥🏢💥🏢💥🏢💥🏢';
        // Fuego y humo
        scene[11] = '🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥';
        return scene;
    }
    static createCombatScene() {
        const scene = new Array(this.SCENE_HEIGHT - 3).fill('');
        // Godzilla en el centro
        scene[6] = '        🦖';
        scene[7] = '       🦖🦖🦖';
        scene[8] = '      🦖🦖🦖🦖🦖';
        scene[9] = '     🦖🦖🦖🦖🦖🦖🦖';
        // Ataques de Godzilla
        scene[5] = '    ⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡';
        scene[10] = '    🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥';
        // Explosiones
        scene[3] = '💥        💥        💥        💥';
        scene[4] = '  💥    💥    💥    💥    💥  ';
        return scene;
    }
    static createEscapeScene() {
        const scene = new Array(this.SCENE_HEIGHT - 3).fill('');
        // Nave despegando
        scene[8] = '        🚀';
        scene[9] = '       🚀🚀🚀';
        scene[10] = '      🚀🚀🚀🚀🚀';
        // Propulsores encendidos
        scene[11] = '    🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥';
        scene[12] = '  🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥';
        // Tierra alejándose
        scene[2] = '🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍';
        scene[3] = '🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍';
        // Estrellas
        scene[1] = '⭐  ⭐    ⭐  ⭐    ⭐  ⭐    ⭐';
        scene[0] = '  ⭐    ⭐  ⭐    ⭐  ⭐    ⭐  ⭐';
        return scene;
    }
    static createVictoryScene() {
        const scene = new Array(this.SCENE_HEIGHT - 3).fill('');
        // Nave victoriosa
        scene[6] = '        🚀';
        scene[7] = '       🚀🚀🚀';
        scene[8] = '      🚀🚀🚀🚀🚀';
        // Fuegos artificiales
        scene[3] = '🎆    🎆    🎆    🎆    🎆    🎆';
        scene[4] = '  🎆    🎆    🎆    🎆    🎆  ';
        scene[5] = '🎆    🎆    🎆    🎆    🎆    🎆';
        // Mensaje de victoria
        scene[10] = '    🎉 VICTORIA ÉPICA 🎉';
        scene[11] = '  🌍 HUMANIDAD SALVADA 🌍';
        // Estrellas brillantes
        scene[1] = '✨  ✨    ✨  ✨    ✨  ✨    ✨';
        scene[2] = '  ✨    ✨  ✨    ✨  ✨    ✨  ✨';
        return scene;
    }
    static createDefeatScene() {
        const scene = new Array(this.SCENE_HEIGHT - 3).fill('');
        // Godzilla victorioso
        scene[4] = '        🦖';
        scene[5] = '       🦖🦖🦖';
        scene[6] = '      🦖🦖🦖🦖🦖';
        scene[7] = '     🦖🦖🦖🦖🦖🦖🦖';
        scene[8] = '    🦖🦖🦖🦖🦖🦖🦖🦖🦖';
        // Destrucción total
        scene[10] = '💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥';
        scene[11] = '🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥';
        scene[12] = '💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥';
        // Mensaje de derrota
        scene[14] = '    💀 MUNDO DESTRUIDO 💀';
        return scene;
    }
    static createLaunchSequenceScene(progress) {
        const scene = new Array(this.SCENE_HEIGHT - 3).fill('');
        // Nave en la plataforma
        scene[12] = '        🚀';
        scene[13] = '       🚀🚀🚀';
        scene[14] = '      🚀🚀🚀🚀🚀';
        // Plataforma de lanzamiento
        scene[15] = '═══════════════════════════════════════════════════════════';
        // Propulsores según el progreso
        if (progress > 25) {
            scene[16] = '    🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥';
        }
        if (progress > 50) {
            scene[17] = '  🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥';
        }
        if (progress > 75) {
            scene[18] = '🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥';
        }
        // Barra de progreso visual
        const progressBar = '█'.repeat(Math.floor(progress / 5)) + '░'.repeat(20 - Math.floor(progress / 5));
        scene[1] = `Progreso: [${progressBar}] ${progress.toFixed(1)}%`;
        return scene;
    }
    static animateNaveMovement() {
        const scene = new Array(this.SCENE_HEIGHT - 3).fill('');
        // Estrellas de fondo
        for (let i = 0; i < 20; i++) {
            const x = Math.floor(Math.random() * (this.SCENE_WIDTH - 2));
            const y = Math.floor(Math.random() * (this.SCENE_HEIGHT - 3));
            if (scene[y]) {
                scene[y] = scene[y].substring(0, x) + '⭐' + scene[y].substring(x + 1);
            }
        }
        // Nave moviéndose
        scene[8] = '🚀';
        scene[9] = '🚀🚀🚀';
        scene[10] = '🚀🚀🚀🚀🚀';
        // Estela de la nave
        scene[11] = '  🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥';
        return scene;
    }
    static showScene(title, sceneType, extraData) {
        let scene;
        switch (sceneType) {
            case 'space':
                scene = this.createSpaceScene();
                break;
            case 'godzilla':
                scene = this.createGodzillaScene();
                break;
            case 'combat':
                scene = this.createCombatScene();
                break;
            case 'escape':
                scene = this.createEscapeScene();
                break;
            case 'victory':
                scene = this.createVictoryScene();
                break;
            case 'defeat':
                scene = this.createDefeatScene();
                break;
            case 'launch':
                scene = this.createLaunchSequenceScene(extraData?.progress || 0);
                break;
            case 'nave':
                scene = this.createNaveInSpace(extraData?.x || 10, extraData?.y || 8);
                break;
            default:
                scene = this.createSpaceScene();
        }
        console.log(chalk_1.default.cyan(this.createSceneBox(title, scene)));
    }
    static async animateSceneTransition(fromScene, toScene, title) {
        // Efecto de transición con fade
        for (let i = 0; i < 5; i++) {
            console.clear();
            console.log(chalk_1.default.gray(`Transición... ${i + 1}/5`));
            await new Promise(resolve => setTimeout(resolve, 200));
        }
        // Mostrar nueva escena
        this.showScene(title, toScene);
    }
}
exports.VisualScenes = VisualScenes;
VisualScenes.SCENE_WIDTH = 60;
VisualScenes.SCENE_HEIGHT = 20;
