import React, {useState} from 'react';
import DrawerMain from '../Drawer/Drawer';
import {Appbar} from 'react-native-paper';
import {View} from 'react-native';

const HeaderMain = () => {
  const [selectedDrawer, setselectedDrawer] = useState(false);

  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const handleDrawer = () => {
    setselectedDrawer(!selectedDrawer);
  };

  // If logged in show drawer
  // If logged in show postal code

  return (
    <View>
      <Appbar.Header>
        {selectedDrawer ? (
          <Appbar.Action icon="window-close" onPress={handleDrawer} />
        ) : (
          <Appbar.Action icon="menu" onPress={handleDrawer} />
        )}
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content
          title="Postal Code"
          subtitle="Subtitle"
          style={{alignItems: 'center'}}
        />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
      </Appbar.Header>
      {selectedDrawer === true && <DrawerMain />}
    </View>
  );
};

export default HeaderMain;
