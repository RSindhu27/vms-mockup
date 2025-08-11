import React from "react";
import { Typography } from "@mui/material";
import { Upload_Logo } from "../../../Components/Images";
import {
  UploadImageBox,
  UploadedImageBox,
  ImageBox,
} from "../../../Components/Page";

function UploadImage({
  imgFile,
  handleImageFile,
  primaryText,
  secondaryText,
  size,
}) {
  return (
    <>
      <Typography variant="body2" sx={{ mb: 1 }}>
        {primaryText}
      </Typography>
      <UploadImageBox variant="contained" component="label">
        <ImageBox component="img" src={Upload_Logo} alt="Upload Image" />
        <Typography variant="body2">
          <b>{size}</b>
        </Typography>
        <input hidden accept="image/*" type="file" onChange={handleImageFile} />
      </UploadImageBox>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {secondaryText}:
      </Typography>
      {imgFile ? (
        <UploadedImageBox component="img" src={imgFile} alt="Profile" />
      ) : (
        <UploadedImageBox>
          <Typography variant="body2" color="GrayText">
            No Image
          </Typography>
        </UploadedImageBox>
      )}
    </>
  );
}

export default UploadImage;
