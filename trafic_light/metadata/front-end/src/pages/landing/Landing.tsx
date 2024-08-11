import { Center, HStack, VStack, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <VStack>
      <Heading>Landing Page</Heading>
      <Button as={Link} to="/home">
        Route 1
      </Button>
      <Button as={Link} to="/main">
        Route 2
      </Button>
    </VStack>
  );
}

export { Landing };
