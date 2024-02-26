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

export type AddTextLectureInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type AddVideoLectureInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
};

export type Mutations = {
  __typename?: 'Mutations';
  addTextLecture?: Maybe<TextLecture>;
  addVideoLecture?: Maybe<VideoLecture>;
  removeTextLecture?: Maybe<TextLecture>;
  removeVideoLecture?: Maybe<VideoLecture>;
  updateTextLecture?: Maybe<TextLecture>;
  updateVideoLecture?: Maybe<VideoLecture>;
};


export type MutationsAddTextLectureArgs = {
  addTextLectureInput?: InputMaybe<AddTextLectureInput>;
};


export type MutationsAddVideoLectureArgs = {
  addVideoLectureInput?: InputMaybe<AddVideoLectureInput>;
};


export type MutationsRemoveTextLectureArgs = {
  removeTextLectureInput?: InputMaybe<RemoveTextLectureInput>;
};


export type MutationsRemoveVideoLectureArgs = {
  removeVideoLectureInput?: InputMaybe<RemoveVideoLectureInput>;
};


export type MutationsUpdateTextLectureArgs = {
  updateTextLectureInput?: InputMaybe<UpdateTextLectureInput>;
};


export type MutationsUpdateVideoLectureArgs = {
  updateVideoLectureInput?: InputMaybe<UpdateVideoLectureInput>;
};

export type Queries = {
  __typename?: 'Queries';
  textLectures?: Maybe<Array<Maybe<TextLecture>>>;
  videoLectures?: Maybe<Array<Maybe<VideoLecture>>>;
};

export type RemoveTextLectureInput = {
  id: Scalars['Int']['input'];
};

export type RemoveVideoLectureInput = {
  id: Scalars['Int']['input'];
};

export type TextLecture = {
  __typename?: 'TextLecture';
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
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
  name?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
};

export type TextLectureOwnFragment = { __typename?: 'TextLecture', id: number, name?: string | null, content?: string | null };

export type VideoLectureOwnFragment = { __typename?: 'VideoLecture', id: number, name?: string | null, source?: string | null };

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

export type GetTextLecturesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTextLecturesQuery = { __typename?: 'Queries', textLectures?: Array<{ __typename?: 'TextLecture', id: number, name?: string | null, content?: string | null } | null> | null };

export type GetVideoLecturesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVideoLecturesQuery = { __typename?: 'Queries', videoLectures?: Array<{ __typename?: 'VideoLecture', id: number, name?: string | null, source?: string | null } | null> | null };

export const TextLectureOwnFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextLectureOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextLecture"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]} as unknown as DocumentNode<TextLectureOwnFragment, unknown>;
export const VideoLectureOwnFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoLectureOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoLecture"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}}]} as unknown as DocumentNode<VideoLectureOwnFragment, unknown>;
export const AddTextLectureDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddTextLecture"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addTextLectureInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddTextLectureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addTextLecture"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addTextLectureInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addTextLectureInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextLectureOwn"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextLectureOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextLecture"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]} as unknown as DocumentNode<AddTextLectureMutation, AddTextLectureMutationVariables>;
export const UpdateTextLectureDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTextLecture"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateTextLectureInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTextLectureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTextLecture"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateTextLectureInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateTextLectureInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextLectureOwn"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextLectureOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextLecture"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]} as unknown as DocumentNode<UpdateTextLectureMutation, UpdateTextLectureMutationVariables>;
export const RemoveTextLectureDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveTextLecture"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removeTextLectureInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RemoveTextLectureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeTextLecture"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"removeTextLectureInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removeTextLectureInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextLectureOwn"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextLectureOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextLecture"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]} as unknown as DocumentNode<RemoveTextLectureMutation, RemoveTextLectureMutationVariables>;
export const AddVideoLectureDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddVideoLecture"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addVideoLectureInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddVideoLectureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addVideoLecture"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addVideoLectureInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addVideoLectureInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoLectureOwn"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoLectureOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoLecture"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}}]} as unknown as DocumentNode<AddVideoLectureMutation, AddVideoLectureMutationVariables>;
export const UpdateVideoLectureDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateVideoLecture"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateVideoLectureInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateVideoLectureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateVideoLecture"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateVideoLectureInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateVideoLectureInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoLectureOwn"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoLectureOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoLecture"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}}]} as unknown as DocumentNode<UpdateVideoLectureMutation, UpdateVideoLectureMutationVariables>;
export const RemoveVideoLectureDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveVideoLecture"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removeVideoLectureInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RemoveVideoLectureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeVideoLecture"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"removeVideoLectureInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removeVideoLectureInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoLectureOwn"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoLectureOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoLecture"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}}]} as unknown as DocumentNode<RemoveVideoLectureMutation, RemoveVideoLectureMutationVariables>;
export const GetTextLecturesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTextLectures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"textLectures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextLectureOwn"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextLectureOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextLecture"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]} as unknown as DocumentNode<GetTextLecturesQuery, GetTextLecturesQueryVariables>;
export const GetVideoLecturesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetVideoLectures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"videoLectures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoLectureOwn"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoLectureOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoLecture"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}}]} as unknown as DocumentNode<GetVideoLecturesQuery, GetVideoLecturesQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddTextLectureInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type AddVideoLectureInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
};

export type Mutations = {
  __typename?: 'Mutations';
  addTextLecture?: Maybe<TextLecture>;
  addVideoLecture?: Maybe<VideoLecture>;
  removeTextLecture?: Maybe<TextLecture>;
  removeVideoLecture?: Maybe<VideoLecture>;
  updateTextLecture?: Maybe<TextLecture>;
  updateVideoLecture?: Maybe<VideoLecture>;
};


export type MutationsAddTextLectureArgs = {
  addTextLectureInput?: InputMaybe<AddTextLectureInput>;
};


export type MutationsAddVideoLectureArgs = {
  addVideoLectureInput?: InputMaybe<AddVideoLectureInput>;
};


export type MutationsRemoveTextLectureArgs = {
  removeTextLectureInput?: InputMaybe<RemoveTextLectureInput>;
};


export type MutationsRemoveVideoLectureArgs = {
  removeVideoLectureInput?: InputMaybe<RemoveVideoLectureInput>;
};


export type MutationsUpdateTextLectureArgs = {
  updateTextLectureInput?: InputMaybe<UpdateTextLectureInput>;
};


export type MutationsUpdateVideoLectureArgs = {
  updateVideoLectureInput?: InputMaybe<UpdateVideoLectureInput>;
};

export type Queries = {
  __typename?: 'Queries';
  textLectures?: Maybe<Array<Maybe<TextLecture>>>;
  videoLectures?: Maybe<Array<Maybe<VideoLecture>>>;
};

export type RemoveTextLectureInput = {
  id: Scalars['Int']['input'];
};

export type RemoveVideoLectureInput = {
  id: Scalars['Int']['input'];
};

export type TextLecture = {
  __typename?: 'TextLecture';
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
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
  name?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
};
