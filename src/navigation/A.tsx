import {createDrawerNavigator} from '@react-navigation/drawer';
import B from './B';
import C from './C';
import Home from '../screens/Home';

const Drawer = createDrawerNavigator();

export function A() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="B" component={B} />
    </Drawer.Navigator>
  );
}
