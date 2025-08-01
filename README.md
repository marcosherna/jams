/Jams
├── /src
│   ├── /assets             # Imágenes, íconos, fuentes, sonidos
│   ├── /components         # Componentes UI reutilizables (Button, Card, etc.)
│   ├── /features           # Funcionalidades separadas por módulo
│   │   ├── /auth
│   │   │   ├── LoginScreen.tsx
│   │   │   ├── authService.ts
│   │   │   └── authSlice.ts (si usas Redux o Zustand)
│   │   ├── /music
│   │   │   ├── MusicListScreen.tsx
│   │   │   ├── MusicDetailScreen.tsx
│   │   │   ├── musicService.ts
│   │   │   └── musicSlice.ts
│   │   ├── /player
│   │   │   ├── PlayerScreen.tsx
│   │   │   ├── useAudioPlayer.ts (custom hook)
│   │   │   └── playerService.ts
│   ├── /navigation         # Stack/Tab navigators y sus configuraciones
│   │   ├── AppNavigator.tsx
│   │   └── navigationTypes.ts
│   ├── /store              # Estado global (Redux, Zustand, etc.)
│   │   ├── index.ts
│   │   └── rootReducer.ts
│   ├── /hooks              # Custom hooks (useAuth, usePlayer, etc.)
│   ├── /constants          # Colores, tamaños, rutas, etc.
│   │   ├── colors.ts
│   │   └── routes.ts
│   ├── /utils              # Funciones utilitarias (formato de tiempo, etc.)
│   ├── /services           # Acceso a APIs (si están compartidos entre features)
│   ├── /types              # Tipos y modelos globales (TypeScript)
│   └── App.tsx             # Punto de entrada principal
├── .eslintrc.js            # ESLint config
├── app.json / app.config.ts
├── package.json
└── tsconfig.json