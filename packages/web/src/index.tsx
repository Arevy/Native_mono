import { AppRegistry } from "react-native";
import App from "./App";
import * as serviceWorker from './serviceWorker';

AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});


serviceWorker.unregister();
