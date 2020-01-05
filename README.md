# React Native Picker Module for Android & IOS

With this package you can easily use picker with onPress function.
Also this package is workaround for Android Picker problem (https://github.com/facebook/react-native/issues/15556). 

Using `Modal` and `Picker` component for IOS and using `RecyclerView` and `AlertDialog` for Android as `NativeModule`. 


<img src="./docs/android-picker-module.png"> <img src="./docs/ios-picker-module.png">

### v1.2.0 now has AndroidX support. If you want to use this package without AndroidX support please use v1.1.1
#### Facebook RN blog post about v0.60 and AndroidX support: [https://facebook.github.io/react-native/blog/2019/07/03/version-60](https://facebook.github.io/react-native/blog/2019/07/03/version-60)

### Version 1.2.2
- Please set selectedValue as number. At first versions packages was not return value text. Now it's returning value text and value index. But props name still same. Which means selectedValue means text to you but actually it is a number.
- onDismiss : When user select a value this callback will called.
- Added supported orientation for Ios.
- You can add  `double` value, `integer` value to items. But don't forget onValueChange will return value as `String`

### Version 1.2.0
- [https://github.com/talut/react-native-picker-module/pull/9](https://github.com/talut/react-native-picker-module/pull/9) Merged
- AndroidX support added.

### Version 1.1.1

- [https://github.com/talut/react-native-picker-module/issues/7](https://github.com/talut/react-native-picker-module/issues/7) this feature request added.

### Version 1.0.1

- [https://github.com/talut/react-native-picker-module/issues/1](https://github.com/talut/react-native-picker-module/issues/1) this feature request added.
- Typescript definitions added.
- Undefined value props at **IOS** issue solved.

## Getting Started

**With NPM**

```
npm install --save react-native-picker-module
```

**With YARN**

```
yarn add react-native-picker-module
```

#### After React Native v0.60 you don't need to link anything. [Native Modules are now Autolinked](https://facebook.github.io/react-native/blog/2019/07/03/version-60#native-modules-are-now-autolinked)

**Automatic linking**

```
react-native link react-native-picker-module
```

**Manual Linking**

**[Manual Installation](/docs/manual-installation.md)** (If something went wrong with react-native link)

## Props

| Props       | Type | Default                                          | Required | OS         |
|-------------|------|--------------------------------------------------|----------|------------|
|value        |number|-                                                 |No        |Android, IOS|
|items        |array |-                                                 |**Yes**   |Android, IOS|
|title        |string|-                                                 |No        |Android, IOS|
|ios          |object|`{duration: 330, overlayColor: 'rgba(0,0,0,0.3)'}`|No        |IOS         |
|titleStyle   |object|{}                                                |No        |IOS         |
|itemStyle    |object|{}                                                |No        |IOS         |
|cancelButtonTextStyle |object| {}                                      |No        |IOS         |
|confirmButtonTextStyle|object| {}                                      |No        |IOS         |
|pickerRef    |func  |-                                                 |**Yes**   |Android, IOS|
|onValueChange|func  |-                                                 |**Yes**   |Android, IOS|
|onCancel     |func  |-                                                 |**No**    |Android, IOS|
|onDismiss    |func  |-                                                 |**No**    |Android, IOS|
|cancelButton |string|`Cancel`                                          |No        |IOS         |
|confirmButton|string|`Confirm`                                         |No        |IOS         |


## Usage

```javascript
import ReactNativePickerModule from 'react-native-picker-module'

state = {
    valueText: undefined,
    selectedIndex: null,
    data: [
        "Javascript",
        "Go",
        "Java",
        "Kotlin",
        "C++",
        "C#",
        "PHP"
    ]
};

<TouchableOpacity onPress={() => {this.pickerRef.show()}}>
  <Text>Show Language Picker</Text>
</TouchableOpacity>

<ReactNativePickerModule
  pickerRef={e => this.pickerRef = e}
  selectedValue={this.state.selectedItem}
  title={"Select a language"}
  items={this.state.data}
  titleStyle={{color:'red'}}
  itemStyle={{color:'red'}}
  confirmButtonTextStyle={{color:'red'}}
  cancelButtonTextStyle={{color:'red'}}
  onDismiss={()=>{console.log("onDismiss")}}
  onCancel={()=>{console.log('Cancelled')}}
  onValueChange={(valueText, index ) => {
  console.log("value: ",valueText)
  console.log("index: ",index)
    this.setState({
       valueText: valueText,
       selectedItem: index,
    })
}}/>
```

## FYI
You can use more than one picker in same screen. You just need to set different pickerRef. 

p.s : If you want to get country list from native device you can use this package: [https://github.com/talut/react-native-countries](https://github.com/talut/react-native-countries)

## License
This project is licensed under the MIT License - see the LICENSE.md file for details
