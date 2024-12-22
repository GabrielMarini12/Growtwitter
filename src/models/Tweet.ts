import { randomUUID } from "crypto";
import { User } from "./User";
import { TypesType } from "../types";
export class Tweet {
  private readonly _id: string = randomUUID();
  private _likes: User[] = [];
  private _replies: Tweet[] = [];
  private tweetOriginal?: Tweet; // Se for um reply, aponta para o tweet original

  constructor(
    private _content: string,
    private _type: TypesType,
    private _user: User,
    tweetOriginal?: Tweet
  ) {
    this.tweetOriginal = tweetOriginal;
  }

  get id(): string {
    return this._id;
  }

  get likes(): User[] {
    return this._likes;
  }

  get replies(): Tweet[] {
    return this._replies;
  }

  get content(): string {
    return this._content;
  }

  get type(): string {
    return this._type;
  }

  get user(): User {
    return this._user;
  }

  like(user: User) {
    if (!this.likes.includes(user)) {
      this.likes.push(user);
    }
  }

  repliesTweet(content: string, user: User): Tweet {
    const resposta = new Tweet(
      content,
      TypesType.Reply,
      user,
      this // O tweet original será passado para o reply
    );
    this.replies.push(resposta);
    return resposta;
  }

  show(): string {
    let tweetInfo = `@${this.user.username}: ${this.content} (ID: ${this.id}, Tipo: ${this.type})\n`;

    // Exibição dos likes
    if (this.likes.length > 0) {
      if (this.likes.length === 1) {
        tweetInfo += `@${this.likes[0].username} curtiu\n`;
      } else if (this.likes.length > 1) {
        const [firstLike, ...rest] = this.likes;
        tweetInfo += `@${firstLike.username} e mais ${rest.length} usuários curtiram\n`;
      }
    }

    if (this.replies.length > 0) {
      tweetInfo += `Respostas:\n`;
      this.replies.forEach((reply) => {
        tweetInfo += `  > ${reply.show()}\n`;
      });
    }

    return tweetInfo;
  }

  toJson() {
    return {
      id: this._id,
      content: this._content,
      type: this._type,
    };
  }
}
