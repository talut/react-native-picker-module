import React, { useState, useRef, useEffect } from "react"
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
  confirmButtonTextStyle,
  cancelButtonTextStyle,
  itemStyle,
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedValue, setSelectedValue] = useState(value)
  useEffect(() => {
    pickerRef.current = {
      show: () => setIsVisible(true),
      hide: () => {
        setIsVisible(false)
        if (onCancel) {
          onCancel()
        }
      },
    }
  })
  return (
    <Modal
      useNativeDriver={true}
      visible={isVisible}
      onBackdropPress={() => {
        setIsVisible(false)
        if (onCancel) {
          onCancel()
        }
      }}
      onDismiss={() => {
        setIsVisible(false)
        if (onDismiss) {
          onDismiss()
        }
      }}>
      <View style={{ flex: 1 }}>
        <View style={styles.content}>
          <View style={styles.titleView}>
            <Text style={[styles.titleText, titleStyle]}>{title}</Text>
          </View>
          <Picker
            itemStyle={itemStyle}
            selectedValue={selectedValue}
            style={{ maxHeight: 200, overflow: "hidden" }}
            onValueChange={val => setSelectedValue(val)}>
            {items.map((val, index) => {
              return <Picker.Item key={"item-" + index} label={val} value={index} />
            })}
          </Picker>
          <TouchableOpacity activeOpacity={0.9} onPress={() => {}}>
            <View>
              <Text style={[styles.confirmButtonText, confirmButtonTextStyle]}>{confirmButton}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.cancelButton}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              setIsVisible(false)
              if (onCancel) {
                onCancel()
              }
            }}>
            <View style={styles.cancelButtonView}>
              <Text style={[styles.cancelButtonText, cancelButtonTextStyle]}>{cancelButton}</Text>
            </View>
          </TouchableOpacity>
        </View>
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
    color: "rgba(0,122,255,1)",
  },
  cancelButton: {
    marginVertical: 10,
  },
  cancelButtonView: {
    marginHorizontal: 15,
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
  ios: {
    duration: 330,
    overlayColor: "rgba(0,0,0,0.3)",
  },
  cancelButton: "Cancel",
  confirmButton: "Confirm",
}

export default ReactNativePickerModule
