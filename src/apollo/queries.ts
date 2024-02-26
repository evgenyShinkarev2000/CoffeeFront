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