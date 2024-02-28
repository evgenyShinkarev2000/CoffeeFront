import { DeepPartial } from 'src/helpers/DeepPartial';
import { AddPersonInput, AddTextLectureInput, AddVideoLectureInput, Person, TextLecture, UpdatePersonInput, UpdateTextLectureInput, UpdateVideoLectureInput, VideoLecture } from './__generated__/graphql';

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

export const personToAddInput: DataToInputMapper<Person, AddPersonInput> = (person) => ({
    name: person.name,
    surname: person.surname,
    patronymic: person.patronymic,
});

export const personToUpdateInput: DataToInputMapper<Person, UpdatePersonInput> = (person) => ({
    id: person.id,
    name: person.name,
    surname: person.surname,
    patronymic: person.patronymic,
});