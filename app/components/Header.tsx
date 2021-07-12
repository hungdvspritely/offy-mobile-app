import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
import {goback} from '../navigation/navigationService';
import { Sizes, Colors , Images } from '@app/utils';

interface HProps {
	title: String,
	isBackButton: Boolean;
}

export default function Header({title = '', isBackButton = true }: HProps) {
	return (
		<View style={styles.headerWithTitleContainer}>
			{isBackButton && <TouchableOpacity onPress={goback} style={styles.backButton}>
				<Image source={Images.bgLoginImage} style={styles.imgBackIcon} />
			</TouchableOpacity>}
			{title.length > 0 && <Text style={styles.textHeader}>{title}</Text>}
		</View>
	);
}

const styles = StyleSheet.create({
	headerContainer: {
		marginTop: 30,
		paddingHorizontal: 25,
	},
	imgBackIcon: {
		width: 25,
		height: 25,
		resizeMode: 'contain',
	},
	headerWithTitleContainer: {
		height: Sizes.size_60,
		paddingHorizontal: Sizes.size_50,
		alignItems: 'center',
		backgroundColor: Colors.WHITE,
		flexDirection: 'row',
		justifyContent: 'center'
	},
	backButton: {
		position: 'absolute',
		zIndex: 1,
		left: 0,
		width: Sizes.size_50,
		paddingLeft: Sizes.size_20,
		paddingVertical: Sizes.size_15,
	},
	textHeader: {
		fontSize: Sizes.size_17,
		color: Colors.BLACK,
	},
});
