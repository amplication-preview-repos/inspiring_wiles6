import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WordTitle } from "../word/WordTitle";

export const CardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="prompt" multiline source="prompt" />
        <TextInput label="blank" source="blank" />
        <ReferenceInput source="word.id" reference="Word" label="word">
          <SelectInput optionText={WordTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
