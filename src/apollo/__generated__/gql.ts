/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nfragment TextLectureOwn on TextLecture{\n    id\n    name\n    content\n}\n": types.TextLectureOwnFragmentDoc,
    "\nfragment VideoLectureOwn on VideoLecture{\n    id\n    name\n    source\n}\n": types.VideoLectureOwnFragmentDoc,
    "\nfragment PersonOwn on Person{\n    id\n    name\n    surname\n    patronymic\n  }\n": types.PersonOwnFragmentDoc,
    "\nfragment VideoLectureWithIsWatched on VideoLectureWithIsWatched{\n    id\n    name\n    source\n    isWatched\n  }\n": types.VideoLectureWithIsWatchedFragmentDoc,
    "\nmutation AddTextLecture($addTextLectureInput: AddTextLectureInput!){\n    addTextLecture(addTextLectureInput: $addTextLectureInput){\n        ...TextLectureOwn\n\n    }\n}\n": types.AddTextLectureDocument,
    "\nmutation UpdateTextLecture($updateTextLectureInput: UpdateTextLectureInput!){\n    updateTextLecture(updateTextLectureInput: $updateTextLectureInput){\n        ...TextLectureOwn\n    }\n}\n": types.UpdateTextLectureDocument,
    "\nmutation RemoveTextLecture($removeTextLectureInput: RemoveTextLectureInput!){\n    removeTextLecture(removeTextLectureInput: $removeTextLectureInput){\n        ...TextLectureOwn\n    }\n}\n": types.RemoveTextLectureDocument,
    "\nmutation AddVideoLecture($addVideoLectureInput: AddVideoLectureInput!){\n    addVideoLecture(addVideoLectureInput: $addVideoLectureInput){\n        ...VideoLectureOwn\n    }\n}\n": types.AddVideoLectureDocument,
    "\nmutation UpdateVideoLecture($updateVideoLectureInput: UpdateVideoLectureInput!){\n    updateVideoLecture(updateVideoLectureInput: $updateVideoLectureInput){\n        ...VideoLectureOwn\n    }\n}\n": types.UpdateVideoLectureDocument,
    "\nmutation RemoveVideoLecture($removeVideoLectureInput: RemoveVideoLectureInput!){\n    removeVideoLecture(removeVideoLectureInput: $removeVideoLectureInput){\n        ...VideoLectureOwn\n    }\n}\n": types.RemoveVideoLectureDocument,
    "\nmutation AddPerson($addPersonInput: AddPersonInput!){\n    addPerson(addPersonInput: $addPersonInput){\n      ...PersonOwn\n    }\n  }\n": types.AddPersonDocument,
    "\nmutation UpdatePerson($updatePersonInput: UpdatePersonInput!){\n    updatePerson(updatePersonInput: $updatePersonInput){\n      ...PersonOwn\n    }\n  }\n": types.UpdatePersonDocument,
    "\nmutation RemovePerson($removePersonInput: RemovePersonInput!){\n    removePerson(removePersonInput: $removePersonInput){\n      ...PersonOwn\n    }\n  }\n": types.RemovePersonDocument,
    "\nmutation SetVideoLectureWatched($setVideoLectureWatchedInput: SetVideoLectureWatchedInput!){\n    setVideoLectureWatched(setVideoLectureWatchedInput: $setVideoLectureWatchedInput){\n      id\n      isWatched\n    }\n  }": types.SetVideoLectureWatchedDocument,
    "\nquery GetTextLectures{\n    textLectures{\n        ...TextLectureOwn\n    }\n}\n": types.GetTextLecturesDocument,
    "\nquery GetVideoLectures{\n    videoLectures{\n        ...VideoLectureOwn\n    }\n}\n": types.GetVideoLecturesDocument,
    "\nquery GetPeople{\n    people{\n      ...PersonOwn\n    }\n  }\n": types.GetPeopleDocument,
    "\nquery GetKnownRoles{\n    knownRoles\n  }\n": types.GetKnownRolesDocument,
    "\nquery GetPeopleAndKnownRoles{\n    people{\n      ...PersonOwn\n    }\n    knownRoles\n  }\n": types.GetPeopleAndKnownRolesDocument,
    "\nquery GetVideoLectureWatchedByCurrentPerson {\n  videoLecturesWithIsWatchedByCurrentPerson{\n    id\n    name\n    source\n    isWatched\n  }\n}\n": types.GetVideoLectureWatchedByCurrentPersonDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nfragment TextLectureOwn on TextLecture{\n    id\n    name\n    content\n}\n"): (typeof documents)["\nfragment TextLectureOwn on TextLecture{\n    id\n    name\n    content\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nfragment VideoLectureOwn on VideoLecture{\n    id\n    name\n    source\n}\n"): (typeof documents)["\nfragment VideoLectureOwn on VideoLecture{\n    id\n    name\n    source\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nfragment PersonOwn on Person{\n    id\n    name\n    surname\n    patronymic\n  }\n"): (typeof documents)["\nfragment PersonOwn on Person{\n    id\n    name\n    surname\n    patronymic\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nfragment VideoLectureWithIsWatched on VideoLectureWithIsWatched{\n    id\n    name\n    source\n    isWatched\n  }\n"): (typeof documents)["\nfragment VideoLectureWithIsWatched on VideoLectureWithIsWatched{\n    id\n    name\n    source\n    isWatched\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation AddTextLecture($addTextLectureInput: AddTextLectureInput!){\n    addTextLecture(addTextLectureInput: $addTextLectureInput){\n        ...TextLectureOwn\n\n    }\n}\n"): (typeof documents)["\nmutation AddTextLecture($addTextLectureInput: AddTextLectureInput!){\n    addTextLecture(addTextLectureInput: $addTextLectureInput){\n        ...TextLectureOwn\n\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation UpdateTextLecture($updateTextLectureInput: UpdateTextLectureInput!){\n    updateTextLecture(updateTextLectureInput: $updateTextLectureInput){\n        ...TextLectureOwn\n    }\n}\n"): (typeof documents)["\nmutation UpdateTextLecture($updateTextLectureInput: UpdateTextLectureInput!){\n    updateTextLecture(updateTextLectureInput: $updateTextLectureInput){\n        ...TextLectureOwn\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation RemoveTextLecture($removeTextLectureInput: RemoveTextLectureInput!){\n    removeTextLecture(removeTextLectureInput: $removeTextLectureInput){\n        ...TextLectureOwn\n    }\n}\n"): (typeof documents)["\nmutation RemoveTextLecture($removeTextLectureInput: RemoveTextLectureInput!){\n    removeTextLecture(removeTextLectureInput: $removeTextLectureInput){\n        ...TextLectureOwn\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation AddVideoLecture($addVideoLectureInput: AddVideoLectureInput!){\n    addVideoLecture(addVideoLectureInput: $addVideoLectureInput){\n        ...VideoLectureOwn\n    }\n}\n"): (typeof documents)["\nmutation AddVideoLecture($addVideoLectureInput: AddVideoLectureInput!){\n    addVideoLecture(addVideoLectureInput: $addVideoLectureInput){\n        ...VideoLectureOwn\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation UpdateVideoLecture($updateVideoLectureInput: UpdateVideoLectureInput!){\n    updateVideoLecture(updateVideoLectureInput: $updateVideoLectureInput){\n        ...VideoLectureOwn\n    }\n}\n"): (typeof documents)["\nmutation UpdateVideoLecture($updateVideoLectureInput: UpdateVideoLectureInput!){\n    updateVideoLecture(updateVideoLectureInput: $updateVideoLectureInput){\n        ...VideoLectureOwn\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation RemoveVideoLecture($removeVideoLectureInput: RemoveVideoLectureInput!){\n    removeVideoLecture(removeVideoLectureInput: $removeVideoLectureInput){\n        ...VideoLectureOwn\n    }\n}\n"): (typeof documents)["\nmutation RemoveVideoLecture($removeVideoLectureInput: RemoveVideoLectureInput!){\n    removeVideoLecture(removeVideoLectureInput: $removeVideoLectureInput){\n        ...VideoLectureOwn\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation AddPerson($addPersonInput: AddPersonInput!){\n    addPerson(addPersonInput: $addPersonInput){\n      ...PersonOwn\n    }\n  }\n"): (typeof documents)["\nmutation AddPerson($addPersonInput: AddPersonInput!){\n    addPerson(addPersonInput: $addPersonInput){\n      ...PersonOwn\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation UpdatePerson($updatePersonInput: UpdatePersonInput!){\n    updatePerson(updatePersonInput: $updatePersonInput){\n      ...PersonOwn\n    }\n  }\n"): (typeof documents)["\nmutation UpdatePerson($updatePersonInput: UpdatePersonInput!){\n    updatePerson(updatePersonInput: $updatePersonInput){\n      ...PersonOwn\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation RemovePerson($removePersonInput: RemovePersonInput!){\n    removePerson(removePersonInput: $removePersonInput){\n      ...PersonOwn\n    }\n  }\n"): (typeof documents)["\nmutation RemovePerson($removePersonInput: RemovePersonInput!){\n    removePerson(removePersonInput: $removePersonInput){\n      ...PersonOwn\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation SetVideoLectureWatched($setVideoLectureWatchedInput: SetVideoLectureWatchedInput!){\n    setVideoLectureWatched(setVideoLectureWatchedInput: $setVideoLectureWatchedInput){\n      id\n      isWatched\n    }\n  }"): (typeof documents)["\nmutation SetVideoLectureWatched($setVideoLectureWatchedInput: SetVideoLectureWatchedInput!){\n    setVideoLectureWatched(setVideoLectureWatchedInput: $setVideoLectureWatchedInput){\n      id\n      isWatched\n    }\n  }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetTextLectures{\n    textLectures{\n        ...TextLectureOwn\n    }\n}\n"): (typeof documents)["\nquery GetTextLectures{\n    textLectures{\n        ...TextLectureOwn\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetVideoLectures{\n    videoLectures{\n        ...VideoLectureOwn\n    }\n}\n"): (typeof documents)["\nquery GetVideoLectures{\n    videoLectures{\n        ...VideoLectureOwn\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetPeople{\n    people{\n      ...PersonOwn\n    }\n  }\n"): (typeof documents)["\nquery GetPeople{\n    people{\n      ...PersonOwn\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetKnownRoles{\n    knownRoles\n  }\n"): (typeof documents)["\nquery GetKnownRoles{\n    knownRoles\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetPeopleAndKnownRoles{\n    people{\n      ...PersonOwn\n    }\n    knownRoles\n  }\n"): (typeof documents)["\nquery GetPeopleAndKnownRoles{\n    people{\n      ...PersonOwn\n    }\n    knownRoles\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetVideoLectureWatchedByCurrentPerson {\n  videoLecturesWithIsWatchedByCurrentPerson{\n    id\n    name\n    source\n    isWatched\n  }\n}\n"): (typeof documents)["\nquery GetVideoLectureWatchedByCurrentPerson {\n  videoLecturesWithIsWatchedByCurrentPerson{\n    id\n    name\n    source\n    isWatched\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;