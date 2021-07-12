import AsyncStorage from '@react-native-community/async-storage';

const USER_TOKEN = 'USER_TOKEN';
const AUTO_LOGIN = 'CHECK_AUTO_LOGIN';
const TUTORIAL = 'TUTORIAL';
const TYPE_ACCOUNT = 'TYPE_ACCOUNT';
const REFRESH_TOKEN = 'REFRESH_TOKEN';
const USER_DATA = 'USER_DATA';

export const clearUserData = async () => {
	try {
		await AsyncStorage.removeItem(`@${USER_TOKEN}:key`);
		await AsyncStorage.removeItem(`@${AUTO_LOGIN}:key`);
		await AsyncStorage.removeItem(`@${TYPE_ACCOUNT}:key`);
		return true;
	} catch (error) {
		return false;
	}
};

export const saveUserData = async (value) => {
	try {
		await AsyncStorage.setItem(`@${USER_DATA}:key`, `${value}`);
		return true;
	} catch (error) {
		return false;
	}
};

export const getUserData = async () => {
	try {
		const value = await AsyncStorage.getItem(`@${USER_DATA}:key`);
		if (value !== null) {
			return JSON.parse(value);
		}
		return false;
	} catch (error) {
		return false;
	}
};

export const saveAccessToken = async (value) => {
	try {
		await AsyncStorage.setItem(`@${USER_TOKEN}:key`, `${value}`);
		return true;
	} catch (error) {
		return false;
	}
	
};

export const getAccessToken = async () => {
	try {
		const value = await AsyncStorage.getItem(`@${USER_TOKEN}:key`);
		if (value !== null) {
			return value;
		}
		return '';
	} catch (error) {
		return '';
	}
};

export const saveRefreshToken = async (value) => {
	try {
		await AsyncStorage.setItem(`@${REFRESH_TOKEN}:key`, `${value}`);
		return true;
	} catch (error) {
		return false;
	}
};

export const getRefreshToken = async () => {
	try {
		const value = await AsyncStorage.getItem(`@${REFRESH_TOKEN}:key`);
		if (value !== null) {
			return JSON.parse(value);
		}
		return false;
	} catch (error) {
		return false;
	}
};

export const saveTutorial = async () => {
	try {
		await AsyncStorage.setItem(`@${TUTORIAL}:key`, 'true');
		return true;
	} catch (error) {
		return false;
	}
};

export const getTutorial = async () => {
	try {
		const value = await AsyncStorage.getItem(`@${TUTORIAL}:key`);
		if (value) {
			return true;
		}
		return false;
	} catch (error) {
		return false;
	}
};
