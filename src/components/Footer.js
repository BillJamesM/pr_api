import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/TPP_LOGO.PNG";

const Footer = () => (
  <Box mt="80px" bgcolor="#E6E6FA">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "200px", height: "41px" }} />
    </Stack>
    {/* <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by JavaScript Mastery</Typography> */}
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      Lets do Karaoke! <br /> -The CEI Coders{" "}
    </Typography>
  </Box>
);

export default Footer;
