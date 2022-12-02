import React, { forwardRef, useEffect } from "react"
import { NativeModules } from "react-native"

const ReactNativePickerModule = forwardRef((props, ref) => {
  const {
    value,
    items,
    title,
    backgroundColor,
    tintColor,
    selectedColor,
    onValueChange,
    onCancel,
  } = props
  useEffect(() => {
    if (ref) {
      ref.current = {
        show: () =>
          NativeModules.ReactNativePickerModule.show(
            items,
            value,
            title,
            selectedColor,
            backgroundColor,
            tintColor,
            value => {
              onValueChange(value)
            },
            onCancel || (() => {}),
    ),
      hide: () => NativeModules.ReactNativePickerModule.hide(),
    }
    }
  }, [ref, value])
  return <></>
})
export default ReactNativePickerModule
