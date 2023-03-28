# Procedimiento

## <u>Primera vez instalando</u>

Instalar de forma global (no en proyecto):
```
npm i -g expo-cli      
```

Situarse en la carpeta donde se va a crear el proyecto
```
npx create-expo-app routine-manager     
cd routine-manager
```

## a) <u>Correr en web</u>

Instalar las dependencias
```
npx expo install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1
```

Luego
```
npm run web
```

Al correr la versión web, también se habilita la versión mobile.