import { Box, Heading } from "@chakra-ui/react";
import ProfileForm from "../../components/form/ProfileForm";
import Layout from "../../components/Layout";

const ProfilePage = () => {
  return (
    <Layout>
      <Box p={10}>
        <Heading mb={10}>Edit your profile details</Heading>

        <Box w="30%">
          <ProfileForm />
        </Box>
      </Box>
    </Layout>
  );
};

export default ProfilePage;
