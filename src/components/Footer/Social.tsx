import { Flex } from "@chakra-ui/layout";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import SocialMediaIcon from "./SocialMediaIcon";

const Social = () => {
  return (
    <Flex flex="1" align="center" justify="space-around">
      <SocialMediaIcon icon={FaFacebookF} />
      <SocialMediaIcon icon={FaTwitter} />
      <SocialMediaIcon icon={FaInstagram} />
    </Flex>
  );
};

export default Social;
