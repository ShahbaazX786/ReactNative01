/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
// import AppOne from './AppOne';
import AppTwo from './AppTwo';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppTwo);
