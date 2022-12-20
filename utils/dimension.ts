import {
  heightPercentageToDP as hp2dp,
  widthPercentageToDP as wp2dp,
} from "react-native-responsive-screen";

/**
 * Width-Percentage
 * Converts width dimension to percentage
 * 360, 760 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
export const wp = (dimension: number) => {
  return wp2dp((dimension / 360) * 100 + "%");
};

/**
 * Height-Percentage
 * Converts width dimension to percentage
 * * 360, 760 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
export const hp = (dimension: number) => {
  return hp2dp((dimension / 760) * 100 + "%");
};

/**
 * Font-Percentage
 * Converts width dimension to percentage
 * * 360, 760 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
export const fp = (dimension: number) => {
  return hp2dp((dimension / 760) * 100 + "%");
};
