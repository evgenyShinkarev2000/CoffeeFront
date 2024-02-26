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

export const REMOVE_TEXT_LECTURE = gql(`
mutation RemoveTextLecture($removeTextLectureInput: RemoveTextLectureInput!){
    removeTextLecture(removeTextLectureInput: $removeTextLectureInput){
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

export const REMOVE_VIDEO_LECTURE = gql(`
mutation RemoveVideoLecture($removeVideoLectureInput: RemoveVideoLectureInput!){
    removeVideoLecture(removeVideoLectureInput: $removeVideoLectureInput){
        ...VideoLectureOwn
    }
}
`);