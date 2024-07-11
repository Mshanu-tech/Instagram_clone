import React, { useEffect, useState } from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import { stories } from '../api/Homepage';


const Stories: React.FC = () => {
  const [story , setStory] = useState([...stories])

  return (
    <Box display="flex" p={1} bgcolor="background.paper" borderRadius={2} mb={2} overflow="hidden">
      {story ?.map((story, index) => (
        <Box key={index} display="flex" flexDirection="column" alignItems="center" mx={1} >
          <Avatar src={story.image} sx={{ width: 56, height: 56 }} />
          <Typography variant="caption">{story.name}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default Stories;
