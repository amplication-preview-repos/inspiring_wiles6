import { Card } from "../card/Card";

export type Word = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  word: string | null;
  definition: string | null;
  cards?: Array<Card>;
};
