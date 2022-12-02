import React, { useEffect, useState, forwardRef } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Picker } from "@react-native-community/picker"
import Modal from "react-native-modal"

const ReactNativePickerModule = forwardRef((props, ref) => {
  const {
    value,
    items,
    title,
    onValueChange,
    cancelButton,
    confirmButton,
    onCancel,
    contentContainerStyle,
    titleStyle,
    itemStyle,
    useNativeDriver,
    confirmButtonAlwaysEnabled,
    confirmButtonDisabledTextStyle,
    confirmButtonEnabledTextStyle,
    cancelButtonTextStyle,
    backdropColor,
    backdropOpacity,
    tintColor,
    selectedColor,
    confirmButtonStyle,
    cancelButtonStyle,
  } = props

  const dismissPress = () => {
    setIsVisible(false)
    if (onCancel) {
      onCancel()
    }
  }
  const [isVisible, setIsVisible] = useState(false)
  const [selectedValue, setSelectedValue] = useState()
  const setDefaultSelectedValue = () => setSelectedValue(
    !value ? (typeof items[0] === "object" ? items[0].value : items[0]) : value,
  )
  useEffect(() => {
    ref.current = {
      show: () => setIsVisible(true),
      hide: dismissPress,
    }
  }, [ref])
  return (
    <Modal
      backdropColor={backdropColor}
      backdropOpacity={backdropOpacity}
      onBackdropPress={dismissPress}
      onBackButtonPress={dismissPress}
      onShow={setDefaultSelectedValue}
      useNativeDriver={useNativeDriver}
      isVisible={isVisible}
      style={{ justifyContent: "flex-end" }}
      hideModalContentWhileAnimating={true}>
      <View style={[styles.content, contentContainerStyle]}>
        <View style={styles.titleView}>
          <Text style={[styles.titleText, titleStyle]}>{title}</Text>
        </View>
        <Picker
          itemStyle={itemStyle}
          selectedValue={selectedValue}
          style={{
            maxHeight: 200,
            overflow: "hidden",
          }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          {items.map((item, index) => {
            if (item.hasOwnProperty("value") && item.hasOwnProperty("label")) {
              return (
                <Picker.Item
                  color={value === item.value ? selectedColor : tintColor}
                  key={"item-" + index}
                  label={item.label.toString()}
                  value={item.value.toString()}
                />
              )
            } else {
              return (
                <Picker.Item
                  color={value === item ? selectedColor : tintColor}
                  key={"item-" + index}
                  label={item.toString()}
                  value={item.toString()}
                />
              )
            }
          })}
        </Picker>
        <TouchableOpacity
          activeOpacity={0.9}
          disabled={(value === selectedValue) && !confirmButtonAlwaysEnabled}
          onPress={() => {
            onValueChange(selectedValue)
            setIsVisible(false)
          }}
          style={[styles.confirmButtonView, confirmButtonStyle]}>
          <Text
            style={[
              styles.confirmButtonText,
              (selectedValue === value && !confirmButtonAlwaysEnabled) ? confirmButtonDisabledTextStyle : confirmButtonEnabledTextStyle,
            ]}>
            {confirmButton}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cancelButton}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[styles.cancelButtonView, cancelButtonStyle]}
          onPress={dismissPress}>
          <Text style={[styles.cancelButtonText, cancelButtonTextStyle]}>{cancelButton}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
})


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
