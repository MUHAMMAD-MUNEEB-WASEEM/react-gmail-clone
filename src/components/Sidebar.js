import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import AddIcon from '@material-ui/icons/Add'
import InboxIcon from '@material-ui/icons/Inbox'
import StarIcon from '@material-ui/icons/Star'
import SidebarOption from './SidebarOption'
import { ExpandMore, LabelImportant, Note, AccessTime, NearMe, Person, Duo, Phone } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import {openSendMessage} from '../features/mailSlice'



function Sidebar() {
    const dispatch = useDispatch()
    return (
        <div className="sidebar">
        
            <Button className="sidebar__compose"
              startIcon={<AddIcon fontSize='large'/>}
              onClick={()=> dispatch(openSendMessage())}>Compose</Button>
        
            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
            <SidebarOption Icon={StarIcon} title="Starred" number={5}/>
            <SidebarOption Icon={AccessTime} title="Snoozed" number={0}/>
            <SidebarOption Icon={LabelImportant} title="Important" number={4}/>
            <SidebarOption Icon={NearMe} title="Sent" number={26}/>
            <SidebarOption Icon={Note} title="Drafts" number={7}/>
            <SidebarOption Icon={ExpandMore} title="More" number={10}/>

            <div className="sidebar__footer">
                
                <div className="sidebar__footerIcons">
                    <IconButton><Person/></IconButton>
                    <IconButton><Duo/></IconButton>
                    <IconButton><Phone/></IconButton>
                
                </div>
            </div>
        
        
        </div>
    )
}

export default Sidebar
