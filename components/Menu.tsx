import { Box, IconButton } from '@chakra-ui/react';

// SVG Icons
import HomeIcon from '../public/home.svg';
import MovieIcon from '../public/movie.svg';
import TVIcon from '../public/tv.svg';
import SearchIcon from '../public/search.svg';
import MenuItem from './MenuItem';

function Menu() {
  const handleSearchClick = () => {
    console.log('clicked');
  };
  return (
    <Box
      display="flex"
      flexDir="column"
      width="100px"
      min-w="100px"
      height="100vh"
      minH="100vh"
      bg="#000000"
      color="#ffffff"
      margin="0px"
      lineHeight="16px"
      borderRight="1px solid rgba(255,255,255,.25)"
      borderColor="#fffff"
    >
      <MenuItem ariaLabel="Home" href="/" icon={<HomeIcon />} />
      <MenuItem ariaLabel="Movies" href="/watch" icon={<MovieIcon />} />
      <MenuItem ariaLabel="TV Shows" href="/watch" icon={<TVIcon />} />
      <IconButton
        width="99px"
        aria-label="Search"
        h="100px"
        background="inherit"
        lineHeight="16px"
        stroke="#fffff"
        borderRadius="none"
        _focus={{
          outline: 'none',
        }}
        padding="0"
        margin="0"
        size="lg"
        _hover={{
          stroke: 'blue',
        }}
        _active={{
          outline: 'none',
        }}
        onClick={handleSearchClick}
        icon={<SearchIcon />}
      />
    </Box>
  );
}

export default Menu;
