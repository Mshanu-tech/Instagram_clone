import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';

const Suggestions: React.FC = () => {
  return (
    <Box p={2} bgcolor="background.paper" borderRadius={2}>
      <Typography variant="h6" mb={2}>Suggested for you</Typography>
      {/* Dummy suggestions */}
      {Array.from(Array(5)).map((_, index) => (
        <Box display="flex" alignItems="center" mt={2} key={index}>
          <Avatar />
          <Box ml={2}>
            <Typography variant="body1">Username {index + 1}</Typography>
            <Typography variant="body2" color="text.secondary">Follow</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Suggestions;
