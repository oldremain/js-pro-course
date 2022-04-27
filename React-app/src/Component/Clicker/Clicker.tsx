import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Stack, Typography } from "@mui/material";
import PlusOneIcon from "@mui/icons-material/PlusOne";
import RemoveIcon from "@mui/icons-material/Remove";
import { setValue, shiftValue } from "../../store/clicker/actionCreators";

const Clicker = () => {
    const state = useSelector((state: any) => state.clicker.value);
    const dispatch = useDispatch();

    const decrement = () => {
        dispatch(shiftValue(-1));
    };
    const increment = () => {
        dispatch(shiftValue(1));
    };

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
                    <Box>{state}</Box>
                    <Button
                        variant="outlined"
                        onClick={increment}
                        startIcon={<PlusOneIcon />}
                    ></Button>
                </Stack>
            </Stack>
        </>
    );
};

export default Clicker;
