import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import  Reel  from "../Reel/Reel";
import CONSTANTS from "../../constants";

export default class ReelsSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      height: null,
    };
    this.reels = [];
  }

  layoutHandler = (e) => {
    this.setState({
        width:e.nativeEvent.layout.width,
        height:e.nativeEvent.layout.height
    })

  };

  renderReels = () => {

    let reelWidth = this.state.width / CONSTANTS.REELS;
    let reelList = Array.apply(null, Array(CONSTANTS.REELS)).map((item, i) => {
      return (
        <Reel
          width={reelWidth}
          height={this.state.height}
          key={i}
          index={i}
          ref={(ref) => {this.reels[i] = ref}}
        />
      );
    });
    return <>{reelList}</>;
  };
  random =(k,n) =>{
    return Math.floor(Math.random()*(k-n+1)+n);
  }
  spin = () => {
    for(let i = 0;i<this.reels.length;i++){
      this.reels[i].scrollByOffset(this.random(1,10));
    }
  };

  render() {
    return (
      <View style={styles.reelSet} onLayout={this.layoutHandler}>
        {this.state.width && this.state.height && this.renderReels() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  reelSet: {
    flex: 1,
    flexDirection: "row",
    gap: 1,
  },
});
