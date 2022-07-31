import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Banner = () => {
  const image = `${process.env.PUBLIC_URL}/assets/mercedes.jpg`;

  return (
    <Flex
      h="88vh"
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
          <Link to="/products">SHOP NOW</Link>
        </Button>
      </Zoom>
    </Flex>
  );
};

export default Banner;
