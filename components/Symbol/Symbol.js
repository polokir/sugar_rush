import { Image, StyleSheet, View } from "react-native";
import images from "../../assets/images";
import { Component } from "react";


export class Symbol extends Component {
    constructor(props){
        super(props)
    }
  getImage = () => {
    switch (this.props.symbol) {
      case "G":
        return images.green_star;
      case "2":
        return images.orange_heart;
      case "3":
        return images.orange_teddy;
      case "4":
        return images.pink_candy;
      case "P":
        return images.pink_teddy;
      case "A":
        return images.purple_candy;
      case "5":
        return images.red_teddy;
      default:
        return null;
    }
  };
  render() {
    let symS = this.getImage();
    return (
      <View style={[styles.symbol, { width: this.props.width, height: this.props.height }]}>
        <Image
          style={{ width: this.props.width - 5, height: this.props.height - 5 }}
          resizeMode="contain"
          source={symS}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  symbol: {
    overflow: "hidden",
  },
});
