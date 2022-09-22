import { Circle, Image } from "@chakra-ui/react";

interface Props {
  imgURL?: string;
}

const CategoryCover = (props: Props) => {
  return (
    <Circle size="300px" overflow={"clip"} boxShadow="dark-lg" mx="auto" mb={5}>
      <Image src={props.imgURL || "https://via.placeholder.com/300"} />
    </Circle>
  );
};

export default CategoryCover;
