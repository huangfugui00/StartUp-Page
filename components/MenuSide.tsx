import React,{useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import MyDrawer from './MyDrawer'
import IconButton from '@mui/material/IconButton';
import {navType} from '../utils/type'
import Sider from './Sider'

type MenuSideProp={
    navList:navType[]
}

const MenuSide = ({navList}:MenuSideProp) => {
    const [open,setOpen] = useState(false)

    return (
        <div>
            <IconButton onClick={()=>setOpen(true)}>
                <MenuIcon/> 
            </IconButton> 
            <MyDrawer open={open} closeEvent={()=>setOpen(false)}>
                <div className='p-4'>
                <Sider navList={navList}/>
                </div>
            </MyDrawer>
        </div>
    )
}

export default MenuSide
