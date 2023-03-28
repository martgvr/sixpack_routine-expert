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


<!-- APP -->

Se muestran 4 semanas (1 mes) que se van deslizando como cards, una superpuesta a la otra
La semana activa tendrá colores distintos o incluso la fecha de hoy

Al elegir una semana se va a maximizar en pantalla completa

Una tecla en la parte superior de la semana permitirá elegir los músculos a entrenar cada día