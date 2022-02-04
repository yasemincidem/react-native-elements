import { CardBaseProps } from './Card';
import { CardDividerProps } from './Card.Divider';
import { CardFeaturedSubtitleProps } from './Card.FeaturedSubtitle';
import { CardFeaturedTitleProps } from './Card.FeaturedTitle';
import { CardImageProps } from './Card.Image';
declare const Card: import("../helpers").RneFunctionComponent<CardBaseProps> & {
    Divider: import("../helpers").RneFunctionComponent<import("..").DividerProps>;
    Image: import("../helpers").RneFunctionComponent<import("..").ImageProps>;
    Title: import("../helpers").RneFunctionComponent<import("..").TextProps>;
    FeaturedTitle: import("../helpers").RneFunctionComponent<import("..").TextProps>;
    FeaturedSubtitle: import("../helpers").RneFunctionComponent<import("..").TextProps>;
};
export { Card };
export declare type CardProps = typeof Card;
export type { CardBaseProps, CardDividerProps, CardFeaturedSubtitleProps, CardFeaturedTitleProps, CardImageProps, };
