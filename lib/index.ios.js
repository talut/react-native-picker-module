import React from "react";
import {
  Platform,
  View,
  Animated,
  Modal,
  TouchableOpacity,
  Picker,
  Dimensions,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

class ReactNativePickerModule extends React.Component {
  state = {
    isVisible    : false,
    animation    : new Animated.Value(0),
    selectedValue: this.props.value,
  };
  isIphoneX = () => {
    const dimen = Dimensions.get('window');
    return (
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        ((dimen.height === 812 || dimen.width === 812) || (dimen.height === 896 || dimen.width === 896))
    );
  };

  render() {
    const {value, items, title, onValueChange, pickerRef, ios, cancelButton, confirmButton} = this.props;
    pickerRef({
      show: () => {
        this.setState({
          isVisible    : true,
          selectedValue: value
        }, () => {
          Animated.timing(this.state.animation, {
            toValue : 1,
            duration: ios.duration,
          }).start();
        })
      }
    });
    const styles = {
      container        : {
        flex          : 1,
        bottom        : this.state.animation.interpolate({
          inputRange : [0, 1],
          outputRange: [-Dimensions.get('window').height, 0]
        }),
        justifyContent: 'flex-end',
        zIndex        : 999,
      },
      content          : {
        margin         : 15,
        backgroundColor: "white",
        borderRadius   : 10,
        borderColor    : "rgba(0, 0, 0, 0.1)"
      },
      confirmButtonView: {
        borderBottomEndRadius  : 10,
        borderBottomStartRadius: 10,
        backgroundColor        : '#FFF',
        borderTopWidth         : 1,
        borderTopColor         : 'rgba(165,165,165,0.2)',
        paddingVertical        : 15
      },
      confirmButtonText: {
        fontWeight: '500',
        fontSize  : 18,
        textAlign : 'center',
        color     : 'rgba(0,122,255,1)'
      },
      cancelButton     : {
        marginVertical: 10,
      },
      cancelButtonView : {
        marginHorizontal: 15,
        marginBottom    : this.isIphoneX() ? 50 : 15,
        backgroundColor : '#FFF',
        padding         : 15,
        borderRadius    : 10
      },
      cancelButtonText : {
        fontWeight: 'bold',
        fontSize  : 18,
        textAlign : 'center',
        color     : 'rgba(0,122,255,1)'
      },
      titleView        : {
        padding          : 12,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(165,165,165,0.2)',
      },
      titleText        : {
        fontWeight: '500',
        fontSize  : 14,
        textAlign : 'center',
        color     : '#bdbdbd'
      }
    };
    return (
        <Modal
            visible={this.state.isVisible}
            animationType="none"
            transparent={true}>
          <Animated.View style={{
            flex           : 1,
            backgroundColor: this.state.animation.interpolate({
              inputRange : [0, 1],
              outputRange: ['transparent', ios.overlayColor]
            }),
          }}>
            <Animated.View style={styles.container}>
              <View style={styles.content}>
                <View style={styles.titleView}>
                  <Text style={[styles.titleText, ios.titleStyle]}>
                    {title}
                  </Text>
                </View>
                <Picker
                    selectedValue={this.state.selectedValue === null ? 0 : this.state.selectedValue}
                    style={{maxHeight: 200, overflow: 'hidden'}}
                    onValueChange={(val) => {
                      this.setState({
                        selectedValue: val
                      })
                    }}>
                  {items.map((val, index) => {
                    return <Picker.Item key={"item-" + index} label={val} value={index}/>
                  })}
                </Picker>
                <TouchableOpacity activeOpacity={.9} onPress={() => {
                  if(this.state.selectedValue === null || this.state.selectedValue !== this.props.value) {
                    onValueChange(this.state.selectedValue === null ? 0 : this.state.selectedValue);
                    Animated.timing(this.state.animation, {
                      toValue : 0,
                      duration: ios.duration,
                    }).start(() => {
                      this.setState({
                        isVisible: false,
                      })
                    })
                  }
                }}>
                  <View style={[styles.confirmButtonView, {
                    opacity: this.state.selectedValue !== null ? this.state.selectedValue !== this.props.value ? 1 : 0.1 : 1
                  }]}>
                    <Text style={styles.confirmButtonText}>{confirmButton}</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.cancelButton}>
                <TouchableOpacity activeOpacity={.9} onPress={() => {
                  Animated.timing(this.state.animation, {
                    toValue : 0,
                    duration: ios.duration,
                  }).start(() => {
                    this.setState({
                      isVisible: false,
                    })
                  });
                }}>
                  <View style={styles.cancelButtonView}>
                    <Text style={styles.cancelButtonText}>{cancelButton}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </Animated.View>
        </Modal>
    )
  }
}

ReactNativePickerModule.propTypes = {
  value        : PropTypes.number,
  items        : PropTypes.array.isRequired,
  title        : PropTypes.string,
  ios          : PropTypes.object,
  pickerRef    : PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  cancelButton : PropTypes.string,
  confirmButton: PropTypes.string,
};

ReactNativePickerModule.defaultProps = {
  ios          : {
    duration    : 330,
    overlayColor: 'rgba(0,0,0,0.3)',
  },
  cancelButton : "Cancel",
  confirmButton: "Confirm",
};

export default ReactNativePickerModule;