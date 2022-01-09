import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

type Menu_side_prop={
    navList:{
        name:string,
        link:string,
    }[]
}
const Menu_side = ({navList}:Menu_side_prop) => {
    return (
        <div>
            <MenuIcon/>
        </div>
    )
}

export default Menu_side
