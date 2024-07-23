import { Word } from "../word/Word";

export type Card = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  prompt: string | null;
  blank: string | null;
  word?: Word | null;
};
