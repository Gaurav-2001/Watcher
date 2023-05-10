import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
const logo = require('../assets/watcher-logo.png') as string;

/*
This is the main nav bar that sits on the left of the screen and allows users
to toggle between different views of their Kubernetes Metrics (Nodes, Pod, Cluster), Structure, and Alerts.
*/

const drawerWidth = 240;

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

const Sidebar = (): JSX.Element => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}
      <AppBar
        position='fixed'
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar style={{ justifyContent: 'center' }}>
          <h3>Monitor. Optimize. Succeed.</h3>

        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='permanent'
        anchor='left'
      >
        <Toolbar />
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <img src={String(logo)} style={{ width: '70%' }} />
        </Box>
        <Box sx={{ width: '100%', textAlign: 'center', mt: 2 }}>
          <h1 style={{ fontSize: '24p' }}>Watcher</h1>
        </Box>

        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='/'>
              <ListItemText primary='Structure' />
            </ListItemButton>
          </ListItem>
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1bh-content'
              id='panel1bh-header'
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Metrics
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem disablePadding>
                  <ListItemButton component='a' href='/cluster'>
                    <ListItemText primary='Clusters' />
                  </ListItemButton>
                </ListItem>
                <ListItemButton component='a' href='/namespace'>
                  <ListItemText primary='Namespace' />
                </ListItemButton>
              </List>
            </AccordionDetails>
          </Accordion>
          <ListItem disablePadding>
            <ListItemButton component='a' href='/alerts'>
              <ListItemText primary='Alerts' />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer >
      <Box
        component='main'
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      ></Box>
    </Box >
  );
};
export default Sidebar;
