import { StyleSheet } from 'react-native';
import { FullTheme } from './theme';
export declare const useTheme: () => import("./ThemeProvider").ThemeProps<{}>;
export declare const makeStyles: <T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>, V>(styles: T | ((theme: Partial<FullTheme>, props: V) => T)) => (props?: V) => T;
