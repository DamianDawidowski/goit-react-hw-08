import introduce from '../images/introduce.svg';
import {Navigation } from './Navigation/Navigation';
import theme from './Theme';

const { ChakraProvider, Image } = require("@chakra-ui/react");
const { Suspense } = require("react");
const { Outlet } = require("react-router-dom");

export const Layout = () => {
    return (
<ChakraProvider theme={theme}>
      <div position="relative">
        <div
          style={{
            maxWidth: 1800,
            margin: '0 auto',
            padding: '50px 50px',
          }}
        >
          <Navigation />
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
        <Image
          position="fixed"
          bottom="0"
          height="250"
          src={introduce}
          zIndex="-2"
        />
      </div>
    </ChakraProvider>
  );
};