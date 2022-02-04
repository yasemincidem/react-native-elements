import { withTheme } from '../config';
import { Tile } from '@react-native-elements/base/dist/Tile/Tile';
import { FeaturedTile as BaseFeaturedTile } from '@react-native-elements/base/dist/Tile/components/FeaturedTile';
export const FeaturedTile = withTheme(BaseFeaturedTile, 'FeaturedTile');
export default withTheme(Tile, 'Tile');
