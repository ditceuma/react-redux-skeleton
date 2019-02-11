# React with Redux Skeleton

```react-redux-eskeleton``` é um esqueleto com uma estrutura de diretórios pré-configurada para criação/inicialização de projetos web.

*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).*

## Estrutura de diretórios

A estrutura de diretórios deste Skeleton, segue o seguinte padrão:

```
react-redux-skeleton
├── package.json
├── package-lock.json
├── public
│   ├── assets
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── README.md
├── src
│   ├── actions
│   ├── App.css
│   ├── App.js
│   ├── components
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reducers
│   ├── routes.js
│   ├── serviceWorker.js
│   ├── setupTests.js
│   ├── shared
│   └── __tests__
└── yarn.lock
```

Dentro de `src` os diretórios possuem as seguintes definições:

- **actions**: a pasta actions contém todas as ações da sua aplicação, e elas podem ser separadas baseadas - nas rotas que você usa, ou até mesmo por responsabilidades que suas ações terão.
- **components**: mantém os arquivos de componentes da aplicação.
- **reducers**: contém as edfinições de estado que serão utilizados dentro da aplicação.
- **shared**: dentro da pasta shared, teremos tudo que for compartilhado por vários pontos da aplicação.
- **__tests__**: diretório que contém a estrutura de testes.

## Como inicializar o projeto

### `npm install`

Execute este comando para instalar as dependências.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

-------------------------------------------------
