import { useQuery } from "@apollo/client";
import { Container, Stack } from "@mui/material";
import { useMemo } from "react";
import { Queries } from "src/apollo";
import { PersonProgress, TextLecture, VideoLecture } from "src/apollo/__generated__/graphql";
import { PersonProgressCard, PersonProgressCardModel } from "src/components/PersonProgressCard";

export function ProgressPage() {
  const { data } = useQuery(Queries.GET_ALLOWED_PEOPLE_PROGRESS_AND_VIDEO_LECTURES_AND_TEXT_LECTURES);

  const personProgressCardModels = useMemo(() => {
    if (data) {
      const personProgressOrderedByPersonSurname = data.allowedPeopleProgress!
        .map(app => app)
        .sort((a, b) => {
          if (a!.person!.surname! > b!.person!.surname!) {
            return 1;
          }

          return -1;
        });

      return personProgressOrderedByPersonSurname
        .map(app => buildPersonProgressCardModels(app!, data.textLectures as TextLecture[], data.videoLectures as VideoLecture[]));
    }

    return [];
  }, [data]);

  return <Container style={{ display: "flex", overflow: "auto" }}>
    <Stack direction="column" height="fit-content" gap="16px" justifyContent="space-between" flexGrow={1}>
      {personProgressCardModels.map(model => <PersonProgressCard key={model.person.id} model={model} />)}
    </Stack>
  </Container>
}

function buildPersonProgressCardModels(
  personProgress: PersonProgress,
  textLectures: TextLecture[],
  videoLectures: VideoLecture[]): PersonProgressCardModel {
  const readTextLectures = new Set(personProgress.readTextLectureIds);
  const watchedVideoLectures = new Set(personProgress.watchedVideoLectureIds);

  return {
    person: personProgress.person!,
    textLecture: textLectures.filter(tl => readTextLectures.has(tl.id)),
    videoLecture: videoLectures.filter(vl => watchedVideoLectures.has(vl.id)),
  };
}