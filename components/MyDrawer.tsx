import React from 'react'
import Drawer from '@mui/material/Drawer'

type MyDrawerProp={
    open:boolean,
    closeEvent:()=>void,
    children:React.ReactNode,
}

const MyDrawer = ({open,closeEvent,children}:MyDrawerProp) => {
    return (
        <div>
            <Drawer
            anchor='right'
            open={open}
            onClose={closeEvent}
          >
                {children}
            </Drawer>
        </div>
    )
}

export default MyDrawer
