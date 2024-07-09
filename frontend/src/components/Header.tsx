import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ padding: '0 16px' }}>
      <Toolbar>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          Instagram
        </Typography>
        <Box sx={{ position: 'relative', borderRadius: '4px', backgroundColor: 'white', padding: '0 8px', display: 'flex', alignItems: 'center' }}>
          <SearchIcon />
          <InputBase placeholder="Search…" sx={{ marginLeft: 1 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
