import { gql } from "./__generated__";

export const TEXT_LECTURE_OWN = gql(`
fragment TextLectureOwn on TextLecture{
    id
    name
    content
}
`);

export const VIDEO_LECTURE_OWN = gql(`
fragment VideoLectureOwn on VideoLecture{
    id
    name
    source
}
`);

export const PERSON_OWN = gql(`
fragment PersonOwn on Person{
    id
    name
    surname
    patronymic
  }
`);

export const VIDEO_LECTURE_WITH_ISWATCHED_BY_CURRENT_PERSON = gql(`
fragment VideoLectureWithIsWatched on VideoLectureWithIsWatched{
    id
    name
    source
    isWatched
  }
`);