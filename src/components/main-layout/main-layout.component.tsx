import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
import logoTPWhite from '../../assets/logoTPWhite.png'
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SectionIdEnum } from '../../types';
import { Navigation } from './navigation/navigation.component';

export type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box height="130vh">
      <AppBar position="fixed" sx={{ background: 'black' }}>
        <Toolbar>
          <Box flexGrow={1}>
            <AnchorLink href={`#${SectionIdEnum.intro}`} offset={isSmall ? '56px' : '64px'} style={{ textDecoration: 'none'}}>
              <Box display="flex" alignItems="center" gap={0.5} sx={{ cursor: 'pointer',textDecoration: 'none' }}>
                <img width="60px" height="60px" src={logoTPWhite} alt="logo" />
                <Typography variant="h5" sx={{ width: 'fit-content', color: 'white', textDecoration: 'none', textDecorationColor: 'white' }}>Annish Digital ArtHouse</Typography>
                <HouseIcon fontSize="medium" sx={{ color: 'white' }} />
              </Box>
            </AnchorLink>
          </Box>
          <Navigation isSmall={isSmall} />
        </Toolbar>
      </AppBar>
      <Box>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};