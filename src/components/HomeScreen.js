import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  ActivityIndicator,
  Dimensions
} from "react-native";
import axios from "axios";
import Header from "./common/Header";
import ListDetails from "./ListDetails";

class HomeScreen extends Component {
  state = {
    term: "",
    movies: [],
    loading: false
  };

  componentWillMount() {
    console.log("Component Will mounted");

    axios
      .get("http://www.omdbapi.com/?apikey=eb340c9e&s=Batman")
      .then(resp => this.setState({ movies: resp.data.Search }))
      .catch(error => alert("Network Error.."));
  }

  renderList = () => {
    const { navigate } = this.props.navigation;

    if (this.state.movies !== undefined) {
      return this.state.movies.map((eachMovie, i) => {
        console.log(eachMovie.Poster);

        if (eachMovie.Poster == "N/A") {
          let imgUrl =
            "https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-090_loader_loading-512.png";
        } else {
          imgUrl = eachMovie.Poster;
        }

        return (
          <View key={i}>
            <ListDetails
              title={eachMovie.Title}
              poster={imgUrl}
              clicked={() => navigate("Profile", { token: eachMovie.imdbID })}
            />
          </View>
        );
      });
    }

    if (this.state.movies === []) {
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ color: "red", fontSize: 18 }}> processing </Text>
      </View>;
    }
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ color: "red", fontSize: 30, marginTop: 120 }}>
          {" "}
          No Results found{" "}
        </Text>
        <Text style={{ color: "red", fontSize: 20, marginTop: 10 }}>
          {" "}
          Provide proper movie name{" "}
        </Text>
      </View>
    );
  };

  AddHandler = () => {
    this.setState({ loading: true });

    if (this.state.term === "") {
      alert("Provide Movie Name");
      this.setState({ loading: false });
    } else {
      axios
        .get("http://www.omdbapi.com/?apikey=eb340c9e&s=" + this.state.term)
        .then(resp =>
          this.setState({ movies: resp.data.Search, loading: false })
        )
        .catch(error => alert("Network Error... Try again Later"));
    }
  };

  render() {
    //nav props
    var { height, width } = Dimensions.get("window");
    console(height);
    const LoadingText = () => (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ color: "orange", fontSize: 30, marginTop: 120 }}>
          Loading..Please Wait
        </Text>
      </View>
    );

    console.log(this.state.term);
    return (
      <View style={styles.container}>
        <Header headerText="Movie Finder" />

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
            placeholder={"Enter Movie Name here"}
            onChangeText={text => this.setState({ term: text })}
            value={this.state.term}
            underlineColorAndroid={"transparent"}
          />
          <Button title="search" onPress={this.AddHandler} />
        </View>
        {this.state.loading ? (
          <LoadingText />
        ) : (
          <ScrollView>{this.renderList()}</ScrollView>
        )}
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

export default HomeScreen;
