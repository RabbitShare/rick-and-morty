import { Typography, Card } from '@mui/material';
import { useState } from 'react';
import { CharacterModal } from '../CharacterModal/CharacterModal';
import { CharacterParts_Characters } from './__generated__/query';

export const Character = ({
  character,
}: {
  character: CharacterParts_Characters;
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  if (!character.id) return null;
  return (
    <>
      <CharacterModal open={open} handleClose={handleClose} id={character.id} />
      <Card onClick={handleOpen}>
        <img
          width="300"
          src={character?.image ?? ''}
          alt={character?.name ?? 'Character'}
        />
        <Typography>{character?.name}</Typography>
      </Card>
    </>
  );
};
