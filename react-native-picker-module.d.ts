// Type definitions for react-native-picker-module 2.0.5
// Project: https://github.com/talut/react-native-picker-module
// Definitions by: Talut TASGIRAN <https://github.com/talut>
// TypeScript Version: 3.8.2

import React, { FunctionComponent } from "react"

declare module "react-native-picker-module" {

  export interface PickerRef {
    /**
     * Show picker
     * @returns void
     */
    show: () => void,
    /**
     * Hide picker
     * @returns void
     */
    hide: () => void,
  }

  export interface ReactNativePickerModuleProps {
    /**
     * Initial value of picker
     * @default undefined
     */
    value?: string
    /**
     * Items of picker
     * @default []
     */
    items: any[]
    /**
     * Title of picker
     * @default undefined
     */
    title?: string
    /**
     * Ref of picker
     * @default undefined
     */
    ref?: React.RefObject<PickerRef>
    onValueChange: (value: any) => void
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

  const ReactNativePickerModule: FunctionComponent<ReactNativePickerModuleProps>
  export default ReactNativePickerModule
}
