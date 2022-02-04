import React from 'react';
import { Colors } from './colors';
import { Theme, RecursivePartial } from './theme';
export type { RecursivePartial };
export declare type ThemeOptions = Theme<{
    darkColors?: RecursivePartial<Colors>;
}>;
export declare type UpdateTheme = (myNewTheme: ThemeOptions | ((myTheme: Theme) => ThemeOptions)) => void;
export declare type ReplaceTheme = (updates: ThemeOptions | ((myTheme: Theme) => ThemeOptions)) => void;
export declare type ThemeProps<T = {}> = {
    theme: Theme<T>;
    updateTheme: UpdateTheme;
    replaceTheme: ReplaceTheme;
};
export declare const ThemeContext: React.Context<ThemeProps>;
export declare const createTheme: (theme: ThemeOptions) => ThemeOptions;
/**
 * <ThemeProvider theme={myTheme}>
 *   <MyComponent />
 * </ThemeProvider>
 */
export declare const ThemeProvider: React.FC<{
    theme?: ThemeOptions;
}>;
export declare const ThemeConsumer: React.Consumer<ThemeProps<{}>>;
