import { CardUpdateManyWithoutWordsInput } from "./CardUpdateManyWithoutWordsInput";

export type WordUpdateInput = {
  word?: string | null;
  definition?: string | null;
  cards?: CardUpdateManyWithoutWordsInput;
};
