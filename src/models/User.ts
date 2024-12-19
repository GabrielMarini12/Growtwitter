import { randomUUID } from "crypto";
import { Tweet } from "./Tweet";

export class User {
  private readonly _id: string = randomUUID();
  private _tweets: Tweet[] = [];

  constructor(
    private _name: string,
    private _email: string,
    private _username: string,
    private _password: string
  ) {}

  get id(): string {
    return this._id;
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

  sendTweet(tweet: Tweet) {
    this._tweets.push(tweet);
    console.log("Tweet enviado com sucesso!");
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
