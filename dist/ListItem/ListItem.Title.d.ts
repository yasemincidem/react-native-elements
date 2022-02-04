import { TextProps } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type ListItemTitleProps = TextProps & {
    /**Add right title. */
    right?: boolean;
};
/** This allows adding Title to the ListItem.
 * This, Receives all [Text](text#props) props. */
export declare const ListItemTitle: RneFunctionComponent<ListItemTitleProps>;
