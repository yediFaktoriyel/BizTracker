import React, {Fragment} from 'react';
import {
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  View,
  Text,
} from 'react-native';

import styles from "../styles";
import AirFreight from "../businesses/airFreight"

const airFreightCover = require("../../assets/Air-Freight.jpg");
const x = Dimensions.get("window").width;
const y = Dimensions.get("window").height;

class Home extends React.Component {

  static navigationOptions = ({ navigation }) => {

    return {

      headerTitle: "GTA Online Business Tracker",
      headerTitleStyle: {
        fontWeight: "100"
      },
      headerStyle: {
        backgroundColor: '#234a0a'
      },
      headerTintColor: '#E6E6E6',
    };
  }

  render(){
    return (
      <Fragment>
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>

            <Text style={styles.sectionTitle}>
              Air Freight
            </Text>
            <AirFreight />

          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default Home;
