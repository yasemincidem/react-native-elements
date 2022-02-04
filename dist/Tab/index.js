import { withTheme } from '../config';
import { TabBase, } from '@react-native-elements/base/dist/Tab/Tab';
import { TabItem, } from '@react-native-elements/base/dist/Tab/Tab.Item';
export const ThemedTab = Object.assign(withTheme(TabBase, 'Tab'), {
    Item: withTheme(TabItem, 'TabItem'),
});
export default ThemedTab;
