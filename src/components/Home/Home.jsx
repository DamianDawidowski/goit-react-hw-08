import { NavLink } from 'react-router-dom';
import { Box, Heading, Text, Button, Image } from '@chakra-ui/react';

import welcome from '../../images/introduce.svg';

export default function Home() {
  return (
    <Box position="relative">
      <Image
        alt="Welcome image for PHONEBOOK"
        zIndex="-1"
        position="absolute"
        right="-40"
        height="850"
        src={welcome}
      />
      <Box>
        <Box color="brand.creme" mt="100">
          <Heading fontSize="80" fontWeight="700" lineHeight="90%" mb="10">
            WELCOME TO <br></br> PHONEBOOK
          </Heading>
          <Text
            color="brand.main"
            fontSize="25"
            fontWeight="500"
            maxW="3xl"
            mb="8"
          > 
            Please use the PHONEBOOK app to create and manage your list of professional and personal contacts.
          </Text>
          <NavLink to="/register">
            <Button
              color="brand.main"
              variant="solid"
              colorScheme="yellow"
              p="10"
              borderRadius="50"
            >
              Let's begin!
            </Button>
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
}