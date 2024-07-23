import { Card as TCard } from "../api/card/Card";

export const CARD_TITLE_FIELD = "blank";

export const CardTitle = (record: TCard): string => {
  return record.blank?.toString() || String(record.id);
};
