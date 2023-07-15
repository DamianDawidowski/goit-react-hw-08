import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations'; 
import { Button, Text, Box } from '@chakra-ui/react';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box display="flex" alignItems="center">
      <Text as="b" mr="4">
        Welcome, {user.email}
      </Text>
      <Button
        onClick={() => dispatch(logOut())}
        colorScheme="blue"
        variant="solid"
      >
        Logout
      </Button>
    </Box>
  );
};