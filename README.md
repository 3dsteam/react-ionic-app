# React + Ionic

Template per la creazione di applicazioni React con Ionic.

## Prerequisiti

- [Node.js](https://nodejs.org/it/) (v20.11.0 LTS)

> File .tool-versions per asdf già presente nella root del progetto

- Account FontAwesome Pro ([configura accesso](https://fontawesome.com/docs/web/setup/packages#_1-configure-access))

## Installazione

Clona il progetto

```shell
git clone https://github.com/3dsteam/react-ionic-app.git my-app
```

Installa le dipendenze

```shell
yarn install # o npm install
```

> Consigliato l'utilizzo di [yarn](https://yarnpkg.com/) come package manager

### [Yarn only] Run prepare

Yarn non esegue automaticamente lo script `prepare` presente in `package.json` durante l'installazione.  
È quindi necessario eseguirlo manualmente

```shell
yarn prepare
```

Questo creerà degli hooks per il git tramite [Husky](https://typicode.github.io/husky/).

## Configurazione

All'interno dei file `.env.*` è possibile configurare le variabili d'ambiente.

Per utilizzare i componenti **Syncfusion** è necessario inserire la chiave di licenza in `VITE_SYNCFUSION_KEY`

> Puoi avviare l'applicazione `yarn dev` per vedere la lista delle integrazioni presenti nel template

## Avvio

```shell
yarn dev
```

## Features

Mains

- [React Router Dom](https://reactrouter.com/en/main)
- [Redux Toolkit and RXT Query](https://redux-toolkit.js.org/)
- [i18next](https://react.i18next.com/)

Components

- [Syncfusion](https://ej2.syncfusion.com/react/documentation/introduction)
- [Ionic](https://ionicframework.com/docs/)

Style

- [TailwindCSS](https://tailwindcss.com/)
- [FontAwesome](https://fontawesome.com/icons)

Building and development

- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://www.npmjs.com/package/sass)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/)
- [Lint staged](https://github.com/lint-staged/lint-staged)

Mobile

- [Capacitor](https://capacitorjs.com/)

Testing

- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

## Capacitor (Android e iOS)

[Vedi documentazione](https://capacitorjs.com/docs/getting-started/with-ionic)

### Inizializzazione

```shell
yarn add @capacitor/android @capacitor/ios
```

### Creazione progetto nativo

Tramite il pacchetto `@capacitor/cli` è possibile aggiungere le piattaforme Android e iOS

```shell
yarn cap add android
```

```shell
yarn cap add ios
```

## Build

```shell
yarn build
```

### Build nativo (Android e iOS)

```shell
yarn build:mobile
```

Questo comando esegue rispettivamente il comando `npm run build && cap sync` compilandolo il codice React e
sincronizzando i file nelle cartelle native.

## Test

```shell
yarn test
```

Per eseguire i test in modalità watch

```shell
yarn test:watch
```

## Authors

- [@lorenzo-bonatti](https://github.com/lorenzo-bonatti)

## License

[MIT](https://choosealicense.com/licenses/mit/)