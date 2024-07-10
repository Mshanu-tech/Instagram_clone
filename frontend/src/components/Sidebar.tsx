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
    <Box style={{ display: 'flex', height: '100vh' }}>
      <Box style={{ width: 215, backgroundColor: '#ffffff', paddingTop: 20 }}>
        <Box style={{  padding: 20 }}>
          <Typography style={{ fontFamily: 'Billabong', fontSize: '24px' }}>
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
      <Box style={{ width: 1, backgroundColor: '#e0e0e0' }} />
    </Box>
  );
};

export default Sidebar;
