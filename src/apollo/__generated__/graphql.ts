/* eslint-disable */
//@ts-nocheck
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddPersonInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  patronymic?: InputMaybe<Scalars['String']['input']>;
  surname?: InputMaybe<Scalars['String']['input']>;
};

export type AddTextLectureInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type AddVideoLectureInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
};

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER',
  Validation = 'VALIDATION'
}

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Document = {
  __typename?: 'Document';
  documentKind?: Maybe<DocumentKind>;
  externalId?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  people?: Maybe<Array<Maybe<Person>>>;
};

export type DocumentKind = {
  __typename?: 'DocumentKind';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type IdInput = {
  id: Scalars['Int']['input'];
};

export type IntOperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  ngt?: InputMaybe<Scalars['Int']['input']>;
  ngte?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  nlt?: InputMaybe<Scalars['Int']['input']>;
  nlte?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutations = {
  __typename?: 'Mutations';
  addPerson?: Maybe<Person>;
  addTextLecture?: Maybe<TextLecture>;
  addVideoLecture?: Maybe<VideoLecture>;
  removePerson?: Maybe<Person>;
  removeTextLecture?: Maybe<TextLecture>;
  removeVideoLecture?: Maybe<VideoLecture>;
  setTextLectureRead?: Maybe<TextLectureWithIsRead>;
  setVideoLectureWatched?: Maybe<VideoLectureWithIsWatched>;
  setVideoLectureWatchedAdmin?: Maybe<VideoLectureWithIsWatched>;
  updatePerson?: Maybe<Person>;
  updateTextLecture?: Maybe<TextLecture>;
  updateVideoLecture?: Maybe<VideoLecture>;
};


export type MutationsAddPersonArgs = {
  addPersonInput?: InputMaybe<AddPersonInput>;
};


export type MutationsAddTextLectureArgs = {
  addTextLectureInput?: InputMaybe<AddTextLectureInput>;
};


export type MutationsAddVideoLectureArgs = {
  addVideoLectureInput?: InputMaybe<AddVideoLectureInput>;
};


export type MutationsRemovePersonArgs = {
  removePersonInput?: InputMaybe<RemovePersonInput>;
};


export type MutationsRemoveTextLectureArgs = {
  removeTextLectureInput?: InputMaybe<RemoveTextLectureInput>;
};


export type MutationsRemoveVideoLectureArgs = {
  removeVideoLectureInput?: InputMaybe<RemoveVideoLectureInput>;
};


export type MutationsSetTextLectureReadArgs = {
  setTextLectureReadInput?: InputMaybe<SetTextLectureReadInput>;
};


export type MutationsSetVideoLectureWatchedArgs = {
  setVideoLectureWatchedInput?: InputMaybe<SetVideoLectureWatchedInput>;
};


export type MutationsSetVideoLectureWatchedAdminArgs = {
  setVideoLectureWatchedAdminInput?: InputMaybe<SetVideoLectureWatchedAdminInput>;
};


export type MutationsUpdatePersonArgs = {
  updatePersonInput?: InputMaybe<UpdatePersonInput>;
};


export type MutationsUpdateTextLectureArgs = {
  updateTextLectureInput?: InputMaybe<UpdateTextLectureInput>;
};


export type MutationsUpdateVideoLectureArgs = {
  updateVideoLectureInput?: InputMaybe<UpdateVideoLectureInput>;
};

export type Person = {
  __typename?: 'Person';
  compleatedTextLectures?: Maybe<Array<Maybe<TextLecture>>>;
  compleatedVideoLectures?: Maybe<Array<Maybe<VideoLecture>>>;
  documents?: Maybe<Array<Maybe<Document>>>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  patronymic?: Maybe<Scalars['String']['output']>;
  surname?: Maybe<Scalars['String']['output']>;
};

export type PersonProgress = {
  __typename?: 'PersonProgress';
  person?: Maybe<Person>;
  readTextLectureIds?: Maybe<Array<Scalars['Int']['output']>>;
  watchedVideoLectureIds?: Maybe<Array<Scalars['Int']['output']>>;
};

export type Queries = {
  __typename?: 'Queries';
  allowedPeopleProgress?: Maybe<Array<Maybe<PersonProgress>>>;
  knownRoles?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  people?: Maybe<Array<Maybe<Person>>>;
  textLectureWithIsReadByCurrentPerson?: Maybe<Array<Maybe<TextLectureWithIsRead>>>;
  textLectures?: Maybe<Array<Maybe<TextLecture>>>;
  videoLectures?: Maybe<Array<Maybe<VideoLecture>>>;
  videoLecturesWithIsWatchedByCurrentPerson?: Maybe<Array<Maybe<VideoLectureWithIsWatched>>>;
};


export type QueriesTextLectureWithIsReadByCurrentPersonArgs = {
  where?: InputMaybe<TextLectureWithIsReadFilterInput>;
};


export type QueriesVideoLecturesWithIsWatchedByCurrentPersonArgs = {
  where?: InputMaybe<VideoLectureWithIsWatchedFilterInput>;
};

export type RemovePersonInput = {
  id: Scalars['Int']['input'];
};

export type RemoveTextLectureInput = {
  id: Scalars['Int']['input'];
};

export type RemoveVideoLectureInput = {
  id: Scalars['Int']['input'];
};

export type SetTextLectureReadInput = {
  isRead: Scalars['Boolean']['input'];
  textLecture?: InputMaybe<IdInput>;
};

export type SetVideoLectureWatchedAdminInput = {
  isWatched: Scalars['Boolean']['input'];
  person?: InputMaybe<IdInput>;
  videoLecture?: InputMaybe<IdInput>;
};

export type SetVideoLectureWatchedInput = {
  isWatched: Scalars['Boolean']['input'];
  videoLecture?: InputMaybe<IdInput>;
};

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ncontains?: InputMaybe<Scalars['String']['input']>;
  nendsWith?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nstartsWith?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type TextLecture = {
  __typename?: 'TextLecture';
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  learnedPeople?: Maybe<Array<Maybe<Person>>>;
  name?: Maybe<Scalars['String']['output']>;
};

export type TextLectureWithIsRead = {
  __typename?: 'TextLectureWithIsRead';
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isRead: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type TextLectureWithIsReadFilterInput = {
  and?: InputMaybe<Array<TextLectureWithIsReadFilterInput>>;
  content?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  isRead?: InputMaybe<BooleanOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<TextLectureWithIsReadFilterInput>>;
};

export type UpdatePersonInput = {
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  patronymic?: InputMaybe<Scalars['String']['input']>;
  surname?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTextLectureInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateVideoLectureInput = {
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
};

export type VideoLecture = {
  __typename?: 'VideoLecture';
  id: Scalars['Int']['output'];
  learnedPeople?: Maybe<Array<Maybe<Person>>>;
  name?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
};

export type VideoLectureWithIsWatched = {
  __typename?: 'VideoLectureWithIsWatched';
  id: Scalars['Int']['output'];
  isWatched: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
};

export type VideoLectureWithIsWatchedFilterInput = {
  and?: InputMaybe<Array<VideoLectureWithIsWatchedFilterInput>>;
  id?: InputMaybe<IntOperationFilterInput>;
  isWatched?: InputMaybe<BooleanOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<VideoLectureWithIsWatchedFilterInput>>;
  source?: InputMaybe<StringOperationFilterInput>;
};

export type TextLectureOwnFragment = { __typename?: 'TextLecture', id: number, name?: string | null, content?: string | null };

export type VideoLectureOwnFragment = { __typename?: 'VideoLecture', id: number, name?: string | null, source?: string | null };

export type PersonOwnFragment = { __typename?: 'Person', id: number, name?: string | null, surname?: string | null, patronymic?: string | null };

export type VideoLectureWithIsWatchedFragment = { __typename?: 'VideoLectureWithIsWatched', id: number, name?: string | null, source?: string | null, isWatched: boolean };

export type TextLectureWithIsReadFragment = { __typename?: 'TextLectureWithIsRead', id: number, name?: string | null, content?: string | null, isRead: boolean };

export type AddTextLectureMutationVariables = Exact<{
  addTextLectureInput: AddTextLectureInput;
}>;


export type AddTextLectureMutation = { __typename?: 'Mutations', addTextLecture?: { __typename?: 'TextLecture', id: number, name?: string | null, content?: string | null } | null };

export type UpdateTextLectureMutationVariables = Exact<{
  updateTextLectureInput: UpdateTextLectureInput;
}>;


export type UpdateTextLectureMutation = { __typename?: 'Mutations', updateTextLecture?: { __typename?: 'TextLecture', id: number, name?: string | null, content?: string | null } | null };

export type RemoveTextLectureMutationVariables = Exact<{
  removeTextLectureInput: RemoveTextLectureInput;
}>;


export type RemoveTextLectureMutation = { __typename?: 'Mutations', removeTextLecture?: { __typename?: 'TextLecture', id: number, name?: string | null, content?: string | null } | null };

export type AddVideoLectureMutationVariables = Exact<{
  addVideoLectureInput: AddVideoLectureInput;
}>;


export type AddVideoLectureMutation = { __typename?: 'Mutations', addVideoLecture?: { __typename?: 'VideoLecture', id: number, name?: string | null, source?: string | null } | null };

export type UpdateVideoLectureMutationVariables = Exact<{
  updateVideoLectureInput: UpdateVideoLectureInput;
}>;


export type UpdateVideoLectureMutation = { __typename?: 'Mutations', updateVideoLecture?: { __typename?: 'VideoLecture', id: number, name?: string | null, source?: string | null } | null };

export type RemoveVideoLectureMutationVariables = Exact<{
  removeVideoLectureInput: RemoveVideoLectureInput;
}>;


export type RemoveVideoLectureMutation = { __typename?: 'Mutations', removeVideoLecture?: { __typename?: 'VideoLecture', id: number, name?: string | null, source?: string | null } | null };

export type AddPersonMutationVariables = Exact<{
  addPersonInput: AddPersonInput;
}>;


export type AddPersonMutation = { __typename?: 'Mutations', addPerson?: { __typename?: 'Person', id: number, name?: string | null, surname?: string | null, patronymic?: string | null } | null };

export type UpdatePersonMutationVariables = Exact<{
  updatePersonInput: UpdatePersonInput;
}>;


export type UpdatePersonMutation = { __typename?: 'Mutations', updatePerson?: { __typename?: 'Person', id: number, name?: string | null, surname?: string | null, patronymic?: string | null } | null };

export type RemovePersonMutationVariables = Exact<{
  removePersonInput: RemovePersonInput;
}>;


export type RemovePersonMutation = { __typename?: 'Mutations', removePerson?: { __typename?: 'Person', id: number, name?: string | null, surname?: string | null, patronymic?: string | null } | null };

export type SetVideoLectureWatchedMutationVariables = Exact<{
  setVideoLectureWatchedInput: SetVideoLectureWatchedInput;
}>;


export type SetVideoLectureWatchedMutation = { __typename?: 'Mutations', setVideoLectureWatched?: { __typename?: 'VideoLectureWithIsWatched', id: number, isWatched: boolean } | null };

export type SetTextLectureReadMutationVariables = Exact<{
  setTextLectureReadInput: SetTextLectureReadInput;
}>;


export type SetTextLectureReadMutation = { __typename?: 'Mutations', setTextLectureRead?: { __typename?: 'TextLectureWithIsRead', id: number, isRead: boolean } | null };

export type GetTextLecturesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTextLecturesQuery = { __typename?: 'Queries', textLectures?: Array<{ __typename?: 'TextLecture', id: number, name?: string | null, content?: string | null } | null> | null };

export type GetVideoLecturesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVideoLecturesQuery = { __typename?: 'Queries', videoLectures?: Array<{ __typename?: 'VideoLecture', id: number, name?: string | null, source?: string | null } | null> | null };

export type GetPeopleQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPeopleQuery = { __typename?: 'Queries', people?: Array<{ __typename?: 'Person', id: number, name?: string | null, surname?: string | null, patronymic?: string | null } | null> | null };

export type GetKnownRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetKnownRolesQuery = { __typename?: 'Queries', knownRoles?: Array<string | null> | null };

export type GetPeopleAndKnownRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPeopleAndKnownRolesQuery = { __typename?: 'Queries', knownRoles?: Array<string | null> | null, people?: Array<{ __typename?: 'Person', id: number, name?: string | null, surname?: string | null, patronymic?: string | null } | null> | null };

export type GetVideoLectureWatchedByCurrentPersonQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVideoLectureWatchedByCurrentPersonQuery = { __typename?: 'Queries', videoLecturesWithIsWatchedByCurrentPerson?: Array<{ __typename?: 'VideoLectureWithIsWatched', id: number, name?: string | null, source?: string | null, isWatched: boolean } | null> | null };

export type GetTextLectureReadByCurrentPersonQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTextLectureReadByCurrentPersonQuery = { __typename?: 'Queries', textLectureWithIsReadByCurrentPerson?: Array<{ __typename?: 'TextLectureWithIsRead', id: number, name?: string | null, content?: string | null, isRead: boolean } | null> | null };

export type GetAllowedPeopleProgressAndVideoLecturesAndTextLecturesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllowedPeopleProgressAndVideoLecturesAndTextLecturesQuery = { __typename?: 'Queries', textLectures?: Array<{ __typename?: 'TextLecture', id: number, name?: string | null, content?: string | null } | null> | null, videoLectures?: Array<{ __typename?: 'VideoLecture', id: number, name?: string | null, source?: string | null } | null> | null, allowedPeopleProgress?: Array<{ __typename?: 'PersonProgress', readTextLectureIds?: Array<number> | null, watchedVideoLectureIds?: Array<number> | null, person?: { __typename?: 'Person', id: number, name?: string | null, surname?: string | null, patronymic?: string | null } | null } | null> | null };

export const TextLectureOwnFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextLectureOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextLecture"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]} as unknown as DocumentNode<TextLectureOwnFragment, unknown>;
export const VideoLectureOwnFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoLectureOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoLecture"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}}]} as unknown as DocumentNode<VideoLectureOwnFragment, unknown>;
export const PersonOwnFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surname"}},{"kind":"Field","name":{"kind":"Name","value":"patronymic"}}]}}]} as unknown as DocumentNode<PersonOwnFragment, unknown>;
export const VideoLectureWithIsWatchedFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoLectureWithIsWatched"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoLectureWithIsWatched"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"isWatched"}}]}}]} as unknown as DocumentNode<VideoLectureWithIsWatchedFragment, unknown>;
export const TextLectureWithIsReadFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextLectureWithIsRead"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextLectureWithIsRead"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"isRead"}}]}}]} as unknown as DocumentNode<TextLectureWithIsReadFragment, unknown>;
export const AddTextLectureDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddTextLecture"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addTextLectureInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddTextLectureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addTextLecture"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addTextLectureInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addTextLectureInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextLectureOwn"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextLectureOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextLecture"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]} as unknown as DocumentNode<AddTextLectureMutation, AddTextLectureMutationVariables>;
export const UpdateTextLectureDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTextLecture"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateTextLectureInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTextLectureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTextLecture"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateTextLectureInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateTextLectureInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextLectureOwn"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextLectureOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextLecture"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]} as unknown as DocumentNode<UpdateTextLectureMutation, UpdateTextLectureMutationVariables>;
export const RemoveTextLectureDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveTextLecture"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removeTextLectureInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RemoveTextLectureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeTextLecture"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"removeTextLectureInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removeTextLectureInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextLectureOwn"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextLectureOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextLecture"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]} as unknown as DocumentNode<RemoveTextLectureMutation, RemoveTextLectureMutationVariables>;
export const AddVideoLectureDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddVideoLecture"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addVideoLectureInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddVideoLectureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addVideoLecture"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addVideoLectureInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addVideoLectureInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoLectureOwn"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoLectureOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoLecture"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}}]} as unknown as DocumentNode<AddVideoLectureMutation, AddVideoLectureMutationVariables>;
export const UpdateVideoLectureDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateVideoLecture"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateVideoLectureInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateVideoLectureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateVideoLecture"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateVideoLectureInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateVideoLectureInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoLectureOwn"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoLectureOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoLecture"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}}]} as unknown as DocumentNode<UpdateVideoLectureMutation, UpdateVideoLectureMutationVariables>;
export const RemoveVideoLectureDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveVideoLecture"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removeVideoLectureInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RemoveVideoLectureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeVideoLecture"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"removeVideoLectureInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removeVideoLectureInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoLectureOwn"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoLectureOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoLecture"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}}]} as unknown as DocumentNode<RemoveVideoLectureMutation, RemoveVideoLectureMutationVariables>;
export const AddPersonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddPerson"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addPersonInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddPersonInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addPerson"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addPersonInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addPersonInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonOwn"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surname"}},{"kind":"Field","name":{"kind":"Name","value":"patronymic"}}]}}]} as unknown as DocumentNode<AddPersonMutation, AddPersonMutationVariables>;
export const UpdatePersonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePerson"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updatePersonInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePersonInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePerson"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updatePersonInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updatePersonInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonOwn"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surname"}},{"kind":"Field","name":{"kind":"Name","value":"patronymic"}}]}}]} as unknown as DocumentNode<UpdatePersonMutation, UpdatePersonMutationVariables>;
export const RemovePersonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemovePerson"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removePersonInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RemovePersonInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removePerson"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"removePersonInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removePersonInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonOwn"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surname"}},{"kind":"Field","name":{"kind":"Name","value":"patronymic"}}]}}]} as unknown as DocumentNode<RemovePersonMutation, RemovePersonMutationVariables>;
export const SetVideoLectureWatchedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetVideoLectureWatched"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"setVideoLectureWatchedInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SetVideoLectureWatchedInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setVideoLectureWatched"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"setVideoLectureWatchedInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"setVideoLectureWatchedInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isWatched"}}]}}]}}]} as unknown as DocumentNode<SetVideoLectureWatchedMutation, SetVideoLectureWatchedMutationVariables>;
export const SetTextLectureReadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetTextLectureRead"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"setTextLectureReadInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SetTextLectureReadInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setTextLectureRead"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"setTextLectureReadInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"setTextLectureReadInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isRead"}}]}}]}}]} as unknown as DocumentNode<SetTextLectureReadMutation, SetTextLectureReadMutationVariables>;
export const GetTextLecturesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTextLectures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"textLectures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextLectureOwn"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextLectureOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextLecture"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]} as unknown as DocumentNode<GetTextLecturesQuery, GetTextLecturesQueryVariables>;
export const GetVideoLecturesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetVideoLectures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"videoLectures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoLectureOwn"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoLectureOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoLecture"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}}]} as unknown as DocumentNode<GetVideoLecturesQuery, GetVideoLecturesQueryVariables>;
export const GetPeopleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPeople"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"people"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonOwn"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surname"}},{"kind":"Field","name":{"kind":"Name","value":"patronymic"}}]}}]} as unknown as DocumentNode<GetPeopleQuery, GetPeopleQueryVariables>;
export const GetKnownRolesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetKnownRoles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"knownRoles"}}]}}]} as unknown as DocumentNode<GetKnownRolesQuery, GetKnownRolesQueryVariables>;
export const GetPeopleAndKnownRolesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPeopleAndKnownRoles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"people"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonOwn"}}]}},{"kind":"Field","name":{"kind":"Name","value":"knownRoles"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surname"}},{"kind":"Field","name":{"kind":"Name","value":"patronymic"}}]}}]} as unknown as DocumentNode<GetPeopleAndKnownRolesQuery, GetPeopleAndKnownRolesQueryVariables>;
export const GetVideoLectureWatchedByCurrentPersonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetVideoLectureWatchedByCurrentPerson"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"videoLecturesWithIsWatchedByCurrentPerson"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"isWatched"}}]}}]}}]} as unknown as DocumentNode<GetVideoLectureWatchedByCurrentPersonQuery, GetVideoLectureWatchedByCurrentPersonQueryVariables>;
export const GetTextLectureReadByCurrentPersonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTextLectureReadByCurrentPerson"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"textLectureWithIsReadByCurrentPerson"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextLectureWithIsRead"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextLectureWithIsRead"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextLectureWithIsRead"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"isRead"}}]}}]} as unknown as DocumentNode<GetTextLectureReadByCurrentPersonQuery, GetTextLectureReadByCurrentPersonQueryVariables>;
export const GetAllowedPeopleProgressAndVideoLecturesAndTextLecturesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllowedPeopleProgressAndVideoLecturesAndTextLectures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"textLectures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","name":{"kind":"Name","value":"videoLectures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}},{"kind":"Field","name":{"kind":"Name","value":"allowedPeopleProgress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"person"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surname"}},{"kind":"Field","name":{"kind":"Name","value":"patronymic"}}]}},{"kind":"Field","name":{"kind":"Name","value":"readTextLectureIds"}},{"kind":"Field","name":{"kind":"Name","value":"watchedVideoLectureIds"}}]}}]}}]} as unknown as DocumentNode<GetAllowedPeopleProgressAndVideoLecturesAndTextLecturesQuery, GetAllowedPeopleProgressAndVideoLecturesAndTextLecturesQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddPersonInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  patronymic?: InputMaybe<Scalars['String']['input']>;
  surname?: InputMaybe<Scalars['String']['input']>;
};

