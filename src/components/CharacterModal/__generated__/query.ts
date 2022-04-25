import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CharacterParts_Character = {
  __typename: 'Character';
  id?: string;
  name?: string;
  status?: string;
  species?: string;
  gender?: string;
  type?: string;
  image?: string;
  episode: Array<{ __typename: 'Episode'; id?: string; name?: string }>;
};

export type CharacterVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type Character = {
  __typename: 'Query';
  character?: {
    __typename: 'Character';
    id?: string;
    name?: string;
    status?: string;
    species?: string;
    gender?: string;
    type?: string;
    image?: string;
    episode: Array<{ __typename: 'Episode'; id?: string; name?: string }>;
  };
};

export const CharacterParts_Character = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CharacterParts_Character' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Character' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'species' } },
          { kind: 'Field', name: { kind: 'Name', value: 'gender' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'episode' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export const CharacterDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Character' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'character' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'CharacterParts_Character' },
                },
              ],
            },
          },
        ],
      },
    },
    ...CharacterParts_Character.definitions,
  ],
} as unknown as DocumentNode;

/**
 * __useCharacter__
 *
 * To run a query within a React component, call `useCharacter` and pass it any options that fit your needs.
 * When your component renders, `useCharacter` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharacter({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCharacter(
  baseOptions: Apollo.QueryHookOptions<Character, CharacterVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Character, CharacterVariables>(
    CharacterDocument,
    options
  );
}
export function useCharacterLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Character, CharacterVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Character, CharacterVariables>(
    CharacterDocument,
    options
  );
}
export type CharacterHookResult = ReturnType<typeof useCharacter>;
export type CharacterLazyQueryHookResult = ReturnType<
  typeof useCharacterLazyQuery
>;
export type CharacterQueryResult = Apollo.QueryResult<
  Character,
  CharacterVariables
>;
