import React from "react"
import { NativeModules, View, Image } from "react-native"
import PropTypes from "prop-types"

const ReactNativePickerModule = props => {
  const { value, items, images, title, onValueChange, pickerRef, onCancel, onDismiss } = props
  let imageSet = []
  if (images && images.length > 0) {
    images.map(img => {
      imageSet = imageSet.concat(Image.resolveAssetSource(img))
    })
  }
  pickerRef({
    show: () => {
      NativeModules.ReactNativePickerModule.show(
          items,
          imageSet,
          value ? value : -1,
          title,
          (value, index) => {
            onValueChange(value, index)
            onDismiss ? onDismiss() : () => {}
          },
          onCancel ? onCancel : () => {}
      )
    },
  })
  return <View style={{ display: "none" }} />
}
ReactNativePickerModule.propTypes = {
  value: PropTypes.number,
  items: PropTypes.array.isRequired,
  images: PropTypes.array,
  title: PropTypes.string,
  onValueChange: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  onDismiss: PropTypes.func,
  pickerRef: PropTypes.func.isRequired,
}
export default ReactNativePickerModule
