import { Center, HStack, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GreenColor } from "./Green-Color";
import { RedColor } from "./Red-Color";
import { YellowColor } from "./Yellow-Color";
import { ReadState } from "./ReadState";

function Home() {
  return (
    <Center>
      <HStack>
        <VStack>
          <Button as={Link} to="/home">
            Route 1
          </Button>
          <Button as={Link} to="/main">
            Route 2
          </Button>
        </VStack>
        <VStack>
          <GreenColor />
          <YellowColor />
          <RedColor />
        </VStack>
        <ReadState />
      </HStack>
    </Center>
  );
}

export { Home };
