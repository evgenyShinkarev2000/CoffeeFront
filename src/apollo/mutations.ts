import { gql } from "./__generated__";

export const ADD_TEXT_LECTURE = gql(`
mutation AddTextLecture($addTextLectureInput: AddTextLectureInput!){
    addTextLecture(addTextLectureInput: $addTextLectureInput){
        ...TextLectureOwn

    }
}
`);

export const UPDATE_TEXT_LECTURE = gql(`
mutation UpdateTextLecture($updateTextLectureInput: UpdateTextLectureInput!){
    updateTextLecture(updateTextLectureInput: $updateTextLectureInput){
        ...TextLectureOwn
    }
}
`);

export const ADD_VIDEO_LECTURE = gql(`
mutation AddVideoLecture($addVideoLectureInput: AddVideoLectureInput!){
    addVideoLecture(addVideoLectureInput: $addVideoLectureInput){
        ...VideoLectureOwn
    }
}
`);

export const UPDATE_VIDEO_LECTURE = gql(`
mutation UpdateVideoLecture($updateVideoLectureInput: UpdateVideoLectureInput!){
    updateVideoLecture(updateVideoLectureInput: $updateVideoLectureInput){
        ...VideoLectureOwn
    }
}
`);