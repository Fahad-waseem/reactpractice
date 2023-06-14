import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import { Button, InputBase, Tab, Tabs, Toolbar, Typography, alpha, useMediaQuery, useTheme, SearchIconWrapper, Autocomplete, TextField } from '@mui/material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import DrawerComponent from './DrawerComponent';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';
import { Search } from '@mui/icons-material';

export default function TopBar() {
    const [value, setValue] = useState();
    const theme = useTheme();
    // console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    // console.log(isMatch, "match");



    // const SearchIconWrapper = styled('div')(({ theme }) => ({
    //     padding: theme.spacing(0, 2),
    //     height: '100%',
    //     position: 'absolute',
    //     pointerEvents: 'none',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // }));
    // const StyledInputBase = styled(InputBase)(({ theme }) => ({
    //     color: 'inherit',
    //     '& .MuiInputBase-input': {
    //         padding: theme.spacing(1, 1, 1, 0),
    //         // vertical padding + font size from searchIcon
    //         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    //         transition: theme.transitions.create('width'),
    //         width: '100%',
    //         [theme.breakpoints.up('sm')]: {
    //             width: '12ch',
    //             '&:focus': {
    //                 width: '20ch',
    //             },
    //         },
    //     },
    // }));
    return (
        <React.Fragment>
            <AppBar sx={{ background: "#063970" }}>
                <Toolbar>
                    {/* <Typography> Shoppe </Typography> */}
                    <LocalGroceryStoreIcon />
                    {
                        isMatch ? (
                            <>
                                <DrawerComponent />
                            </>
                        ) : (
                            <>
                                <Tabs textColor='inherit' value={value} onChange={(e, value) => setValue(value)} TabIndicatorProps={{ style: { background: 'blue' } }}>
                                    <Tab label='product' />

                                    <Tab label='product' />
                                    <Tab label='product' />
                                    <Tab label='product' />
                                    <Tab label='product' />
                                </Tabs>
                                {/* <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search…"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search> */}
                                {/* <TextField
                                    label="Enter your name"

                                /> */}
                                <Button sx={{ marginLeft: "auto" }} variant='contained'>Login</Button>
                                <Button sx={{ marginLeft: "10px" }} variant='contained'> SignUp</Button>
                            </>
                        )
                    }

                </Toolbar>

            </AppBar>
        </React.Fragment>
    )
}
