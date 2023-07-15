import { Flex, Box, Spacer, Button } from '@chakra-ui/react'; 
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { Link, NavLink } from 'react-router-dom';
 
export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex alignItems="center">
      <Box> 
        <Flex as="nav">
      <Link as={NavLink} className="link" to="/">
        <Button type="submit">HOME</Button>
      </Link>
      {isLoggedIn && (
        <Link as={NavLink} className="link" to="/contacts" ml="16px">
          <Button type="submit">CONTACTS</Button>
        </Link>
      )}
    </Flex> 
      </Box>
      <Spacer />
      <Box>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
    </Flex>
  );
};