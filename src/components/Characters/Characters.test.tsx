import { gql } from '@apollo/client';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { Character } from './Character';
import { Characters } from './Characters';
import { CharactersList } from './CharacterList';
import { CharacterParts_Characters } from './__generated__/query';

const mocks = [
  {
    request: {
      query: gql`
        fragment CharacterParts_Characters on Character {
          id
          name
          image
        }
        query Characters($page: Int, $filter: FilterCharacter) {
          characters(page: $page, filter: $filter) {
            info {
              count
            }
            results {
              ...CharacterParts_Characters
            }
          }
        }
      `,
    },
    result: {
      data: {
        characters: {
          __typename: 'Characters',
          result: {
            id: '123',
            name: 'Cat 123',
          },
        },
      },
    },
  },
];

const mockCharacter: CharacterParts_Characters = {
  id: '1',
  image: 'hjk',
  name: '123',
  __typename: 'Character',
};

test('Renders Characters correctly', () => {
  render(
    <MockedProvider mocks={mocks}>
      <Characters />
    </MockedProvider>
  );

  expect(true).toBeTruthy();
});

test('Renders Character correctly', () => {
  render(
    <MockedProvider mocks={mocks}>
      <Character character={mockCharacter} />
    </MockedProvider>
  );

  expect(true).toBeTruthy();
});

test('Renders CharacterList correctly', () => {
  render(
    <MockedProvider mocks={mocks}>
      <CharactersList characters={[mockCharacter]} loading />
    </MockedProvider>
  );

  expect(true).toBeTruthy();
});
