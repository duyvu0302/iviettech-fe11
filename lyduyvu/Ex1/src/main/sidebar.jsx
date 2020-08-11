import React from 'react';
import SidebarC from './sidebar_child';

import './style.css';
function sidebar() {
    
  return (
    <div className="sidebar">
    Sidebar
    <div>
      <SidebarC name="Quang Ngai"></SidebarC>
      <SidebarC name="Quang Nam"></SidebarC>
      <SidebarC name="Quang Ngai"></SidebarC>
    </div>
    </div>
  );
}

export default sidebar;