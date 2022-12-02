// Type definitions for react-native-picker-module 2.0.6
// Project: https://github.com/talut/react-native-picker-module
// Definitions by: Talut TASGIRAN <https://github.com/talut>
// TypeScript Version: 3.8.2


declare module "react-native-picker-module" {
  import { FunctionComponent, RefObject } from "react"

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
    ref?: RefObject<PickerRef>
    /**
     * Callback function run after value changed
     * @param value
     */
    onValueChange: (value: any) => void
    /**
     * Callback function run after cancel
     */
    onCancel?: () => void
    /**
     * Text of cancel button for IOS
     * @default Cancel
     */
    cancelButton?: string
    /**
     * Text of confirm button for IOS
     * @default Confirm
     */
    confirmButton?: string
    contentContainerStyle?: object
    /**
     * To set confirm button disabled state if value is not selected yet for IOS
     */
    confirmButtonAlwaysEnabled?: boolean,
    confirmButtonStyle?: object
    cancelButtonStyle?: object,
    titleStyle?: object
    itemStyle?: object
    useNativeDriver?: boolean
    confirmButtonDisabledTextStyle?: object
    confirmButtonEnabledTextStyle?: object
    cancelButtonTextStyle?: object
    backdropColor?: string
    backdropOpacity?: number
    selectedColor?: string
    backgroundColor?: string
    tintColor?: string
  }

  const ReactNativePickerModule: FunctionComponent<ReactNativePickerModuleProps>
  export default ReactNativePickerModule
}
