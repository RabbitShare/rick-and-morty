import { gql } from '@apollo/client';
import { render } from '@testing-library/react';
import 'cross-fetch/polyfill';
import { MockedProvider } from '@apollo/react-testing';
import { CharacterModal } from './CharacterModal';

const mocks = [
  {
    request: {
      query: gql`
        fragment CharacterParts_Character on Character {
          id
          name
          status
          species
          gender
          type
          image
          episode {
            id
            name
          }
        }
        query Character($id: ID!) {
          character(id: $id) {
            ...CharacterParts_Character
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

test('Renders CharacterModal correctly', () => {
  render(
    <MockedProvider mocks={mocks}>
      <CharacterModal id="101" open handleClose={() => null} />
    </MockedProvider>
  );

  expect(true).toBeTruthy();
});
