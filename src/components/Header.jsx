import { Box, Flex, Heading, Button, useColorMode } from '@chakra-ui/react';

const Header = ({ onExportPdf }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex 
      as="header" 
      width="100%" 
      padding={4} 
      alignItems="center" 
      justifyContent="space-between"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      marginBottom={4}
    >
      <Heading as="h1" size="lg">Markdown编辑器</Heading>
      <Flex gap={4}>
        <Button 
          onClick={toggleColorMode} 
          size="sm"
        >
          {colorMode === 'light' ? '暗色模式' : '亮色模式'}
        </Button>
        <Button 
          onClick={onExportPdf} 
          colorScheme="blue" 
          size="sm"
        >
          导出PDF
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
