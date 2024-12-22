import { randomUUID } from "crypto";
import { Tweet } from "./Tweet";
import { TypesType } from "../types";
export class User {
  private readonly _id: string = randomUUID();
  private _tweets: Tweet[] = [];
  private _seguidores: User[] = [];
  private _seguindo: User[] = [];

  constructor(
    private _name: string,
    private _email: string,
    private _username: string,
    private _password: string
  ) {}

  get id(): string {
    return this._id;
  }

  get tweets(): Tweet[] {
    return this._tweets;
  }

  get seguidores(): User[] {
    return this._seguidores;
  }

  get seguindo(): User[] {
    return this._seguindo;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  get username(): string {
    return this._username;
  }

  get password(): string {
    return this._password;
  }

  sendTweet(content: string) {
    const tweet = new Tweet(content, TypesType.Normal, this);
    this.tweets.push(tweet);
    return tweet;
  }

  follow(user: User) {
    if (!this.seguindo.includes(user) && user !== this) {
      this.seguindo.push(user);
      user.seguidores.push(this);
    } else {
      console.log(`${this.username} já segue ${user.username}`);
    }
  }

  showFeed(): Tweet[] {
    const feed: Tweet[] = [];
    this.seguindo.forEach((user) => {
      feed.push(...user._tweets); // Adiciona todos os tweets do usuário seguido
    });
    return feed;
  }

  toJson() {
    return {
      id: this._id,
      name: this._name,
      email: this._email,
      username: this._username,
      password: this._password,
    };
  }
}
