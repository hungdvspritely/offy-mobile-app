import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
	Image,
	TextInput
} from 'react-native';
import { Sizes, Sizings, Colors , Images } from '@app/utils';

interface IProps {

}

const HomeComponent = () => {

	const renderCurrentTextStyle = () => {
		return {
			
		}
	}

	return (
		<View style={styles.container}>
			<SafeAreaView style={styles.container}>
				<View style={styles.headerContainer}>
					<TouchableOpacity style={styles.headerButton}>
						<Image source={Images.defaultImage} style={styles.avatar} />
					</TouchableOpacity>
					<TouchableOpacity style={styles.headerButton}>
						<Image source={Images.cartIcon} style={styles.cartIcon} />
					</TouchableOpacity>
				</View>

				<View style={styles.bodyContainer}>
					<View style={styles.inputSearchContainer}>
						<Image source={Images.searchIcon} style={styles.searchIcon} />
						<TextInput style={styles.inputSearch} placeholder={'Search Plant'} />
					</View>
					
					<View style={styles.listContainer}>
						<View style={styles.tabBav}>
							<View style={[styles.viewTabBav, renderCurrentTextStyle()]}><Text style={styles.textTabBav}>Outdoor</Text></View>
							<View style={[styles.viewTabBav, renderCurrentTextStyle()]}><Text style={styles.textTabBav}>Indoor</Text></View>
							<View style={[styles.viewTabBav, renderCurrentTextStyle()]}><Text style={styles.textTabBav}>Top</Text></View>
						</View>

						<View style={styles.listCategories}>
							<Text>List</Text>
						</View>
					</View>
				</View>
			</SafeAreaView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.WHITE
	},
	imgBackIcon: {
		width: 25,
		height: 25,
		resizeMode: 'contain',
	},
	headerContainer: {
		width: '100%',
		flexDirection: 'row',
		height: Sizes.size_70,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	headerButton: {
		height: '100%',
		paddingHorizontal: Sizes.size_15,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textHeader: {
		fontSize: Sizes.size_17,
		color: Colors.BLACK,
	},
	avatar: {
		width: Sizes.size_35,
		height: Sizes.size_35,
		borderRadius: Sizes.size_35/2
	},
	cartIcon: {
		width: Sizes.size_25,
		height: Sizes.size_25,
		tintColor: Colors.GREEN_ICON
	},
	searchIcon: {
		width: Sizes.size_20,
		height: Sizes.size_20,
		tintColor: Colors.GREEN_ICON
	},
	bodyContainer: {
		flex: 1,
	},
	inputSearchContainer: {
		backgroundColor: Colors.WHITE,
		height: Sizings.percent_6,
		borderRadius: Sizings.percent_6/2,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		...Colors.ShadowSmall,
		paddingHorizontal: Sizes.size_15,
		flexDirection: 'row',
		width: '90%'
	},
	inputSearch: {
		flex: 1,
		paddingLeft: Sizes.size_10
	},
	tabBav: {
		flex: 1,
		paddingVertical: Sizes.size_40
	},
	listContainer: {
		flexDirection: 'row',
		height: Sizings.percent_60,
		marginTop: Sizings.percent_3
	},
	listCategories: {
		flex: 5,
	},
	textTabBav: {
		transform: [{ rotate: '-90deg'}],
		color: Colors.GRAY,
		fontSize: Sizes.size_16
	},
	viewTabBav: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	}
});

export default HomeComponent;
