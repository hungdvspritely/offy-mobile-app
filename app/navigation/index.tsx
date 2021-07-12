import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStackNavigator } from './stack';

const AppNavigator = () => (
	<SafeAreaProvider>
		<NavigationContainer>
			<HomeStackNavigator />
		</NavigationContainer>
	</SafeAreaProvider>
);

export default AppNavigator;
