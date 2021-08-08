import React from 'react';
import {View} from 'react-native';

const BlankView = ({Width}: {Width: number}) => {
  return <View style={{marginTop: Width}}></View>;
};

export default BlankView;
