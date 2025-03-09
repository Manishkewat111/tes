import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';




const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Open the menu on desktop
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close the menu on desktop
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Toggle drawer on mobile
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

 

  

  

  const menuItems = ['Home', 'About', 'Services', 'Contact'];
  return (
    <div>
             
      <AppBar position="static">
        <Toolbar>
          <Typography  sx={{ flexGrow: 1 }}>
            Landing Page
          </Typography>
          <IconButton color="inherit" onClick={toggleDrawer(true)} sx={{ display: { xs: 'block', md: 'none' } }}>
            <MenuIcon />
          </IconButton>

          {/* Desktop menu */}
          <div sx={{ display: { xs: 'none', md: 'flex' } }}>
            {menuItems.map((item, index) => (
              <IconButton key={index} color="inherit" onClick={handleMenuOpen}>
                <Typography variant="body1">{item}</Typography>
              </IconButton>
              
              
            ))}
           
          
          </div>
          
          {/* Desktop menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {menuItems.map((item, index) => (
              <MenuItem key={index} onClick={handleMenuClose}>{item}</MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="Close" />
            <IconButton onClick={toggleDrawer(false)} color="inherit">
              <CloseIcon />
            </IconButton>
          </ListItem>
          <Divider />
          {menuItems.map((item, index) => (
            <ListItem button key={index} onClick={toggleDrawer(false)}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  )
}

export default Header