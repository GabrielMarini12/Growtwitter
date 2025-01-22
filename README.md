# Growtwitter

Projeto Growtwitter, simula o backend do Twitter.

# Tecnologia

- Typescript

# Como inicializar o projeto

- Configuração do TS no Node
​
1. Inicialize o projeto com o npm:

npm init -y <br/><br/>
​
2. Instalação do TypeScript e tipagem do node.
Instale o TypeScript e as definições de tipos para Node.js:<br/>

npm install typescript @types/node -D<br/><br/>
​
3. Configuração do TypeScript (tsconfig.json).
Em seguida, crie o arquivo de configuração do TypeScript:<br/>

npx tsc --init<br/><br/>
​
Isso vai gerar um arquivo tsconfig.json. Agora, você pode ajustar algumas opções básicas nele. <br/><br/>
{
  "compilerOptions": {
    "rootDir": "./src", 
    "outDir": "./dist", 
  },
  "include": ["./src/**/*.ts"],
  "exclude": ["node_modules"]
}<br/><br/>
​
4. Estrutura de pastas.
Crie a pasta src onde estarão seus arquivos TypeScript:<br/>

mkdir src<br/><br/>
​
Dentro da pasta src, crie um arquivo index.ts como ponto de entrada do seu projeto:<br/>
console.log("Olá, mundo com TypeScript e Node.js!");<br/><br/>
​
5. Instalação de ts-node-dev:<br/>
Para rodar o projeto diretamente com TypeScript e observar mudanças automaticamente durante o desenvolvimento, instale o ts-node-dev:<br/>

npm install ts-node-dev -D<br/><br/>
​
6. Scripts no package.json.
Para facilitar a execução dos comandos, você pode adicionar scripts no package.json. <br/>

"scripts": {
  "build": "tsc",
  "start": "node dist/index.js",
  "dev": "ts-node-dev --respawn --transpile-only src/index.ts"
}<br/><br/>
​
Aqui, o comando build vai compilar os arquivos, o start executa o JavaScript compilado, e o dev (caso queira usar durante o desenvolvimento) permite que você rode o projeto com ts-node-dev para evitar recompilações manuais.<br/><br/>

-respawn reinicia automaticamente o processo quando há alterações nos arquivos.<br/>
-transpile-only transpila o TypeScript sem verificar tipos, tornando a execução mais rápida.<br/><br/>

Agora, você pode rodar o projeto em modo desenvolvimento:<br/>

npm run dev<br/><br/>

# Características

As principais características do projeto são:
- Cadastro de usuários.
- Cadastro de Tweets por usuários.
- Mecanismo de seguidores entre usuários.
- Poder visualizar os tweets dos usuários a quem seguem (estilo feed de tweets).
- Likes e replies em tweets.
