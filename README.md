# 🌍 Salvar al Mundo de Godzilla

Un juego épico de consola desarrollado en TypeScript puro donde debes salvar a la humanidad del temible Godzilla.

## 🎮 Descripción del Juego

Soldados, la humanidad está al borde de la destrucción. Godzilla ha despertado y amenaza con destruirlo todo. Tú y tu equipo deben programar la nave que puede salvar a la humanidad. Contarán con el apoyo de una inteligencia artificial que les dará consejos estratégicos, pero la decisión final es suya. El destino del mundo está en sus manos.

## 🚀 Características Implementadas

### ✅ Sistema de Escenas
- **Escena de Inicio**: Presentación épica con ASCII art
- **Escena de Combate**: Enfrentamiento directo con Godzilla
- **Escena de Escape**: Secuencia de despegue de emergencia
- **Múltiples Finales**: Victoria o derrota según tus decisiones

### 🔊 Sistema de Audio
- **Rugido de Godzilla**: Al avistar al enemigo
- **Propulsores**: Al preparar/despegar la nave
- **Ataques**: Durante el combate
- **Manejo de errores**: Continúa el juego aunque falle el audio

### ⚔️ Sistema de Combate
- **3 Ataques de Godzilla**:
  - 🔥 Aliento Atómico (1000 de poder)
  - ⚡ Rayo Espiral (800 de poder)
  - 🦴 Golpe de Cola (1200 de poder)
- **Super Charge**: Multiplica todos los ataques x10 cuando ambos propulsores fallan

### 🚀 Sistema de Propulsores
- **Potencia Base**: hidroPropulsor (5000) + potencia (10000) = 15000
- **Umbrales de Despegue**:
  - 75% si ambos propulsores funcionan
  - 90% en cualquier otro caso
- **Cálculos Especiales**:
  - Solo izquierdo: `(0.90² / 3) * potencia`
  - Solo derecho: `(0.90⁴ / 2) * hidroPropulsor`

### 📏 Cálculo de Distancia
- **Fórmula de Pitágoras**: `dist = √((X2-X1)² + (Y2-Y1)²)`
- **Escalado**: Coordenadas multiplicadas por 100 para metros
- **Sigilo**: Velo de invisibilidad activado si distancia < 300m
- **Validación**: Valores entre 50-1000, todos diferentes

### 🔐 Código de Seguridad
- **10 números aleatorios** que cumplen `n % 50 == 1`
- **Formato**: Números de la forma `50k + 1`
- **Ordenamiento**: Estrictamente descendente
- **Sin duplicados**: Cada número es único

### ⏱️ Secuencia de Despegue
- **Duración**: 2 minutos simulados
- **Escala 5x**: 24 segundos reales
- **Actualización**: Cada 5 segundos simulados
- **Barra de progreso**: Visual con timestamps

### 🤖 IA Aliada
- **Consejos estratégicos** para diferentes escenarios
- **Análisis de situación** en tiempo real
- **Recomendaciones** para propulsores, distancia y decisiones

## 🛠️ Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm

### Instalación
```bash
# Clonar el repositorio
git clone <repository-url>
cd salvar-mundo-godzilla

# Instalar dependencias
npm install
```

### Ejecución
```bash
# Ejecutar el juego
npm run dev
```

## 📁 Estructura del Proyecto

```
salvar-mundo-godzilla/
├── src/
│   ├── index.ts              # Punto de entrada
│   ├── game.ts               # Lógica principal del juego
│   ├── engine/
│   │   ├── audio.ts          # Sistema de audio
│   │   ├── scenes.ts         # Gestión de escenas
│   │   └── aiHelper.ts       # IA aliada
│   └── logic/
│       ├── calculations.ts   # Cálculos matemáticos
│       ├── godzilla.ts       # Lógica de Godzilla
│       └── propulsors.ts     # Sistema de propulsores
├── sounds/
│   ├── roar.mp3             # Rugido de Godzilla
│   ├── rocket.mp3           # Sonido de propulsores
│   └── attack.mp3           # Sonido de ataques
├── dist/                    # Código compilado
├── package.json
├── tsconfig.json
└── README.md
```

## 🎯 Mecánicas de Juego

