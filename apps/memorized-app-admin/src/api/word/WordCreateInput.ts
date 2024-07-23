import { CardCreateNestedManyWithoutWordsInput } from "./CardCreateNestedManyWithoutWordsInput";

export type WordCreateInput = {
  word?: string | null;
  definition?: string | null;
  cards?: CardCreateNestedManyWithoutWordsInput;
};
