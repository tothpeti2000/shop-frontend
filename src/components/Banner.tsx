import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Zoom } from "react-awesome-reveal";

const Banner = () => {
  const image = `${process.env.PUBLIC_URL}/images/mercedes.jpg`;

  return (
    <Flex
      h="calc(100vh - 100px)"
      direction="column"
      justify="center"
      align="center"
      bgImage={image}
      bgRepeat="no-repeat"
      bgPosition="center"
      bgAttachment="fixed"
      bgSize="cover"
      color="white"
    >
      <Zoom cascade>
        <Heading fontSize={100}>Logo</Heading>
        <Text p={5} fontSize={50}>
          AWESOME SNEAKERS
        </Text>

        <Button
          p={8}
          fontSize={40}
          color="black"
          _hover={{ bgColor: "black", color: "white" }}
          transition="0.5s"
        >
          {/*<Link to="/products">SHOP NOW</Link>*/}
          SHOP NOW
        </Button>
      </Zoom>
    </Flex>
  );
};

export default Banner;
