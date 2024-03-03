import { Button, Card, CardContent, Stack, Typography } from "@mui/material"

export type VideoLectureShortCardModel = {
  id: number,
  name: string,
  source: string,
  isWatched: boolean,
}

type VideoLectureShortCardProps = {
  model: VideoLectureShortCardModel,
  onSetWatched: () => any,
  onOpen: () => any,
}

export function VideoLectureShortCard(props: VideoLectureShortCardProps) {
  return <Card>
    <CardContent>
      <Typography>{props.model.name}</Typography>
      <Stack gap={1}>
        <img src={`http://i3.ytimg.com/vi/${props.model.source}/hqdefault.jpg`} />
        <Button variant="outlined" color={props.model.isWatched ? "success" : "info"}>
          {props.model.isWatched ? "просмторено" : "просмотреть"}
        </Button>
      </Stack>
    </CardContent>
  </Card>
}