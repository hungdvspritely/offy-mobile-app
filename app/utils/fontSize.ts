import {PixelRatio, Dimensions} from 'react-native';

const FontSize = {
	fs_8: 8,
	fs_9: 9,
	fs_10: 10,
	fs_11: 11,
	fs_12: 12,
	fs_13: 13,
	fs_14: 14,
	fs_15: 15,
	fs_16: 16,
	fs_17: 17,
	fs_18: 18,
	fs_19: 19,
	fs_20: 20,
	fs_22: 22,
	fs_25: 25,
};

export default FontSize;

const {width, height} = Dimensions.get('window');
const realWidth = height > width ? width : height;
const realHeight = width > height ? width : height;

const isTablet = () => {
	let pixelDensity = PixelRatio.get();
	let adjustedWidth = width * pixelDensity;
	let adjustedHeight = height * pixelDensity;
	if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
		return true;
	} else {
		return (
			pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)
		);
	}
};

const responsiveFontSize = (fontSize) => {
	let divider = isTablet() ? 600 : 375;
	return Math.round((fontSize * realWidth) / divider);
};

const percentHeight = (per) => {
	const currentPer = per / 100;
	return currentPer * realHeight;
};

export const FontWeights = {
	Bold: {
		fontFamily: 'SFProDisplay-Bold',
		color: '#000',
	},
	Regular: {
		fontFamily: 'SFProDisplay-Regular',
		color: '#000',
	},
	Light: {
		fontFamily: 'SFProDisplay-Light',
		color: '#000',
	},
};

export const Sizes = {
	size_1: responsiveFontSize(1),
	size_2: responsiveFontSize(2),
	size_3: responsiveFontSize(3),
	size_4: responsiveFontSize(4),
	size_5: responsiveFontSize(5),
	size_6: responsiveFontSize(6),
	size_7: responsiveFontSize(7),
	size_8: responsiveFontSize(8),
	size_9: responsiveFontSize(9),
	size_10: responsiveFontSize(10),
	size_11: responsiveFontSize(11),
	size_12: responsiveFontSize(12),
	size_13: responsiveFontSize(13),
	size_14: responsiveFontSize(14),
	size_15: responsiveFontSize(15),
	size_16: responsiveFontSize(16),
	size_17: responsiveFontSize(17),
	size_18: responsiveFontSize(18),
	size_19: responsiveFontSize(19),
	size_20: responsiveFontSize(20),
	size_21: responsiveFontSize(21),
	size_22: responsiveFontSize(22),
	size_23: responsiveFontSize(23),
	size_24: responsiveFontSize(24),
	size_25: responsiveFontSize(25),
	size_26: responsiveFontSize(26),
	size_27: responsiveFontSize(27),
	size_28: responsiveFontSize(28),
	size_29: responsiveFontSize(29),
	size_30: responsiveFontSize(30),
	size_31: responsiveFontSize(31),
	size_32: responsiveFontSize(32),
	size_33: responsiveFontSize(33),
	size_34: responsiveFontSize(34),
	size_35: responsiveFontSize(35),
	size_36: responsiveFontSize(36),
	size_37: responsiveFontSize(37),
	size_38: responsiveFontSize(38),
	size_39: responsiveFontSize(39),
	size_40: responsiveFontSize(40),
	size_45: responsiveFontSize(45),
	size_50: responsiveFontSize(50),
	size_55: responsiveFontSize(55),
	size_60: responsiveFontSize(60),
	size_70: responsiveFontSize(70),
	size_80: responsiveFontSize(80),
	size_90: responsiveFontSize(90),
	size_100: responsiveFontSize(100),
	height_1: percentHeight(1),
	height_2: percentHeight(2),
	height_3: percentHeight(3),
	height_4: percentHeight(4),
	height_5: percentHeight(5),
	height_6: percentHeight(6),
	height_7: percentHeight(7),
	height_8: percentHeight(8),
	height_9: percentHeight(9),
	height_10: percentHeight(10),
	height_11: percentHeight(11),
	height_12: percentHeight(12),
	height_13: percentHeight(13),
	height_14: percentHeight(14),
	height_15: percentHeight(15),
	height_16: percentHeight(16),
	height_17: percentHeight(17),
	height_18: percentHeight(18),
	height_19: percentHeight(19),
	height_20: percentHeight(20),
	height_21: percentHeight(21),
	height_22: percentHeight(22),
	height_23: percentHeight(23),
	height_24: percentHeight(24),
	height_25: percentHeight(25),
	height_26: percentHeight(26),
	height_27: percentHeight(27),
	height_28: percentHeight(28),
	height_29: percentHeight(29),
	height_30: percentHeight(30),
	height_31: percentHeight(31),
	height_32: percentHeight(32),
	height_33: percentHeight(33),
	height_34: percentHeight(34),
	height_35: percentHeight(35),
	height_36: percentHeight(36),
	height_37: percentHeight(37),
	height_38: percentHeight(38),
	height_39: percentHeight(39),
	height_40: percentHeight(40),
	height_45: percentHeight(45),
	height_50: percentHeight(50),
	height_55: percentHeight(55),
	height_60: percentHeight(60),
	height_70: percentHeight(70),
	height_80: percentHeight(80),
	height_90: percentHeight(90),
	height_100: percentHeight(100),
};
