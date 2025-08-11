import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

function DirectionIcon() {
  const theme = useTheme();
  const media_md = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      {media_md ? (
        <ArrowCircleRightIcon fontSize="large" color="primary" />
      ) : (
        <ArrowCircleDownIcon fontSize="large" color="primary" />
      )}
    </>
  );
}

export { DirectionIcon };
