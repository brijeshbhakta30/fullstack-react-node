# Fullstack React, React Native and Node Demo application

A Boilerplate for building fullstack applications with React, React Native and Node.
*The project attempts to share maximum amount of code between react and react Native codebase.*

## Getting started

1. Install React Native as described at official [React Native Docs](https://facebook.github.io/react-native/docs/getting-started.html#content)
2. Clone this repository `git clone https://github.com/brijeshbhakta30/fullstack-react-node.git`
3. Run `yarn install` , all required components will be installed automatically
    ### Additional steps required for iOS
    1. Run `cd ios` from root folder if this project      
    2. Run `pod install`


4. Run `react-native run-android` to run the project on Android or use ***android*** script with command `yarn android`.
5. Run `react-native run-ios` to run the project in iOS or use ***ios*** script with command `yarn ios`. For running the app from XCode, open XCode app and open the ***xcworkspace*** file and run (`Cmd+R`).

## Starting the projects
___
### iOS
Run `yarn ios`. For running the app from XCode, open XCode app and open the ***xcworkspace*** file and run (`Cmd+R`).

### Android
Run `yarn android`. Make sure to start a emulator or connect a physical device to run successfully.

### React Web
Run `yarn web`

### Server
run `yarn server`

___
## Configuration

- When adding new folders in `src` remember to add the folder name in `internalModules` variable in `metro.config.js` file and restart the project.

## Contribute

- [Issue Tracker](https://github.com/brijeshbhakta30/fullstack-react-node/issues)
- [Source Code](https://github.com/brijeshbhakta30/fullstack-react-node)

## License
This project is licensed under the [MIT License](https://github.com/brijeshbhakta30/fullstack-react-node/blob/master/LICENSE)

## Useful links
- [Commit message validation](https://www.conventionalcommits.org/en/v1.0.0/)
