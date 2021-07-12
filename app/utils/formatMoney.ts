export const formatMoney = (text) => {
	if (text == 0) {
		return 0;
	}
	let reverseText = String(text).split('').reverse().join('');
	let currentConetent = '';
	for (let i = 1; i <= reverseText.length; i++) {
		if (i % 3 == 0 && i !== reverseText.length) {
			currentConetent = currentConetent + reverseText[i - 1] + ',';
		} else {
			currentConetent = currentConetent + reverseText[i - 1];
		}
	}
	currentConetent = currentConetent.split('').reverse().join('');
	return currentConetent;
};

export const formatPrice = (price) => {
	return String(price).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
};
