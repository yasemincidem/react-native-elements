import { withTheme } from '../config';
import { TabViewBase, } from '@react-native-elements/base/dist/TabView/TabView';
import { TabViewItem, } from '@react-native-elements/base/dist/TabView/TabView.Item';
export default Object.assign(withTheme(TabViewBase, 'TabView'), {
    Item: withTheme(TabViewItem, 'TabViewItem'),
});
