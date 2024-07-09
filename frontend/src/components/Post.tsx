import React from 'react';
import { Typography, Avatar, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton } from '@mui/material';
import { Favorite, Share } from '@mui/icons-material';

const Post: React.FC = () => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardHeader
        avatar={<Avatar />}
        title="Username"
        subheader="10 hours ago"
      />
      <CardMedia
        component="img"
        height="300"
        image="https://via.placeholder.com/600x300"
        alt="Post image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This is a post description.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Post;