### Flujo Principal
1. **Inicio**: Escena épica con rugido de Godzilla
2. **Cálculo de Distancia**: Ingresa coordenadas y verifica sigilo
3. **Verificación de Propulsores**: Análisis de potencia y posibles fallos
4. **Decisión Crítica**: Combate directo vs Escape
5. **Resolución**: Múltiples finales según tus elecciones

### Decisiones que Importan
- **Combate**: Mayor riesgo, posibilidad de victoria heroica
- **Escape**: Más seguro, requiere cálculos precisos
- **Consejo de IA**: Análisis estratégico antes de decidir

### Condiciones de Victoria
- **Escape Exitoso**: Despegue autorizado + secuencia completa
- **Combate Exitoso**: Superar el poder de Godzilla
- **Derrota**: Fallo en propulsores, Super Charge, o combate perdido

## 🔧 Fórmulas y Cálculos

### Potencia de Propulsores
```
PoderBase = hidroPropulsor + potencia = 5000 + 10000 = 15000

Umbral = {
  75% si ambos propulsores funcionan
  90% en cualquier otro caso
}

Solo Izquierdo: PoderRequerido = PoderBase + (0.90² / 3) * potencia
Solo Derecho: PoderRequerido = PoderBase + (0.90⁴ / 2) * hidroPropulsor
```

### Distancia
```
Coordenadas escaladas = coordenadas * 100
Distancia = √((X2-X1)² + (Y2-Y1)²)
Sigilo = distancia < 300 metros
```

### Código de Seguridad
```
Números válidos: n % 50 == 1 (números de la forma 50k + 1)
Ejemplo: 51, 101, 151, 201, 251, 301, 351, 401, 451, 501
Ordenamiento: Descendente estricto
```

## 🎵 Audio

El juego incluye archivos de audio reales:
- `roar.mp3`: Rugido de Godzilla
- `rocket.mp3`: Sonido de propulsores
- `attack.mp3`: Sonido de ataques

Si los archivos de audio no están disponibles, el juego continuará funcionando con mensajes de texto.

## 🏆 Múltiples Finales

El juego ofrece diferentes finales según tus decisiones:

1. **Victoria por Escape**: Despegue exitoso y secuencia completa
2. **Victoria por Combate**: Superar el poder de Godzilla
3. **Derrota por Super Charge**: Ambos propulsores fallan
4. **Derrota por Combate**: Godzilla es demasiado poderoso
5. **Derrota por Fallo de Despegue**: Potencia insuficiente

## 🤖 IA Aliada

La IA proporciona consejos estratégicos en diferentes escenarios:
- Análisis de fallos de propulsores
- Evaluación de distancia y sigilo
- Recomendaciones para decisiones críticas
- Advertencias sobre Super Charge

## 🎮 Controles

- **Entrada numérica**: Para coordenadas (50-1000)
- **Opciones de menú**: 1, 2, 3 para decisiones
- **Enter**: Confirmar entrada

## 🐛 Solución de Problemas

### Audio no funciona
- Verifica que los archivos .mp3 estén en la carpeta `sounds/`
- El juego continuará funcionando sin audio

### Errores de compilación
- Ejecuta `npm install` para instalar dependencias
- Verifica que TypeScript esté instalado globalmente

### Entrada inválida
- Asegúrate de ingresar números válidos para coordenadas
- Todos los valores deben ser diferentes entre sí

## 📝 Notas de Desarrollo

- **TypeScript puro**: Sin bundlers ni frameworks adicionales
- **Consola**: Interfaz completamente por terminal
- **Modular**: Código organizado en módulos especializados
- **Asíncrono**: Manejo de audio y secuencias temporales
- **Validación**: Entrada robusta con manejo de errores

## 🎯 Objetivos Cumplidos

✅ Proyecto en TypeScript puro  
✅ Sistema de escenas completo  
✅ Audio real (.mp3)  
✅ Múltiples finales  
✅ Cálculos y validaciones  
✅ IA aliada con consejos  
✅ Ejecución con `npm run dev`  
✅ Estructura organizada en carpetas  
✅ Fórmulas matemáticas implementadas  
✅ Sistema de propulsores completo  
✅ Godzilla con 3 ataques y Super Charge  

¡El destino del mundo está en tus manos, soldado! 🌍⚔️
