declare module "react-native-picker-module-typescript" {
  import { Component, ReactNode } from "react";
  import { StyleProp, ViewStyle, TextStyle } from "react-native";

  export interface ReactNativePickerModuleProps {
    value?: number;
    items: string[];
    ios?: { duration?: number; titleStyle: TextStyle; overlayColor: string };
    pickerRef: (e: any) => void;
    onValueChange: (index: number) => void;
    cancelButton?: string;
    confirmButton?: string;
  }

  class ReactNativePickerModule extends Component<ReactNativePickerModuleProps> {}

  export default ReactNativePickerModule;
}
