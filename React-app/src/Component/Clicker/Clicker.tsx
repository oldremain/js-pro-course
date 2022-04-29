import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { Box, Button, Stack, Typography } from "@mui/material";
import PlusOneIcon from "@mui/icons-material/PlusOne";
import RemoveIcon from "@mui/icons-material/Remove";
import { setValue, shiftValue } from "../../store/clicker/actionCreators";
import store from "../../store/store";

const useTypedSelector: TypedUseSelectorHook<
    ReturnType<typeof store.getState>
> = useSelector;

const Clicker = () => {
    const state = useTypedSelector((state) => state.clicker.value);
    // const state = useSelector((state: any) => state);
    const dispatch = useDispatch();

    const reset = () => {
        dispatch(setValue(0));
    };

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
                    <Button variant="outlined" onClick={reset} size="small">
                        Reset
                    </Button>
                </Stack>
            </Stack>
        </>
    );
};

export default Clicker;
