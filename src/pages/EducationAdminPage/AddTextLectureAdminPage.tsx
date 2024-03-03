import { useMutation } from "@apollo/client";
import { Container } from "@mui/material";
import { useCallback, useState } from "react";
import { Mutations } from "src/apollo";
import { TextLecture } from "src/apollo/__generated__/graphql";
import { TextLectureFormAdmin, TextLectureFormModel } from "src/components/TextLectureFormAdmin";
import { useMapper } from "src/hooks/Mapper";

export function AddTextLectureAdminPage() {
  const mapper = useMapper();
  const [add, _addState] = useMutation(Mutations.ADD_TEXT_LECTURE);
  const [key, setKey] = useState(0);
  const handleAdd = useCallback((formModel: TextLectureFormModel) => {
    add({
      variables: {
        addTextLectureInput: mapper.textLectureToAddInput(formModel as TextLecture),
      }
    }).then(() => setKey((prev) => prev + 1));
  }, [add]);

  return <Container style={{ display: "flex", overflow: "auto", justifyContent: "center", alignItems: "center" }}>
    <TextLectureFormAdmin key={key} title="Добавить конспект" model={{}} onSubmit={handleAdd} ></TextLectureFormAdmin>
  </Container>
}