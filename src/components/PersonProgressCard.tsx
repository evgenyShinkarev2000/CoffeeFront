import { Card, CardContent, Stack, Typography } from "@mui/material"
import { Person, TextLecture, VideoLecture } from "src/apollo/__generated__/graphql"
import { DeepPartial } from "src/helpers/DeepPartial"
import { TagWithDialog } from "./TagWithDialog"
import { TextLectureCard } from "./TextLectureCard"
import { VideoLectureFullCard } from "./VideoLectureFullCard"

export type PersonProgressCardModel = {
  person: DeepPartial<Person>,
  videoLecture: DeepPartial<VideoLecture[]>,
  textLecture: DeepPartial<TextLecture[]>,
}

type PersonProgressCardProps = {
  model: PersonProgressCardModel,
}

export function PersonProgressCard(props: PersonProgressCardProps) {
  return <Card>
    <CardContent>
      <Stack gap={1}>
        <Typography align="center">
          {`${props.model.person.surname} ${props.model.person.name} ${props.model.person.patronymic}`}
        </Typography>
        <Stack direction="row" gap={1} flexWrap="wrap">
          <Typography>Прочитанные конспекты</Typography>
          {
            props.model.textLecture.map(tl =>
              <TagWithDialog label={tl!.name!} render={() =>
                <TextLectureCard model={{ id: tl?.id, name: tl?.name, content: tl?.content, isRead: true }} extendedInitial={true} />} />)
          }
        </Stack>
        <Stack direction="row" gap={1} flexWrap="wrap">
          <Typography>Просмотренные видео</Typography>
          {
            props.model.videoLecture.map(vl =>
              <TagWithDialog label={vl!.name!} render={() =>
                <VideoLectureFullCard model={{ id: vl?.id, name: vl?.name, source: vl?.source, isWatched: true }} />} />)
          }
        </Stack>
      </Stack>
    </CardContent>
  </Card>
}