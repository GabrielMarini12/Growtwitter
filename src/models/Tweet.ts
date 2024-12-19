import { randomUUID } from "crypto";

export class Tweet {
  private readonly _id: string = randomUUID();

  constructor(private _content: string, private _type: string) {}

  get id(): string {
    return this._id;
  }

  get content(): string {
    return this._content;
  }

  get type(): string {
    return this._type;
  }
}
