import {Dimensions} from 'react-native';

/*
**In iOS:
screenHeight === Dimensions.get('window').height
**In Android:
screenHeight = Dimensions.get('window').height + StatusBar.currentHeight + bottomNavBarHeight
If Android devices without bottom navigator bar, bottomNavigatorBarHeight is zero.
*/

const {width, height} = Dimensions.get('window');

const Sizings = {
	deviceHeight: height,
	deviceWidth: width,
	percent_100: height * 1,
	percent_95: height * 0.95,
	percent_93: height * 0.93,
	percent_90: height * 0.90,
	percent_85: height * 0.85,
	percent_80: height * 0.80,
	percent_75: height * 0.75,
	percent_70: height * 0.70,
	percent_65: height * 0.65,
	percent_60: height * 0.60,
	percent_58: height * 0.58,
	percent_52: height * 0.52,
	percent_50: height * 0.50,
	percent_45: height * 0.45,
	percent_43: height * 0.43,
	percent_42: height * 0.42,
	percent_41: height * 0.41,
	percent_40: height * 0.40,
	percent_35: height * 0.35,
	percent_32: height * 0.32,
	percent_305: height * 0.305,
	percent_30: height * 0.30,
	percent_28: height * 0.28,
	percent_27: height * 0.27,
	percent_26: height * 0.26,
	percent_25: height * 0.25,
	percent_20: height * 0.20,
	percent_18: height * 0.18,
	percent_15: height * 0.15,
	percent_12: height * 0.12,
	percent_10: height * 0.10,
	percent_805: height * 0.085,
	percent_8: height * 0.08,
	percent_7: height * 0.07,
	percent_6: height * 0.06,
	percent_5: height * 0.05,
	percent_4: height * 0.04,
	percent_3: height * 0.03,
	percent_2: height * 0.02,
	percent_1: height * 0.01,
};

export default Sizings;
