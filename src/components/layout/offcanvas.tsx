import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { Divider } from '@mui/material';

import { NavLink } from 'react-router-dom';
import { IoMdMenu, IoIosClose } from "react-icons/io";
import s from './offcanvas.module.css'


export default function Offcanvas2() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation">
            <List>
                <button onClick={toggleDrawer(false)}>
                    <IoIosClose />
                </button>

                <Divider />

                <NavLink to='/hospedagem' >
                    Hospedagem</NavLink>

                <Divider />

                <NavLink to='/passeios'>
                    Passeios</NavLink>

                <Divider />

                <NavLink reloadDocument to='/preços' >
                    Preços</NavLink>

                <Divider />

                <NavLink to='/resort' >
                    Resort</NavLink>

                <Divider />

                <NavLink to='/informações'>
                    Informações</NavLink>
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}><IoMdMenu className={s.IconCanvas} /></Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}