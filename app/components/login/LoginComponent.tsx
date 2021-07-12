import React from 'react';
import {
	StyleSheet,
	ImageBackground,
	SafeAreaView,
	Text,
	View,
	TouchableOpacity, } from 'react-native';
import { Sizes, Sizings, Colors , Images, FontWeights} from '@app/utils';


interface LProps {
	onLogin: any
};

function LoginComponent(props: LProps) {
	const {
		onLogin
	} = props;

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.imageContainer}>
				<ImageBackground source={Images.bgLoginImage} style={styles.imageBg} imageStyle={styles.imageBgStyle}>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>Offy</Text>
						<Text style={styles.detailTitle}>Increase your natural beaty</Text>
					</View>

					<View style={styles.buttonContainer}>
						<TouchableOpacity style={styles.signUpButton}>
							<Text style={styles.textButtonLogin}>Sign up</Text>
						</TouchableOpacity>

						<TouchableOpacity onPress={onLogin} style={styles.loginButton}>
							<Text style={[styles.textButtonLogin, {color: Colors.GREEN_PRIMARY}]}>Log in</Text>
						</TouchableOpacity>
					</View>
				</ImageBackground>
			</View>

			<Text style={styles.textTerm}>Terms of Service</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	imageBg: {
		width: '100%',
		height: '100%',
	},
	imageContainer: {
		height: '92%',
		width: '100%',
		borderBottomRightRadius: Sizes.size_55,
		borderBottomLeftRadius: Sizes.size_55,
	},
	imageBgStyle: {
		borderBottomRightRadius: Sizes.size_55,
		borderBottomLeftRadius: Sizes.size_55,
	},
	loginButton: {
		backgroundColor: Colors.WHITE,
		height: Sizings.percent_7,
		borderRadius: Sizings.percent_7/2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textButtonLogin: {
		color: Colors.WHITE,
		fontWeight: 'bold',
		fontSize: Sizes.size_16
	},
	textTerm: {
		fontSize: Sizes.size_15,
		marginTop: Sizes.size_10,
		...FontWeights.Regular
	},
	titleContainer: {
		flex: 3,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)',
	},
	title: {
		color: Colors.WHITE,
		fontWeight: 'bold',
		fontSize: Sizes.size_40
	},
	detailTitle: {
		color: Colors.WHITE,
		fontSize: Sizes.size_18
	},
	buttonContainer: {
		flex: 0.9,
		backgroundColor: 'rgba(0,0,0,0.5)',
		borderBottomRightRadius: Sizes.size_55,
		borderBottomLeftRadius: Sizes.size_55,
		paddingBottom: Sizes.size_55,
		justifyContent: 'space-between',
		paddingHorizontal: Sizes.size_35,
		paddingTop: Sizes.size_30
	},
	signUpButton: {
		backgroundColor: '#1E413C',
		height: Sizings.percent_7,
		borderRadius: Sizings.percent_7/2,
		justifyContent: 'center',
		alignItems: 'center',
		opacity: 0.8
	}
});

export default LoginComponent;
