import { WordWhereUniqueInput } from "../word/WordWhereUniqueInput";

export type CardUpdateInput = {
  prompt?: string | null;
  blank?: string | null;
  word?: WordWhereUniqueInput | null;
};
