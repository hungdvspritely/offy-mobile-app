import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, LoginScreen } from '@app/screens';
import { ScreenName } from '@app/utils';

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name={ScreenName.LOGIN_SCREEN} component={LoginScreen} options={{headerShown: false}}/>
			<Stack.Screen name={ScreenName.HOME_SCREEN} component={HomeScreen} options={{headerShown: false}} />
		</Stack.Navigator>
	);
};
