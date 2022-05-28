import axios from 'axios';
import Head from 'next/head';
import Cookies from 'js-cookie';
import { useState } from 'react';
import NextLink from 'next/link';
import { useEffect } from 'react';
import { Store } from '../utils/Store';
import useStyles from '../utils/styles';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import React, { useContext } from 'react';
import { getError } from '../utils/error';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import SearchIcon from '@material-ui/icons/Search';
import { AppBar, Toolbar, Typography, Container, Link, createMuiTheme, ThemeProvider, CssBaseline, Switch, Badge, Button, Menu, MenuItem, Box, IconButton, Drawer, List, ListItem, Divider, ListItemText, InputBase, from } from '@material-ui/core';

function Layout({ title, description, children }) {
	const classes = useStyles();
    const { state, dispatch } = useContext(Store);
    const { darkMode } = state;
    const theme = createMuiTheme({
        typography: {
            h1: {
                fontSize: '1.6rem',
                fontWeight: 400,
                margin: '1rem 0',
            },
            h2: {
                fontSize: '1.4rem',
                fontWeight: 400,
                margin: '1rem 0',
            },
        },
        palette: {
            type: darkMode ? 'dark' : 'light',
            primary: {
                main: '#f0c000',
            },
            secondary: {
                main: '#208080',
            },
        },
    });

    const darkModeChangeHandler = () => {
        dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
        const newDarkMode = !darkMode;
        Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
    };
	
	return (
		<div>
			<Head>
                <title>{title ? `${title} - Ubwonko` : 'Ubwonko'}</title>
                {description && <meta name="description" content={description}></meta>}
            </Head>

            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position="static" className={classes.navbar}>
                	<Toolbar>
                        {/*<Box display="flex" alignItems="center">*/}
                            {/*<IconButton edge="start" aria-label="open drawer" className={classes.menuButton} >
                                <MenuIcon className={classes.navbarButton} />
                            </IconButton>*/}
                            <NextLink href="/" passHref>
                                <Link>
                                    <Typography className={classes.brand}>UBWONKO</Typography>
                                </Link>
                            </NextLink>
                            <div className={classes.grow}></div>
                            <div>
                            <Switch checked={darkMode} onChange={darkModeChangeHandler} />
                                <NextLink href='/cart' passHref>
                                    <Link>Cart</Link>
                                </NextLink>
                                <NextLink href='/login' passHref>
                                    <Link>Login</Link>
                                </NextLink>
                            </div>
                        {/*</Box>*/}
                	</Toolbar>
                </AppBar>
                <Container className={classes.main}>
                	{ children }
                </Container>
                <footer className={classes.footer}>
                	<Typography>
                		All right reserved. Ubwonko 2022
                	</Typography>
                </footer>
            </ThemeProvider>
		</div>
	)
}

export default Layout