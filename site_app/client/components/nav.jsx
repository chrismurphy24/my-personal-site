import React from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';


export default function MainNavDrawer(props) {
    const [state, setState] = React.useState({
       is_open: false
    });

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, is_open: open });
    };

    return (
        <div>
            <React.Fragment>
              <Button id={'mainMenuButton'} onClick={toggleDrawer(true)}><MenuIcon /></Button>
              <SwipeableDrawer
                anchor={'right'}
                open={state['is_open']}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
              >
              <Link href="/" onClick={(event) => event.preventDefault()}>Home</Link>
              <Link href="/blog" onClick={(event) => event.preventDefault()}>Blog</Link>
              </SwipeableDrawer>
            </React.Fragment>
        </div>
  );

}
