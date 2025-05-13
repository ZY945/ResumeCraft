import { useState, useEffect } from 'react';
import { Box, Textarea } from '@chakra-ui/react';

const Editor = ({ value, onChange, height }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <Box width="100%" height={height || "100%"}>
      <Textarea
        value={value}
        onChange={handleChange}
        placeholder="在这里输入Markdown内容..."
        size="md"
        height="100%"
        fontFamily="monospace"
        resize="none"
        borderRadius="md"
        p={4}
        sx={{
          '&:focus': {
            borderColor: 'blue.300',
            boxShadow: '0 0 0 1px blue.300',
          }
        }}
      />
    </Box>
  );
};

export default Editor;
