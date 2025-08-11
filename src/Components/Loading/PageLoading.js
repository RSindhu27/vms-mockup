import { Box, Skeleton } from "@mui/material";
import React from "react";
import { Logo_Arcolab } from "../Images";

function PageLoading() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: 100 + "vw",
          height: 100 + "vh",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 50 + "%",
            top: 50 + "%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Box component="img" src={Logo_Arcolab} width={260} />
        </Box>
      </Box>
    </>
  );
}

function FormLoading() {
  return (
    <>
      <Skeleton variant="rounded" width={210} height={40} sx={{ mb: 1 }} />
      <Skeleton variant="rounded" width={210} height={40} sx={{ mb: 1 }} />
      <Skeleton variant="rounded" width={100} height={40} sx={{ mb: 1 }} />
    </>
  );
}

function SubLoading() {
  return (
    <>
      <Skeleton variant="rounded" width={100} height={40} sx={{ mb: 2 }} />
      <Skeleton variant="rounded" width="95%" height={40} sx={{ mb: 1 }} />
      <Skeleton variant="rounded" width="80%" height={40} sx={{ mb: 1 }} />
    </>
  );
}

export { PageLoading, FormLoading, SubLoading };
