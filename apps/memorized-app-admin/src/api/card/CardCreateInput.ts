import { WordWhereUniqueInput } from "../word/WordWhereUniqueInput";

export type CardCreateInput = {
  prompt?: string | null;
  blank?: string | null;
  word?: WordWhereUniqueInput | null;
};
