import { Box, Flex, IconButton, Image, Input, InputGroup, InputRightElement, Spacer, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { FaSearch, FaMicrophone, FaBars, FaVideo, FaTh, FaBell } from "react-icons/fa";
import SpotifyLogo from "/images/spotify-logo.svg";
import InstagramLogo from "/images/instagram-logo.svg";

const videoExamples = [
  {
    title: "How to Cook the Perfect Steak",
    thumbnail: "/images/steak-thumbnail.jpg",
  },
  {
    title: "10 Minute Yoga Routine for Beginners",
    thumbnail: "/images/yoga-thumbnail.jpg",
  },
  {
    title: "Top 10 JavaScript Tips and Tricks",
    thumbnail: "/images/javascript-thumbnail.jpg",
  },
];

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
      <Box padding="1.5rem">
        <Heading as="h2" size="xl" marginBottom="1.5rem">Video Examples</Heading>
        <SimpleGrid columns={[1, null, 3]} spacing="1.5rem">
          {videoExamples.map((video, index) => (
            <Box key={index} boxShadow="md" borderRadius="md" overflow="hidden">
              <Image src={video.thumbnail} alt={video.title} />
              <Box padding="1rem">
                <Text fontWeight="bold">{video.title}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Index;