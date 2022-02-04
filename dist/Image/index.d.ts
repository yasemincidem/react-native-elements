import { Image as ImageNative } from 'react-native';
import { ImageProps } from './Image';
declare const DefaultImage: import("../helpers").RneFunctionComponent<ImageProps> & {
    getSize: typeof ImageNative.getSize;
    getSizeWithHeaders: typeof ImageNative.getSizeWithHeaders;
    prefetch: typeof ImageNative.prefetch;
    abortPrefetch: typeof ImageNative.abortPrefetch;
    queryCache: typeof ImageNative.queryCache;
    resolveAssetSource: typeof ImageNative.resolveAssetSource;
};
export { DefaultImage as Image };
export type { ImageProps };
