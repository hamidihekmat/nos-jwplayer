import { IconButton } from '@chakra-ui/react';

function MenuItem({ icon, ariaLabel, href }) {
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
      icon={icon}
    />
  );
}

export default MenuItem;
