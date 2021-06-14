import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

function Layout(props) {
  return (
    <Auxiliary>
      <SideDrawer />
      <main className={classes.Content}>{props.children}</main>
    </Auxiliary>
  );
}

export default Layout;
