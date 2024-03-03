import { gql } from "./__generated__";

export const GET_TEXT_LECTURES = gql(`
query GetTextLectures{
    textLectures{
        ...TextLectureOwn
    }
}
`);

export const GET_VIDEO_LECTURES = gql(`
query GetVideoLectures{
    videoLectures{
        ...VideoLectureOwn
    }
}
`);

export const GET_PEOPLE = gql(`
query GetPeople{
    people{
      ...PersonOwn
    }
  }
`);

export const GET_KNOWN_ROLES = gql(`
query GetKnownRoles{
    knownRoles
  }
`);

export const GET_PEOPLE_AND_KNOWN_ROLES = gql(`
query GetPeopleAndKnownRoles{
    people{
      ...PersonOwn
    }
    knownRoles
  }
`);

export const GET_VIDEO_LECTURES_WITH_ISWATCHED_BY_CURRENT_PERSON = gql(`
query GetVideoLectureWatchedByCurrentPerson {
  videoLecturesWithIsWatchedByCurrentPerson{
    id
    name
    source
    isWatched
  }
}
`);