import { Box, Flex, IconButton, Image, Input, InputGroup, InputRightElement, Spacer } from "@chakra-ui/react";
import { FaSearch, FaMicrophone, FaBars, FaVideo, FaTh, FaBell } from "react-icons/fa";
import SpotifyLogo from "/images/spotify-logo.svg";
import InstagramLogo from "/images/instagram-logo.svg";

const Index = () => {
  return (
    <Box>
      <Flex as="nav" align="center" padding="1.5rem" boxShadow="md">
        <IconButton aria-label="Menu" icon={<FaBars />} variant="ghost" />
        <Image src="/images/youtube-logo.svg" alt="YouTube Logo" height="40px" marginLeft="1rem" />
        <Image src={SpotifyLogo} alt="Spotify Logo" height="40px" marginLeft="1rem" />
        <Image src={InstagramLogo} alt="Instagram Logo" height="40px" marginLeft="1rem" />
        <Spacer />
        <InputGroup maxW="600px" flex="1" marginRight="1rem">
          <Input placeholder="Search" />
          <InputRightElement>
            <IconButton aria-label="Search" icon={<FaSearch />} />
          </InputRightElement>
        </InputGroup>
        <IconButton aria-label="Microphone" icon={<FaMicrophone />} variant="ghost" marginRight="1rem" />
        <IconButton aria-label="Create" icon={<FaVideo />} variant="ghost" marginRight="1rem" />
        <IconButton aria-label="Apps" icon={<FaTh />} variant="ghost" marginRight="1rem" />
        <IconButton aria-label="Notifications" icon={<FaBell />} variant="ghost" marginRight="1rem" />
      </Flex>
    </Box>
  );
};

export default Index;