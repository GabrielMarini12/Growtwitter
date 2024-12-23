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
// Eduarda cria um tweet
const tweet2 = eduarda.sendTweet("Amo o Internacional!");
// Rodrigo cria um tweet
const tweet3 = rodrigo.sendTweet("Feliz Natal a todos!");

// Eduarda responde ao tweet de Gabriel
const replyToGabriel = tweet1.repliesTweet("Você vai amar, Gabriel!", eduarda);

// Gabriel responde ao tweet de Rodrigo
const replyToRodrigo = tweet3.repliesTweet("Feliz Natal Rodrigo", gabriel);

// Rodrigo responde ao tweet de Eduarda
const replyToEduarda = tweet2.repliesTweet("Vamoo interrr", rodrigo);

// Eduarda responde Rodrigo no tweet de Eduarda
const replyToEduarda2 = tweet2.repliesTweet("Seremos campeões!!", eduarda);

// Eduarda segue Gabriel
eduarda.follow(gabriel);

// Gabriel segue Eduarda
gabriel.follow(eduarda);

// Gabriel segue Rodrigo
gabriel.follow(rodrigo);

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

// Gabriel curte o tweet de Rodrigo
tweet3.like(gabriel);

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
