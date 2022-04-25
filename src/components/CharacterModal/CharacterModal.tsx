import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from '@mui/material';
import { useCharacter } from './__generated__/query';

export const CharacterModal = ({
  open,
  handleClose,
  id,
}: {
  open: boolean;
  handleClose: () => void;
  id: string;
}) => {
  const { data: { character } = {} } = useCharacter({ variables: { id } });
  return (
    <Dialog fullWidth maxWidth="lg" open={open} onClose={handleClose}>
      <DialogTitle>{character?.name}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item>
            <Card>
              <img src={character?.image ?? ''} alt="Character" />
              <Grid padding={1}>
                <Typography>
                  {character?.gender}, {character?.species}, {character?.status}
                </Typography>
                <Typography variant="caption">{character?.type}</Typography>
              </Grid>
            </Card>
          </Grid>
          <Grid item>
            <Typography variant="h5">Series</Typography>
            {character?.episode?.map((episode) => (
              <Typography variant="body2">{episode.name}</Typography>
            ))}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
