import React from 'react'
import { Box } from '@mui/system';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InputIcon from '@mui/icons-material/Input';
import InfoIcon from '@mui/icons-material/Info';

export const Nav = () => {

    return (
        <>
            <Box sx={{ pb: 7 }}>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNavigation>
                        <Link to="/"><BottomNavigationAction icon={<HomeIcon />} /></Link>
                        <Link to="/about"><BottomNavigationAction icon={<InfoIcon />} /></Link>
                        <Link to="/login"><BottomNavigationAction icon={<InputIcon />} /></Link>
                    </BottomNavigation>
                </Paper>
            </Box>
        </>
    )
}
