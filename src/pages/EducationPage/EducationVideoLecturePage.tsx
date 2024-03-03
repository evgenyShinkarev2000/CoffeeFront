import { useMutation, useQuery } from "@apollo/client";
import { Container, Stack } from "@mui/material";
import { useCallback } from "react";
import { Mutations, Queries } from "src/apollo";
import { VideoLectureWithIsWatched } from "src/apollo/__generated__/graphql";
import { VideoLectureShortCard } from "src/components/VideoLectureShortCard";

export function EducationVideoLecturePage() {
  const { data } = useQuery(Queries.GET_VIDEO_LECTURES_WITH_ISWATCHED_BY_CURRENT_PERSON);
  const [setVideoLectureWatched, _setVideoLectureWatchedState] = useMutation(Mutations.SET_VIDEO_LECTURE_WATCHED);
  const setVideoLectureWatchedCallback = useCallback((videoLectureWatched: VideoLectureWithIsWatched) => {
    setVideoLectureWatched({
      variables: {
        setVideoLectureWatchedInput: {
          isWatched: !videoLectureWatched.isWatched,
          videoLecture: {
            id: videoLectureWatched.id,
          }
        }
      }
    })
  }, [setVideoLectureWatched]);

  return <Container style={{ display: "flex", overflow: "auto" }}>
    <Stack direction="row" flexWrap="wrap" height="fit-content" gap="16px" justifyContent="space-between">
      {
        data?.videoLecturesWithIsWatchedByCurrentPerson
          ?.map(vlw => ({ ...vlw }))
          .sort((a, b) => {
            if (a!.name! > b!.name!) {
              return 1;
            }
            return -1;
          }).map(vlw =>
            <VideoLectureShortCard
              key={vlw.id}
              model={vlw!}
              onOpen={() => { }}
              onSetWatched={() => setVideoLectureWatchedCallback(vlw as VideoLectureWithIsWatched)} />)
      }
    </Stack>
  </Container>
}