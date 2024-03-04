import { useMutation, useQuery } from "@apollo/client";
import { Container, Stack } from "@mui/material";
import { useCallback } from "react";
import { Mutations, Queries } from "src/apollo";
import { TextLectureWithIsRead } from "src/apollo/__generated__/graphql";
import { TextLectureCard } from "src/components/TextLectureCard";

export function EducationTextLecturePage() {
  const { data } = useQuery(Queries.GET_TEXT_LECTURE_WITH_ISREAD_BY_CURRENT_PERSON);
  const [setLectureRead, _setLectureReadState] = useMutation(Mutations.SET_TEXT_LECTURE_READ);

  const setTextLectureReadCallback = useCallback((tlr: TextLectureWithIsRead) => {
    setLectureRead({
      variables: {
        setTextLectureReadInput: {
          textLecture: {
            id: tlr.id,
          },
          isRead: !tlr.isRead,
        }
      }
    });
  }, [setLectureRead]);

  return <Container style={{ display: "flex", overflow: "auto" }}>
    <Stack direction="column" height="fit-content" gap="16px" justifyContent="space-between" flexGrow={1}>
      {
        data?.textLectureWithIsReadByCurrentPerson
          ?.map(tlr => ({ ...tlr }))
          .sort((a, b) => {
            if (a!.name! > b!.name!) {
              return 1;
            }
            return -1;
          }).map(tlr =>
            <TextLectureCard
              key={tlr.id}
              model={tlr!}
              onSetRead={() => setTextLectureReadCallback(tlr as TextLectureWithIsRead)} />)
      }
    </Stack>
  </Container>
}