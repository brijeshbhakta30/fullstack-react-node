# Fullstack React, React Native and Node Demo application

A Boilerplate for building fullstack applications with React, React Native and Node.

## Getting started

1. Install React Native as described at [https://facebook.github.io/react-native/docs/getting-started.html#content](https://facebook.github.io/react-native/docs/getting-started.html#content)
2. Clone this repository
3. Run `yarn install` , all required components will be installed automatically

    ### iOS
  
    1. Run `cd ios` from root folder if this project      
    2. Run `pod install`
    
    ### Android
    
    no steps required


4. Run `react-native run-android` to run the project on Android or use ***android*** script with command `yarn android`.
5. Run `react-native run-ios` to run the project in iOS or use ***ios*** script with command `yarn ios`. For running the app from XCode, open XCode app and open the ***xcworkspace*** file and run (`Cmd+R`).

## Configuration

- When adding new folders in `src` remember to add the folder name in `internalModules` variable in `metro.config.js` file and restart the project.

## Useful links
- [Commit message validation](https://www.conventionalcommits.org/en/v1.0.0/)
