import React from 'react';
import "./sidebar.css";
import "./sidebar.css";
import { Users } from "../../dummyData";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import CloseFriends from '../closeFriends/CloseFriends';


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
       <ul className="sidebarList">
         <li className="sidebarListItem">
            <RssFeed/>
            <span className="sidebareListItemText">Feed</span>
         </li>
         <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="side  barListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton"> Show more</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
          {Users.map((u) => (
          <CloseFriends key={u.id} user={u}/>
          ))}
                 </ul>
      </div>
    </div>
  )
}
