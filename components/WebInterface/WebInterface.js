import { Component } from "react";
import { WebView } from "react-native-webview";

export class WebInterface extends Component {
  render() {
    return (
      <WebView source={{ uri: "https://workly.com.ua/" }} style={{ flex: 1 }} />
    );
  }
}
