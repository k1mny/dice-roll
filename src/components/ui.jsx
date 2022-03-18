import { Box, Button, Grid, Slider } from '@mui/material';
import { useRecoilState } from 'recoil';
import { useDiceRoll, useDiceTop } from '../globalState/states';
import DiceSvg from './diceFaceSvg';

export default function UI() {
  const [roll, setRoll] = useRecoilState(useDiceRoll);
  const [diceTopNum, setDiceTopNum] = useRecoilState(useDiceTop);

  const handleSliderChange = (event, newValue) => {
    if (newValue >= diceTopNum.length) {
      setDiceTopNum([
        ...diceTopNum,
        ...Array(newValue - diceTopNum.length).fill(0),
      ]);
    } else {
      setDiceTopNum(diceTopNum.slice(0, newValue - diceTopNum.length));
    }
  };

  return (
    <Box
      style={{
        position: 'fixed',
        right: 0,
        width: 400,
        height: 200,
        color: 'white',
        zIndex: 10,
        margin: 10,
      }}
    >
      <Grid
        container
        spacing={3}
        direction="column"
        alignItems="center"
        justifyContent="center"
        width={'100%'}
        m={0}
      >
        <Grid p={1}>
          <Button
            variant="contained"
            onClick={() => {
              setRoll(!roll);
              setDiceTopNum([...Array(diceTopNum.length).fill(0)]);
            }}
          >
            Roll!
          </Button>
        </Grid>
        <Grid width={'70%'} p={1}>
          <Slider
            defaultValue={1}
            valueLabelDisplay="auto"
            step={1}
            value={diceTopNum.length}
            onChange={handleSliderChange}
            min={1}
            max={10}
          />
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          p={1}
          width="80%"
        >
          {[...diceTopNum]
            .map((n) => (n === 0 ? 10 : n))
            .sort((a, b) => a - b)
            .map((n) => (n === 10 ? 0 : n))
            .map((num, idx) => (
              <Grid
                key={idx}
                item
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
                xs={2.4}
              >
                <Box p={1}>
                  <DiceSvg index={num} height={30} width={30} />
                </Box>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Box>
  );
}
