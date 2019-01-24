# react-native-picker-module

## Getting started

`npm install react-native-picker-module --save`

`yarn add react-native-picker-module`

### Mostly automatic installation

`$ react-native link react-native-picker-module`

### Manual installation


#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.taluttasgiran.pickermodule.ReactNativePickerModulePackage;` to the imports at the top of the file
  - Add `new ReactNativePickerModulePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-picker-module'
  	project(':react-native-picker-module').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-picker-module/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      implementation project(':react-native-picker-module')
  	```


## Usage
SOON
  