import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import {
  FiberManualRecord,
  Create,
  InsertComment,
  Inbox,
  Drafts,
  PeopleAlt,
  BookmarkBorder,
  Apps,
  FileCopy,
  ExpandLess,
  ExpandMore,
  Add,
} from "@material-ui/icons";
import {} from "@material-ui/core";
import SidebarOption from "./SidebarOption";
import db from "./firebase";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [channel, setChannels] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>Genius</h2>
          <h3>
            <FiberManualRecord />
            {user?.displayName}
          </h3>
        </div>
        <Create />
      </div>
      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Mentions" />
      <SidebarOption Icon={Drafts} title="Saved Items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel Browser" />
      <SidebarOption Icon={PeopleAlt} title="People" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File Browser" />
      <SidebarOption Icon={ExpandLess} title="Show Less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOption Icon={Add} title="Add Channel" addChannelOption />
      {channel.map((channel) => (
        <SidebarOption title={channel.name} id={channel.id} key={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;