export type AddTextLectureInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type AddVideoLectureInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
};

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER',
  Validation = 'VALIDATION'
}

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Document = {
  __typename?: 'Document';
  documentKind?: Maybe<DocumentKind>;
  externalId?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  people?: Maybe<Array<Maybe<Person>>>;
};

export type DocumentKind = {
  __typename?: 'DocumentKind';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type IdInput = {
  id: Scalars['Int']['input'];
};

export type IntOperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  ngt?: InputMaybe<Scalars['Int']['input']>;
  ngte?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  nlt?: InputMaybe<Scalars['Int']['input']>;
  nlte?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutations = {
  __typename?: 'Mutations';
  addPerson?: Maybe<Person>;
  addTextLecture?: Maybe<TextLecture>;
  addVideoLecture?: Maybe<VideoLecture>;
  removePerson?: Maybe<Person>;
  removeTextLecture?: Maybe<TextLecture>;
  removeVideoLecture?: Maybe<VideoLecture>;
  setTextLectureRead?: Maybe<TextLectureWithIsRead>;
  setVideoLectureWatched?: Maybe<VideoLectureWithIsWatched>;
  setVideoLectureWatchedAdmin?: Maybe<VideoLectureWithIsWatched>;
  updatePerson?: Maybe<Person>;
  updateTextLecture?: Maybe<TextLecture>;
  updateVideoLecture?: Maybe<VideoLecture>;
};


export type MutationsAddPersonArgs = {
  addPersonInput?: InputMaybe<AddPersonInput>;
};


export type MutationsAddTextLectureArgs = {
  addTextLectureInput?: InputMaybe<AddTextLectureInput>;
};


export type MutationsAddVideoLectureArgs = {
  addVideoLectureInput?: InputMaybe<AddVideoLectureInput>;
};


export type MutationsRemovePersonArgs = {
  removePersonInput?: InputMaybe<RemovePersonInput>;
};


export type MutationsRemoveTextLectureArgs = {
  removeTextLectureInput?: InputMaybe<RemoveTextLectureInput>;
};


export type MutationsRemoveVideoLectureArgs = {
  removeVideoLectureInput?: InputMaybe<RemoveVideoLectureInput>;
};


export type MutationsSetTextLectureReadArgs = {
  setTextLectureReadInput?: InputMaybe<SetTextLectureReadInput>;
};


export type MutationsSetVideoLectureWatchedArgs = {
  setVideoLectureWatchedInput?: InputMaybe<SetVideoLectureWatchedInput>;
};


export type MutationsSetVideoLectureWatchedAdminArgs = {
  setVideoLectureWatchedAdminInput?: InputMaybe<SetVideoLectureWatchedAdminInput>;
};


export type MutationsUpdatePersonArgs = {
  updatePersonInput?: InputMaybe<UpdatePersonInput>;
};


export type MutationsUpdateTextLectureArgs = {
  updateTextLectureInput?: InputMaybe<UpdateTextLectureInput>;
};


export type MutationsUpdateVideoLectureArgs = {
  updateVideoLectureInput?: InputMaybe<UpdateVideoLectureInput>;
};

export type Person = {
  __typename?: 'Person';
  compleatedTextLectures?: Maybe<Array<Maybe<TextLecture>>>;
  compleatedVideoLectures?: Maybe<Array<Maybe<VideoLecture>>>;
  documents?: Maybe<Array<Maybe<Document>>>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  patronymic?: Maybe<Scalars['String']['output']>;
  surname?: Maybe<Scalars['String']['output']>;
};

export type PersonProgress = {
  __typename?: 'PersonProgress';
  person?: Maybe<Person>;
  readTextLectureIds?: Maybe<Array<Scalars['Int']['output']>>;
  watchedVideoLectureIds?: Maybe<Array<Scalars['Int']['output']>>;
};

export type Queries = {
  __typename?: 'Queries';
  allowedPeopleProgress?: Maybe<Array<Maybe<PersonProgress>>>;
  knownRoles?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  people?: Maybe<Array<Maybe<Person>>>;
  textLectureWithIsReadByCurrentPerson?: Maybe<Array<Maybe<TextLectureWithIsRead>>>;
  textLectures?: Maybe<Array<Maybe<TextLecture>>>;
  videoLectures?: Maybe<Array<Maybe<VideoLecture>>>;
  videoLecturesWithIsWatchedByCurrentPerson?: Maybe<Array<Maybe<VideoLectureWithIsWatched>>>;
};


export type QueriesTextLectureWithIsReadByCurrentPersonArgs = {
  where?: InputMaybe<TextLectureWithIsReadFilterInput>;
};


export type QueriesVideoLecturesWithIsWatchedByCurrentPersonArgs = {
  where?: InputMaybe<VideoLectureWithIsWatchedFilterInput>;
};

export type RemovePersonInput = {
  id: Scalars['Int']['input'];
};

export type RemoveTextLectureInput = {
  id: Scalars['Int']['input'];
};

export type RemoveVideoLectureInput = {
  id: Scalars['Int']['input'];
};

export type SetTextLectureReadInput = {
  isRead: Scalars['Boolean']['input'];
  textLecture?: InputMaybe<IdInput>;
};

export type SetVideoLectureWatchedAdminInput = {
  isWatched: Scalars['Boolean']['input'];
  person?: InputMaybe<IdInput>;
  videoLecture?: InputMaybe<IdInput>;
};

export type SetVideoLectureWatchedInput = {
  isWatched: Scalars['Boolean']['input'];
  videoLecture?: InputMaybe<IdInput>;
};

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ncontains?: InputMaybe<Scalars['String']['input']>;
  nendsWith?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nstartsWith?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type TextLecture = {
  __typename?: 'TextLecture';
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  learnedPeople?: Maybe<Array<Maybe<Person>>>;
  name?: Maybe<Scalars['String']['output']>;
};

export type TextLectureWithIsRead = {
  __typename?: 'TextLectureWithIsRead';
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isRead: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type TextLectureWithIsReadFilterInput = {
  and?: InputMaybe<Array<TextLectureWithIsReadFilterInput>>;
  content?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  isRead?: InputMaybe<BooleanOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<TextLectureWithIsReadFilterInput>>;
};

export type UpdatePersonInput = {
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  patronymic?: InputMaybe<Scalars['String']['input']>;
  surname?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTextLectureInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateVideoLectureInput = {
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
};

export type VideoLecture = {
  __typename?: 'VideoLecture';
  id: Scalars['Int']['output'];
  learnedPeople?: Maybe<Array<Maybe<Person>>>;
  name?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
};

export type VideoLectureWithIsWatched = {
  __typename?: 'VideoLectureWithIsWatched';
  id: Scalars['Int']['output'];
  isWatched: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
};

export type VideoLectureWithIsWatchedFilterInput = {
  and?: InputMaybe<Array<VideoLectureWithIsWatchedFilterInput>>;
  id?: InputMaybe<IntOperationFilterInput>;
  isWatched?: InputMaybe<BooleanOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<VideoLectureWithIsWatchedFilterInput>>;
  source?: InputMaybe<StringOperationFilterInput>;
};
