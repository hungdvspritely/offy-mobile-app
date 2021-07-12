import {Alert, Dimensions, Platform} from 'react-native';

export const DefaultPaging = {
	pageIndex: 1,
	size: 10,
};

export const AppKey = {
	PostPayloadPrefix: 'data',
	GetPayloadPrefix: 'filter',
};

export function ShowAlert(title, content, textSuccess = 'OK') {
	setTimeout(() => {
		Alert.alert(title, content, [{text: textSuccess, onPress: () => {}}], {
			cancelable: false,
		});
	}, 100);
}

export function ShowAlertConfirm(
	title = '',
	content = '',
	onSuccess,
	textSuccess = 'OK',
	textCancel = 'Cancel',
) {
	Alert.alert(
		title,
		content,
		[
			{
				text: textCancel,
				onPress: () => onSuccess(false),
				style: 'cancel',
			},
			{text: textSuccess, onPress: () => onSuccess(true)},
		],
		{cancelable: false},
	);
}

export const ShowAlertCallBack = (
	alert = '',
	content,
	callBack,
	textCancel = 'Cancel',
	textConfirm = 'OK'
) => {
	Alert.alert(
		alert,
		content,
		[
			{
				text: textCancel ,
				style: 'cancel',
			},
			{
				text: textConfirm,
				onPress: () => {
					if (callBack) {
						callBack();
					}
				},
			},
		],
		{cancelable: false},
	);
};

export const ShowAlertCallBackNotCancel = (
	alert = '',
	content,
	callBack,
	textConfirm = 'OK'
) => {
	Alert.alert(
		alert,
		content,
		[
			{
				text: textConfirm,
				onPress: () => {
					if (callBack) {
						callBack();
					}
				},
			},
		],
		{cancelable: false},
	);
};

export function ShowAlertConfirmCallBack(
	title = '',
	content = '',
	onCallBackSuccess,
	onCallBackCancel,
	textSuccess = 'OK',
	textCancel = 'Cancel',
) {
	setTimeout(() => {
		Alert.alert(
			title,
			content,
			[
				{
					text: textCancel,
					onPress: () => {
						onCallBackCancel && onCallBackCancel();
					},
					style: 'cancel',
				},
				{
					text: textSuccess,
					onPress: () => {
						onCallBackSuccess && onCallBackSuccess();
					},
				},
			],
			{cancelable: false},
		);
	}, 100);
	
}

export function isIphoneXorAbove() {
	const dimen = Dimensions.get('window');
	return (
		Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 896 ||
      dimen.width === 896)
	);
}
