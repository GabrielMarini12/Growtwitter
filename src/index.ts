import { User } from "./models/User";

// Criando usuários
const gabriel = new User(
  "Gabriel",
  "gabrielmarini12@icloud.com",
  "gabimarini",
  "1234"
);
const eduarda = new User(
  "Eduarda",
  "eduarda@gmail.com",
  "eduardagarcez",
  "4321"
);
const rodrigo = new User(
  "Rodrigo",
  "rodrigo@hotmail.com",
  "rodrigogrespan",
  "1010"
);

// Gabriel cria um tweet
const tweet1 = gabriel.sendTweet("Olá, estou aprendendo TypeScript!");

// Eduarda cria um tweet e responde ao tweet de Gabriel
const tweet2 = eduarda.sendTweet("Eu também estou! #TypeScript");
const replyToGabriel = tweet2.repliesTweet("Você vai amar, Gabriel!", eduarda);

// Eduarda segue Gabriel
eduarda.follow(gabriel);

// Gabriel segue Eduarda
gabriel.follow(eduarda);

// Rodrigo cria um tweet
const tweetRodrigo = rodrigo.sendTweet("TypeScript é incrível!");

// Eduarda segue Rodrigo
eduarda.follow(rodrigo);

// Rodrigo segue Gabriel
rodrigo.follow(gabriel);

// Eduarda curte o tweet de Gabriel
tweet1.like(eduarda);

// Eduarda curte o tweet de Gabriel (não será adicionado pois já curtiu antes)
tweet1.like(eduarda);

// Rodrigo curte o tweet de Gabriel
tweet1.like(rodrigo);

// Visualizando o feed de tweets de Gabrie (tweets dos usuários que Gabriel segue)
console.log("Feed de Gabriel:");
const feedGabriel = gabriel.showFeed();
feedGabriel.forEach((tweet) => console.log(tweet.show()));

// Visualizando o feed de tweets de Eduarda (tweets dos usuários que Eduarda segue)
console.log("\nFeed de Eduarda:");
const feedEduarda = eduarda.showFeed();
feedEduarda.forEach((tweet) => console.log(tweet.show()));

// Visualizando o feed de tweets de Rodrigo (tweets dos usuários que Rodrigo segue)
console.log("\nFeed de Rodrigo:");
const feedRodrigo = rodrigo.showFeed();
feedRodrigo.forEach((tweet) => console.log(tweet.show()));
