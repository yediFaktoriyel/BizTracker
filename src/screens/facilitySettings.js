import React, {Fragment} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  View,
  Text,
} from 'react-native';

import styles from "../styles";

class Settings extends React.Component {
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
                  This will be the settings.
                </Text>
                <Button
                mode="contained"
                onPress={() =>this.props.navigation.navigate('home')}
                title="Back"
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default Settings;
