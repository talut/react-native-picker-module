// Type definitions for react-native-picker-module 1.3.1
// Project: https://github.com/talut/react-native-picker-module
// Definitions by: Talut TASGIRAN <https://github.com/talut>
// TypeScript Version: 3.8.2

import React from "react"

export interface ReactNativePickerModuleProps {
    value?: number,
    items: string[],
    images?: any[],
    title?: string,
    ios?: object,
    pickerRef: any[],
    onValueChange: (valueText: string, index: number) => void,
    onCancel?: () => void,
    onDismiss?: () => void,
    cancelButton?: string,
    confirmButton?: string,
    titleStyle?: object,
    cancelButtonTextStyle?: object,
    confirmButtonTextStyle?: object,
    itemStyle?: object
}

export default class ReactNativePickerModule extends React.Component<ReactNativePickerModuleProps>{
    show: () => void;
}
