import useSelector from "../hooks/useSelector";
import useActions from "../hooks/useActions";
import { Box, Button, Stack, Typography } from "@mui/material";
import PlusOneIcon from "@mui/icons-material/PlusOne";
import RemoveIcon from "@mui/icons-material/Remove";

const Clicker = () => {
    const count = useSelector((state) => state.clicker.value);

    const { setValue, shiftValue } = useActions();

    const reset = () => setValue(0);
    const decrement = () => shiftValue(-1);
    const increment = () => shiftValue(1);

    return (
        <>
            <Stack
                direction="column"
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{ mt: "40px" }}
            >
                <Typography>Redux</Typography>
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Button
                        variant="outlined"
                        onClick={decrement}
                        startIcon={<RemoveIcon />}
                    ></Button>
                    <Box>{count}</Box>
                    <Button
                        variant="outlined"
                        onClick={increment}
                        startIcon={<PlusOneIcon />}
                    ></Button>
                    <Button variant="outlined" onClick={reset} size="small">
                        Reset
                    </Button>
                </Stack>
            </Stack>
        </>
    );
};

export default Clicker;
