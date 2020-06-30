import React, { useEffect, useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Picker } from "@react-native-community/picker"
import Modal from "react-native-modal"

const ReactNativePickerModule = ({
  pickerRef,
  value,
  items,
  title,
  onValueChange,
  ios,
  cancelButton,
  confirmButton,
  onCancel,
  onDismiss,
  titleStyle,
  itemStyle,
  useNativeDriver,
  confirmButtonDisabledTextStyle,
  confirmButtonEnabledTextStyle,
  cancelButtonTextStyle,
}) => {
  const dissmisPress = () => {
    setIsVisible(false)
    if (onCancel) {
      onCancel()
    }
  }
  const [isVisible, setIsVisible] = useState(false)
  const [selectedValue, setSelectedValue] = useState(!value ? items[0] : value)
  useEffect(() => {
    pickerRef.current = {
      show: () => setIsVisible(true),
      hide: dissmisPress,
    }
  })
  return (
    <Modal
      onBackdropPress={dissmisPress}
      onBackButtonPress={dissmisPress}
      useNativeDriver={useNativeDriver}
      isVisible={isVisible}
      style={{ justifyContent: "flex-end" }}
      hideModalContentWhileAnimating={true}>
      <View style={styles.content}>
        <View style={styles.titleView}>
          <Text style={[styles.titleText, titleStyle]}>{title}</Text>
        </View>
        <Picker
          itemStyle={itemStyle}
          selectedValue={selectedValue}
          style={{ maxHeight: 200, overflow: "hidden" }}
          onValueChange={setSelectedValue}>
          {items.map((val, index) => {
            return <Picker.Item key={"item-" + index} label={val} value={val} />
          })}
        </Picker>
        <TouchableOpacity
          activeOpacity={0.9}
          disabled={value === selectedValue}
          onPress={() => {
            onValueChange(selectedValue)
            setIsVisible(false)
          }}
          style={styles.confirmButtonView}>
          <Text
            style={[
              styles.confirmButtonText,
              selectedValue === value ? confirmButtonDisabledTextStyle : confirmButtonEnabledTextStyle,
            ]}>
            {confirmButton}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cancelButton}>
        <TouchableOpacity activeOpacity={0.9} style={styles.cancelButtonView} onPress={dissmisPress}>
          <Text style={[styles.cancelButtonText, cancelButtonTextStyle]}>{cancelButton}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  confirmButtonView: {
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "rgba(165,165,165,0.2)",
    paddingVertical: 15,
  },
  confirmButtonText: {
    fontWeight: "500",
    fontSize: 18,
    textAlign: "center",
  },
  cancelButton: {
    marginVertical: 10,
  },
  cancelButtonView: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
  },
  cancelButtonText: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: "rgba(0,122,255,1)",
  },
  titleView: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(165,165,165,0.2)",
  },
  titleText: {
    fontWeight: "500",
    fontSize: 14,
    textAlign: "center",
    color: "#bdbdbd",
  },
})

ReactNativePickerModule.defaultProps = {
  confirmButtonEnabledTextStyle: {
    color: "rgba(0,122,255,1)",
  },
  confirmButtonDisabledTextStyle: {
    color: "rgba(0,0,0,0.2)",
  },
  cancelButton: "Cancel",
  confirmButton: "Confirm",
  useNativeDriver: true,
}

export default ReactNativePickerModule
