import { DeepPartial } from 'src/helpers/DeepPartial';
import { AddTextLectureInput, AddVideoLectureInput, TextLecture, UpdateTextLectureInput, UpdateVideoLectureInput, VideoLecture } from './__generated__/graphql';

type DataToInputMapper<Tin, Tout> = (obj: Tin) => Tout;

export const textLectureToAddInput: DataToInputMapper<DeepPartial<TextLecture>, AddTextLectureInput> = (textLecture) => ({
    name: textLecture.name,
    content: textLecture.content,
});

export const textLectureToUpdateInput: DataToInputMapper<TextLecture, UpdateTextLectureInput> = (textLecture) => ({
    id: textLecture.id,
    name: textLecture.name,
    content: textLecture.content,
});

export const videoLectureToAddInput: DataToInputMapper<DeepPartial<VideoLecture>, AddVideoLectureInput> = (videoLecture) => ({
    name: videoLecture.name,
    source: videoLecture.source,
});

export const videoLectureToUpdateInput: DataToInputMapper<VideoLecture, UpdateVideoLectureInput> = (videoLecture) => ({
    id: videoLecture.id,
    name: videoLecture.name,
    source: videoLecture.source,
});