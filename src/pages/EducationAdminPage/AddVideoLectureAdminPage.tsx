import { useMutation } from "@apollo/client";
import { Container } from "@mui/material";
import { useCallback, useState } from "react";
import { Mutations } from "src/apollo";
import { VideoLecture } from "src/apollo/__generated__/graphql";
import { VideoLectureFormAdmin, VideoLectureFormModel } from "src/components/VideoLectureFormAdmin";
import { useMapper } from "src/hooks/Mapper";

export function AddVideoLectureAdminPage() {
  const mapper = useMapper();
  const [add, _addState] = useMutation(Mutations.ADD_VIDEO_LECTURE);
  const [key, setKey] = useState(0);
  const handleAdd = useCallback((formModel: VideoLectureFormModel) => {
    add({
      variables: {
        addVideoLectureInput: mapper.videoLectureToAddInput(formModel as VideoLecture),
      }
    }).then(() => setKey((prev) => prev + 1));
  }, [add]);

  return <Container style={{ display: "flex", overflow: "auto", justifyContent: "center", alignItems: "center" }}>
    <VideoLectureFormAdmin key={key} title="Добавить видео" model={{}} onSubmit={handleAdd} ></VideoLectureFormAdmin>
  </Container>
}