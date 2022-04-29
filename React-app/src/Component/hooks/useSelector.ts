import { useSelector, TypedUseSelectorHook } from "react-redux";
import store from "../../store/store";

const useTypedSelector: TypedUseSelectorHook<
    ReturnType<typeof store.getState>
> = useSelector;

export default useTypedSelector;
