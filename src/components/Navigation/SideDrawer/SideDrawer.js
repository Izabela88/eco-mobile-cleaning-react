import React, { useState } from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Hamburger from '../Hamburger/Hamburger';
import { ProSidebar, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

function SideDrawer() {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(true);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <Auxiliary>
      <div onClick={menuIconClick}>
        <Hamburger />
      </div>
      <div className={classes.sidebar}>
        <ProSidebar collapsed={menuCollapse}>
          <SidebarContent>
            <nav>
              <NavigationItems />
            </nav>
          </SidebarContent>
        </ProSidebar>
      </div>
    </Auxiliary>
  );
}

export default SideDrawer;
