import React from 'react'
import "./Sidebar.css"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { IconButton, Avatar } from '@material-ui/core'


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
            <Avatar src="https://lh3.googleusercontent.com/ogw/ADea4I4KZ8G-6q3xwXAEy9V1SEbCpGZpQYxM3WS5uvi3=s32-c-mo" />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
