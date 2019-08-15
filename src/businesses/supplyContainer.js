import React, {Fragment} from "react";
import {
  Platform,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import PropTypes from 'prop-types';
import styles from "../styles";

class SupplyContainer extends React.Component {
  static propTypes = {
    marginBottom: PropTypes.number,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    onHideUnderlay: PropTypes.func,
    supplyPrice: PropTypes.number,
    supplyAmount: PropTypes.number,
    title: PropTypes.string,
  }

  render() {
    return(
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text style={styles.smallerText}>
        {this.props.title} {'\n'}
        ($ {this.props.supplyPrice})
        </Text>
        <TouchableHighlight
        onPress={this.props.onPress}
        onLongPress={this.props.onLongPress}
        onHideUnderlay={this.props.onHideUnderlay}
        underlayColor='rgba(61,88,117, 0)'>
          <View>
            <AnimatedCircularProgress
            size={40}
            width={3}
            fill={this.props.supplyAmount * 2}
            tintColor='orange'
            backgroundColor='#E6E6E6'
            rotation={0}/>
            <View style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{ fontSize: 10, color: '#E6E6E6' }}>
              {this.props.supplyAmount} / 50
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

export default SupplyContainer
