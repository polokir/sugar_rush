import { View, StyleSheet, Button, ImageBackground } from "react-native";

import CONSTANT from "./constants";
import img from "./assets/app-bgc.png";
import ReelsSet from "./components/ReelsSet/ReelsSet";
import { Component } from "react";
import NetInfo from '@react-native-community/netinfo';
import { WebInterface } from "./components/WebInterface/WebInterface";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.reelSet = null;
    this.state = {
      isOpen:false,
    }
  }

  

  openWebView = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  isOnline = async () => {
    const netInfoState = await NetInfo.fetch();
    if (netInfoState.isConnected) {
      console.log("internet Ok");
      this.setState({ isOpen: true });
      return true;
    } else {
      this.setState({ isOpen: false });
      return false;
    }
    
  };

  componentDidMount(){
    this.isOnline();
  }

  render() {
    
    return this.state.isOpen ? <WebInterface/>  : (
      
      <View style={styles.container}>
        <ImageBackground source={img} resizeMode="cover" style={styles.image}>
          <View style={styles.playContainer}>
            <ReelsSet
              ref={(ref) => {
                this.reelSet = ref;
              }}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="SPIN"
              style={styles.spinButton}
              onPress={() => this.reelSet.spin()}
            />
            <Button
              title="BACK TO THE GAME"
              style={styles.spinButton}
              onPress={() => this.openWebView()}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    width: CONSTANT.MAX_WIDTH / 2,
    marginTop: 20,
    justifyContent: "center",
    fontWeight: "bold",
  },
  spinButton: {
    fontWeight: "700",
    backgroundColor: "transparent",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  playContainer: {
    height: CONSTANT.MAX_HEIGHT / 3,
    width: CONSTANT.MAX_WIDTH,
    backgroundColor: "transparent",
  },
  blur: {
    ...StyleSheet.absoluteFill,
  },
});
