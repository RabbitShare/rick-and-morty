import {
  Input,
  Button,
  Grid,
  Select,
  MenuItem,
  FormControlLabel,
} from '@mui/material';
import { CharactersList } from './CharacterList';
import { useCharactersFilter } from './useCharactersFilter.hook';

export function Characters() {
  const { register, handleSubmit, handlePageChange, values } =
    useCharactersFilter();
  return (
    <div>
      <form>
        <Grid container spacing={1} direction="column" padding={1}>
          <Grid item>
            <FormControlLabel
              control={
                <Input {...register('species')} placeholder="Type species" />
              }
              label="Type species"
            />
            <Grid item>
              <FormControlLabel
                control={
                  <Input {...register('name')} placeholder="Type name" />
                }
                label="Type name"
              />
            </Grid>
          </Grid>
          <Grid item>
            <FormControlLabel
              control={<Input {...register('type')} placeholder="Type type" />}
              label="Type type"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Select fullWidth {...register('gender')}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Genderless">Genderless</MenuItem>
                  <MenuItem value="unknown">Unknown</MenuItem>
                </Select>
              }
              label="Select gender"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Select fullWidth {...register('status')}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Alive">Alive</MenuItem>
                  <MenuItem value="Dead">Dead</MenuItem>
                  <MenuItem value="unknown">Unknown</MenuItem>
                </Select>
              }
              label="Select status"
            />
          </Grid>
          <Grid item>
            <Button onClick={handleSubmit} type="submit">
              Find
            </Button>
          </Grid>
        </Grid>
      </form>
      <Button
        onClick={() => {
          handlePageChange(values.page - 1);
        }}
      >
        prev
      </Button>
      {values.page} of {values.maxPage}
      <Button
        onClick={() => {
          handlePageChange(values.page + 1);
        }}
      >
        next
      </Button>
      <CharactersList characters={values.characters} loading={values.loading} />
    </div>
  );
}
