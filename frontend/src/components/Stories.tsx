import React from 'react';
import { Box, Avatar } from '@mui/material';

const Stories: React.FC = () => {
  return (
    <Box display="flex" p={1} bgcolor="background.paper" borderRadius={2} mb={2} overflow="auto">
      {/* Dummy stories */}
      {Array.from(Array(8)).map((_, index) => (
        <Avatar key={index} sx={{ m: 1, width: 56, height: 56 }} />
      ))}
    </Box>
  );
}

export default Stories;
