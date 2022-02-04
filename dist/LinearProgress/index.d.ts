/// <reference types="react" />
import { LinearProgress, LinearProgressProps } from '@react-native-elements/base/dist/LinearProgress/LinearProgress';
export { LinearProgress };
export type { LinearProgressProps };
declare const _default: (import("react").FunctionComponent<LinearProgressProps> | import("react").ForwardRefExoticComponent<LinearProgressProps>) & {
    INDETERMINATE: "indeterminate" | "determinate";
    DETERMINATE: "indeterminate" | "determinate";
};
/**
 * ### Linear Progress
 *
 * Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates. They communicate an app’s state and indicate available actions, such as whether users can navigate away from the current screen.
 *
 * Usage ```<LinearProgress variant={LinearProgress.INDETERMINATE}  />```
 *
 * [API Documentation](https://reactnativeelements.com/docs/linearProgress)
 */
export default _default;
