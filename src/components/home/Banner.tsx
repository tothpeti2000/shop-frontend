import { Button, Center, Heading, Text } from "@chakra-ui/react";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Banner = () => {
  const bgImage = `${process.env.PUBLIC_URL}/assets/mercedes.jpg`;

  return (
    <Center
      flexDir="column"
      h="88vh"
      bgImage={bgImage}
      bgRepeat="no-repeat"
      bgPosition="center"
      bgAttachment="fixed"
      bgSize="cover"
      color="white"
    >
      <Zoom cascade triggerOnce>
        <Heading fontSize={100}>Logo</Heading>
        <Text p={5} fontSize={50}>
          AWESOME PRICES
        </Text>

        <Button
          p={8}
          fontSize={40}
          color="black"
          _hover={{ bgColor: "black", color: "white" }}
          transition="500ms"
        >
          <Link to="/products">SHOP NOW</Link>
        </Button>
      </Zoom>
    </Center>
  );
};

export default Banner;
