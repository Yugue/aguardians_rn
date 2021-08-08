import React, { useState } from 'react';
import { Drawer } from 'react-native-paper';

const DrawerMain = () => {
  const [active, setActive] = useState('Home');

  return (
    <Drawer.Section title="My Account" style={{
        width: '60%', height: '100%', flex: 0
        }}>
      <Drawer.Item
        label="Home"
        active={active === 'Home'}
        onPress={() => setActive('Home')}
      />
      <Drawer.Item
        label="Profile"
        active={active === 'Profile'}
        onPress={() => setActive('Profile')}
      />
      <Drawer.Item
        label="Scheduled"
        active={active === 'Scheduled'}
        onPress={() => setActive('Scheduled')}
      />
      <Drawer.Item
        label="History"
        active={active === 'History'}
        onPress={() => setActive('History')}
      />
      <Drawer.Item
        label="Favorite"
        active={active === 'Favorite'}
        onPress={() => setActive('Favorite')}
      />
      <Drawer.Item
        label="Messages"
        active={active === 'Messages'}
        onPress={() => setActive('Messages')}
      />
      <Drawer.Item
        label="About"
        active={active === 'About'}
        onPress={() => setActive('About')}
      />
    </Drawer.Section>
  );
};

export default DrawerMain;