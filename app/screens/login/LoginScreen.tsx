import {LoginComponent} from '@app/components';
import React from 'react';
import { ScreenName} from '@app/utils';

interface LProps {
	navigation: any
}

function LoginScreen(props: LProps) {
	const {
		navigation,
	} = props;

	const onLogin = () => {
		navigation.navigate(ScreenName.HOME_SCREEN);
	};

	return (
		<LoginComponent
			onLogin={onLogin}
		/>
	);
}

export default LoginScreen;
