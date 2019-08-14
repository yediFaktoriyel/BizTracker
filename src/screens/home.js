import React, {Fragment} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  View,
  Text,
} from 'react-native';

import styles from "../styles";

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
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionDescription}>
                  This will be the home.
                </Text>
                <Button
                mode="contained"
                onPress={() =>this.props.navigation.navigate('settings')}
                title="Settings"
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default Home;
