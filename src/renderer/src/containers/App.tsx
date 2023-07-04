import Button from "@mui/joy/Button";
import { CssVarsProvider } from "@mui/joy/styles";
import MuiButton from "@mui/material/Button";
import { LOADING_STATE } from "@renderer/constants/Constants";
import {
  fetchMetasrcData,
  selectTftMetasrcData,
  selectTftMetasrcDataStatus,
} from "@renderer/slices/teamfighttactics/TeamfightTacticsSlice";
import { useAppDispatch, useAppSelector } from "@renderer/store";
import { useEffect } from "react";

export const App = (): React.JSX.Element => {
  const dispatch = useAppDispatch();

  const tftMetasrcDataStatus = useAppSelector(selectTftMetasrcDataStatus);
  const tftMetasrcData = useAppSelector(selectTftMetasrcData);

  useEffect(() => {
    if (tftMetasrcDataStatus === LOADING_STATE.COMPLETE) return;

    dispatch(fetchMetasrcData());
  }, []);

  useEffect(() => {
    console.log(tftMetasrcData);
  }, [tftMetasrcData]);

  return (
    <div>
      <CssVarsProvider>
        <Button variant="solid" onClick={(): void => console.log("button clicked.")}>
          Hello World
        </Button>
      </CssVarsProvider>

      <MuiButton variant="contained">Hello World</MuiButton>
    </div>
  );
};
