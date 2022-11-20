import { Box, Heading } from "@chakra-ui/react";
import ProfileForm from "../../components/form/ProfileForm";
import Layout from "../../components/Layout";
import useFeedback from "../../hooks/useFeedback";

const ProfilePage = () => {
  const { showSuccess } = useFeedback();

  const handleSuccess = () =>
    showSuccess(
      "Profile changes saved successfully",
      "The changes will be applied the next time you log in"
    );

  return (
    <Layout>
      <Box p={10}>
        <Heading mb={10}>Edit your profile details</Heading>

        <Box w="30%">
          <ProfileForm onSuccess={handleSuccess} />
        </Box>
      </Box>
    </Layout>
  );
};

export default ProfilePage;
