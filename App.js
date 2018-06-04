/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView
} from "react-native";
import Header from "./src/components/common/Header";
import ListDetails from "./src/components/ListDetails";

export default class App extends Component {
  state = {
    term: "",
    movies: []
  };

  async componentWillMount() {
    console.log("Component Will mounted");

    let response = await fetch(
      "http://www.omdbapi.com/?apikey=eb340c9e&s=Batman"
    );
    let movie = await response.json();

    this.setState({ movies: movie.Search });
  }

  renderList = () => {
    return this.state.movies.map((eachMovie, i) => {
      return (
        <ListDetails
          key={i}
          title={eachMovie.Title}
          poster={eachMovie.Poster}
        />
      );
    });
  };

  render() {
    console.log(this.state.movies);
    return (
      <View style={styles.container}>
        <Header headerText="This Movie" />
        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={{
              height: 40,
              width: 300,
              backgroundColor: "white",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              elevation: 7,
              position: "relative",
              color: "teal",
              paddingLeft: 14
            }}
            onChangeText={text => this.setState({ term: text })}
            value={this.state.term}
            underlineColorAndroid={"transparent"}
          />
          <Button title="search" onPress={() => alert("hello World")} />
        </View>
        <ScrollView>
          <View>{this.renderList()}</View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CFD8DC"
  }
});
