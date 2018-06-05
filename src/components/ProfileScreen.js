import React, { Component } from "react";
import {
  StyleSheet,
  Button,
  Text,
  Image,
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import Card from "./common/Card";
import CardSection from "./common/CardSection";
import axios from "axios";

class ProfileScreen extends Component {
  state = {
    movieInfo: null
  };

  componentDidMount() {
    const { navigation } = this.props;
    const token = navigation.getParam("token", "String");
    console.log(token);
    axios
      .get("http://www.omdbapi.com/?apikey=eb340c9e&i=" + token)
      .then(resp => this.setState({ movieInfo: resp.data }))
      .catch(error => alert("Network Error.."));
  }

  render() {
    console.log(this.state.movieInfo);
    if (this.state.movieInfo !== null) {
      return (
        <ScrollView>
          <Card>
            <CardSection>
              <View style={styles.thumbnailContainerStyle}>
                <Text style={styles.titleSty}>
                  {this.state.movieInfo.Title}
                </Text>
              </View>
            </CardSection>
            <CardSection>
              <Image
                source={{
                  uri: this.state.movieInfo.Poster
                }}
                style={styles.imageStyle}
              />
            </CardSection>
            <CardSection>
              <View style={styles.headerContentStyle}>
                <Text style={styles.headerTextStyle}>
                  Released: {this.state.movieInfo.Year}
                </Text>
              </View>
            </CardSection>
            <CardSection style={{ flexDirection: "column" }}>
              <View style={styles.plottercontainer}>
                <Text style={styles.plotter}>{this.state.movieInfo.Plot}</Text>
              </View>
            </CardSection>
            <CardSection>
              <Text style={styles.headerTextStyle}>
                IMDBRating: {this.state.movieInfo.imdbRating}
              </Text>
            </CardSection>
          </Card>
        </ScrollView>
      );
    }
    return (
      <View>
        <Text style={{ color: "orange", fontSize: 30, marginTop: 120 }}>
          Processing..Please Wait
        </Text>
      </View>
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
    fontSize: 18
  },
  titleSty: {
    fontSize: 25,
    color: "orange"
  },
  plotter: {
    fontSize: 18,
    color: "teal"
  },
  plottercontainer: {
    margin: 10
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
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

export default ProfileScreen;
