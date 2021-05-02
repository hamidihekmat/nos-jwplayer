import { IconButton } from '@chakra-ui/react';
import { useRouter } from 'next/router';

function MenuItem({ icon, ariaLabel, href }) {
  const router = useRouter();
  return (
    <IconButton
      width="99px"
      as="a"
      h="100px"
      aria-label={ariaLabel}
      background="inherit"
      lineHeight="16px"
      stroke="#fffff"
      borderRadius="none"
      href={href}
      _focus={{
        outline: 'none',
      }}
      padding="0"
      margin="0"
      size="lg"
      _hover={{}}
      _active={{
        outline: 'none',
      }}
      sx={{
        svg: {
          stroke: router.asPath === href ? '#2196f3' : '#ffffff',
          transition: 'all 0.2s ease-in',
        },
        'svg:hover': { opacity: 0.8 },
      }}
      icon={icon}
    />
  );
}

export default MenuItem;
