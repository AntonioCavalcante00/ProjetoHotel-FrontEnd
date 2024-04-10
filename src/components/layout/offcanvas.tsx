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
                <button className={s.ButtonCanvas} onClick={toggleDrawer(false)}>
                    <IoIosClose className={s.IconCloseCanvas} />
                </button>


                <NavLink to='/hospedagem' className={s.NavCanvas}>
                    Hospedagem</NavLink>

                <Divider />

                <NavLink to='/passeios' className={s.NavCanvas}>
                    Passeios</NavLink>

                <Divider />

                <NavLink reloadDocument to='/preços' className={s.NavCanvas}>
                    Preços</NavLink>

                <Divider />

                <NavLink to='/resort' className={s.NavCanvas}>
                    Resort</NavLink>

                <Divider />

                <NavLink to='/informações' className={s.NavCanvas}>
                    Informações</NavLink>
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}><IoMdMenu className={s.IconOpenCanvas} /></Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}