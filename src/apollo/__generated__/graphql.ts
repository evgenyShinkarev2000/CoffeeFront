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
  embed?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Mutations = {
  __typename?: 'Mutations';
  addTextLecture?: Maybe<TextLecture>;
  addVideoLecture?: Maybe<VideoLecture>;
  updateTextLecture?: Maybe<TextLecture>;
  updateVideoLecture?: Maybe<VideoLecture>;
};


export type MutationsAddTextLectureArgs = {
  addTextLectureInput?: InputMaybe<AddTextLectureInput>;
};


export type MutationsAddVideoLectureArgs = {
  addVideoLectureInput?: InputMaybe<AddVideoLectureInput>;
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
  emded?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type VideoLecture = {
  __typename?: 'VideoLecture';
  embed?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type GetTextLecturesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTextLecturesQuery = { __typename?: 'Queries', textLectures?: Array<{ __typename?: 'TextLecture', id: number, name?: string | null, content?: string | null } | null> | null };

export type GetVideoLecturesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVideoLecturesQuery = { __typename?: 'Queries', videoLectures?: Array<{ __typename?: 'VideoLecture', id: number, name?: string | null, embed?: string | null } | null> | null };


export const GetTextLecturesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTextLectures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"textLectures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<GetTextLecturesQuery, GetTextLecturesQueryVariables>;
export const GetVideoLecturesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetVideoLectures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"videoLectures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"embed"}}]}}]}}]} as unknown as DocumentNode<GetVideoLecturesQuery, GetVideoLecturesQueryVariables>;
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
  embed?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Mutations = {
  __typename?: 'Mutations';
  addTextLecture?: Maybe<TextLecture>;
  addVideoLecture?: Maybe<VideoLecture>;
  updateTextLecture?: Maybe<TextLecture>;
  updateVideoLecture?: Maybe<VideoLecture>;
};


export type MutationsAddTextLectureArgs = {
  addTextLectureInput?: InputMaybe<AddTextLectureInput>;
};


export type MutationsAddVideoLectureArgs = {
  addVideoLectureInput?: InputMaybe<AddVideoLectureInput>;
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
  emded?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type VideoLecture = {
  __typename?: 'VideoLecture';
  embed?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
};
