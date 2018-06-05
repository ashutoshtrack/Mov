import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import Card from "./common/Card";
import CardSection from "./common/CardSection";
import Custombutton from "./common/Custombutton";
//"https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-090_loader_loading-512.png"
class ListDetails extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <View style={styles.headerContentStyle}>
            <Text style={styles.headerTextStyle}>{this.props.title}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image
            source={{
              uri: this.props.poster
            }}
            style={styles.imageStyle}
          />
        </CardSection>
        <CardSection>
          <Custombutton onPressed={this.props.clicked} />
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: "bold"
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18,
    paddingBottom: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  buttonStyle: {
    alignItems: "center",
    marginRight: 20
  }
};

export default ListDetails;
