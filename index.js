/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import AppOne from './AppOne';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppOne);
