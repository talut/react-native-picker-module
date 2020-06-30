// Type definitions for react-native-picker-module 1.3.1
// Project: https://github.com/talut/react-native-picker-module
// Definitions by: Talut TASGIRAN <https://github.com/talut>
// TypeScript Version: 3.8.2

import React from "react"

export interface ReactNativePickerModuleProps {
  value?: string
  items: string[]
  title?: string
  pickerRef: any[]
  onValueChange: (value: string) => void
  onCancel?: () => void
  cancelButton?: string
  confirmButton?: string
  contentContainerStyle?: object
  confirmButtonStyle?: object
  cancelButtonStyle?: object
  titleStyle?: object
  itemStyle?: object
  useNativeDriver?: boolean
  confirmButtonDisabledTextStyle?: object
  confirmButtonEnabledTextStyle?: object
  cancelButtonTextStyle?: object
  backdropColor?: string
  backdropOpacity?: number
  selectedColor?: string
}

export default class ReactNativePickerModule extends React.Component<ReactNativePickerModuleProps> {
  show: () => void
  hide: () => void
}
