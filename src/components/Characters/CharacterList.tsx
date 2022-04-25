import { Typography, Grid } from '@mui/material';
import { memo } from 'react';
import { Character } from './Character';
import { CharacterParts_Characters } from './__generated__/query';
import image from '/img/jop.png';

export const CharactersList = memo(
  ({
    characters,
    loading,
  }: {
    characters: Array<CharacterParts_Characters | undefined> | undefined;
    loading: boolean;
  }) => {
    if (loading) return <div>Loading...</div>;
    if (!characters)
      return (
        <Grid>
          <Typography variant="h1" color="red">
            Nothing
          </Typography>
          <img
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: '0', left: '0', zIndex: '-1' }}
            src={image}
            alt="jop"
          />
        </Grid>
      );
    return (
      <Grid alignItems="center" justifyContent="center" container spacing={1}>
        {characters.map(
          (character) =>
            character && (
              <Grid item key={character?.id}>
                <Character character={character} />
              </Grid>
            )
        )}
      </Grid>
    );
  }
);
