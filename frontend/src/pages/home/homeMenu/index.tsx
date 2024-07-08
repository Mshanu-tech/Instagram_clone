import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Typography, Box } from '@mui/material';
import { 
  Home as HomeOutlined, 
  Search as SearchOutlined, 
  Explore as ExploreOutlined, 
  Send as SendOutlined, 
  Notifications as NotificationsOutlined, 
  Favorite as FavoriteOutlined, 
  AddCircleOutline as CreateOutlined, 
  AccountCircle as ProfileOutlined, 
  Menu as MoreOutlined 
} from '@mui/icons-material';

const Sidebar: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Box style={{ width: 240, backgroundColor: '#ffffff', height: '100vh', paddingTop: 20 }}>
      <Box style={{ textAlign: 'center', padding: 20 }}>
        <Typography variant="h6" style={{ fontFamily: 'Billabong', fontSize: '24px' }}>
          Instagram
        </Typography>
      </Box>
      <List>
        {[
          { text: 'Home', iconOutlined: <HomeOutlined /> },
          { text: 'Search', iconOutlined: <SearchOutlined /> },
          { text: 'Explore', iconOutlined: <ExploreOutlined /> },
          { text: 'Messages', iconOutlined: <SendOutlined /> },
          { text: 'Notifications', iconOutlined: <NotificationsOutlined /> },
          { text: 'Favorites', iconOutlined: <FavoriteOutlined /> },
          { text: 'Create', iconOutlined: <CreateOutlined /> },
          { text: 'Profile', iconOutlined: <ProfileOutlined /> },
          { text: 'More', iconOutlined: <MoreOutlined /> }
        ].map((item, index) => (
          <ListItem 
            button 
            key={item.text} 
            onClick={() => handleListItemClick(index)}
            style={{ color: selectedIndex === index ? 'black' : 'inherit' }}
          >
            <ListItemIcon style={{ color: selectedIndex === index ? 'black' : 'inherit' }}>
              {item.iconOutlined}
            </ListItemIcon>
            <ListItemText 
              primary={item.text} 
              primaryTypographyProps={{ style: { fontWeight: selectedIndex === index ? 'bold' : 'normal' } }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
