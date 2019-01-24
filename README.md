# React Native Picker Module

React Native Picker Module 

<img src="./docs/android-picker-module.png"> <img src="./docs/ios-picker-module.png">

## Getting Started

**With NPM**

```
npm install --save react-native-picker-module
```

**With YARN**

```
yarn add react-native-picker-module
```

**Automatic linking**

```
react-native link react-native-picker-module
```

**Manual Linking**

**[Manual Installation](/docs/manual-installation.md)** (If something went wrong with react-native link)

### Manual installation

## Usage

```javascript
import ReactNativePickerModule from 'react-native-picker-module'

state = {
    selectedValue: null,
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
  value={this.state.selectedValue}
  title={"Select a language"}
  items={this.state.data}
  onValueChange={(index) => {
    this.setState({
       selectedValue: index
    })
}}/>
```


