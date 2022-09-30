import { Heading, Text } from "@chakra-ui/layout";
import { Box, Flex } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import SocialMediaIcon from "./SocialMediaIcon";

const Footer = () => {
  return (
    <Flex
      direction="column"
      justifyContent="space-around"
      alignItems="center"
      h="350px"
      bgGradient="linear(to-b, gray.900, black)"
      color="white"
    >
      <Heading fontSize={80}>Logo</Heading>

      <Flex justifyContent="space-around" alignItems="center" w="80%">
        <Box flex={1} textAlign="center">
          <Text fontSize="xl" fontWeight="bold">
            ADDRESS
          </Text>
          <Text>500 Terry Francois Street</Text>
          <Text>San Francisco, CA 94158</Text>
        </Box>

        <Flex flex={1} justifyContent="space-around" alignItems="center">
          <SocialMediaIcon icon={FaFacebookF} />
          <SocialMediaIcon icon={FaTwitter} />
          <SocialMediaIcon icon={FaInstagram} />
        </Flex>

        <Box flex={1} textAlign="center">
          <Text fontSize="xl" fontWeight="bold">
            CONTACT
          </Text>
          <Text>info@mysite.com</Text>
          <Text>Tel: 123-456-7890</Text>
        </Box>
      </Flex>

      <Text>Awesome Sneakers</Text>
    </Flex>
  );
};

export default Footer;
