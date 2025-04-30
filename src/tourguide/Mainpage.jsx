import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Tourguide from "./Tourguide";

const Mainpage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Tourguide />
    </ChakraProvider>
  );
};

export default Mainpage;
