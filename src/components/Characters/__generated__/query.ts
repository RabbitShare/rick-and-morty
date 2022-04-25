import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CharacterParts_Characters = {
  __typename: 'Character';
  id?: string;
  name?: string;
  image?: string;
};

export type CharactersVariables = Types.Exact<{
  page?: Types.InputMaybe<Types.Scalars['Int']>;
  filter?: Types.InputMaybe<Types.FilterCharacter>;
}>;

export type Characters = {
  __typename: 'Query';
  characters?: {
    __typename: 'Characters';
    info?: { __typename: 'Info'; count?: number };
    results?: Array<{
      __typename: 'Character';
      id?: string;
      name?: string;
      image?: string;
    }>;
  };
};

export const CharacterParts_Characters = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CharacterParts_Characters' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Character' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export const CharactersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Characters' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'page' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'filter' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'FilterCharacter' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'characters' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'page' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'page' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'filter' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'info' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'results' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'CharacterParts_Characters',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...CharacterParts_Characters.definitions,
  ],
} as unknown as DocumentNode;

/**
 * __useCharacters__
 *
 * To run a query within a React component, call `useCharacters` and pass it any options that fit your needs.
 * When your component renders, `useCharacters` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharacters({
 *   variables: {
 *      page: // value for 'page'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useCharacters(
  baseOptions?: Apollo.QueryHookOptions<Characters, CharactersVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Characters, CharactersVariables>(
    CharactersDocument,
    options
  );
}
export function useCharactersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Characters, CharactersVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Characters, CharactersVariables>(
    CharactersDocument,
    options
  );
}
export type CharactersHookResult = ReturnType<typeof useCharacters>;
export type CharactersLazyQueryHookResult = ReturnType<
  typeof useCharactersLazyQuery
>;
export type CharactersQueryResult = Apollo.QueryResult<
  Characters,
  CharactersVariables
>;
