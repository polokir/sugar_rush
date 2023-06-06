import { Animated, StyleSheet, View } from "react-native";
import constants from "../../constants";
import { Symbol } from "../Symbol/Symbol";
import { Component } from "react";

export default class Reel extends Component {
  constructor(props) {
    super(props);
    this.symbols = "GG234455PPP23GPGPGAAGG234455PPP23GPGPGAAGG234455PPP23GPGPGAA";
    this.symb_height = this.props.height / constants.SYMBOLS;
    this.reelSymbols = this.symbols.repeat(constants.REPEAT_REELS);

    this.position = this.reelSymbols.length - constants.SYMBOLS;
    this.currentScroll = (this.reelSymbols.length - constants.SYMBOLS) *this.symb_height * -1;
    this.state = {
        scrollPosition: new Animated.Value(this.currentScroll),
    }
  }
  scrollByOffset = (offset) =>{
    this.currentScroll = this.currentScroll + (this.symb_height*offset);

    Animated.timing(
        this.state.scrollPosition,{
            toValue:this.currentScroll,
            duration:750 +(this.props.index+250),
            useNativeDriver:true,
            // easing:Easing.inOut(Easing.exp)
        }
    ).start(()=>{
      // this.position = ((constants.REPEAT_REELS-2)*this.symbols.length) +  (this.position % this.symbols.length);
      // this.currentScroll = this.position * this.symb_height * -1;
      // this.state.scrollPosition.setValue(this.currentScroll);  
    })
  }

  render() {
    return (
      <View style={[styles.reel, { width: this.props.width, height: this.props.height }]}>
        <Animated.View
          style={{ width: this.props.width, height: this.reelSymbols.length * this.symb_height, transform:[{translateY:this.state.scrollPosition}] }}
        >
          {this.reelSymbols.split("").map((item, i) => (
            <Symbol symbol={item} key={i} width={this.props.width} height={this.symb_height} />
          ))}
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  reel: {
    //backgroundColor:"purple",
    overflow: "hidden",
  },
});
