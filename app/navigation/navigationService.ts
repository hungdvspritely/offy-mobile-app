import * as React from 'react';

export const navigationRef: any = React.createRef();

export function goback() {
  navigationRef.current?.goBack();
}

export function navigate(name: String, params: any) {
  navigationRef.current?.navigate(name, params);
}

export function navigateAndSetToTop(screenName: String) {
  /*Clear and set screenName on top of stack*/
  navigationRef.current?.reset({
    index: 0,
    routes: [{name: screenName}],
  });
}
