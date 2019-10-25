import React from "react";
import { NativeModules, View } from "react-native";
import PropTypes from "prop-types";

const ReactNativePickerModule = props => {
  const { value, items, title, onValueChange, pickerRef, onCancel, onDismiss } = props;
  pickerRef({
    show: () => {
      NativeModules.ReactNativePickerModule.show(
        items,
        value === null || value === undefined ? -1 : value,
        title,
        (value, index) => {
          onValueChange(value, index);
          onDismiss === undefined ? () => {} : onDismiss();
        },
        onCancel === undefined ? () => {} : onCancel
      );
    }
  });
  return <View style={{ display: "none" }} />;
};
ReactNativePickerModule.propTypes = {
  value: PropTypes.number,
  items: PropTypes.array.isRequired,
  title: PropTypes.string,
  onValueChange: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  onDismiss: PropTypes.func,
  pickerRef: PropTypes.func.isRequired
};
export default ReactNativePickerModule;
