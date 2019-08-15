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

  static navigationOptions = ({ navigation }) => {

    return {

      headerTitle: "Facility Settings",
      headerTitleStyle: {
        fontWeight: "100"
      },
      headerStyle: {
        backgroundColor: '#234a0a'
      },
      headerTintColor: '#E6E6E6',
    };
  }

  render() {

    return (

      <View style={{
        width: x,
        height: y / 2.5,
        alignItems: 'center',
        justifyContent: 'center'
      }}>

        <View style={{
          flexDirection: 'row',
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          width: x,
        }}>

          <View style={{
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <ActivityIndicator
              animating={this.state.loadingAnimation}
              color='green'
              size="large"
              style={styles.activityIndicator}/>
          </View>

          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: x / 4.5,
          }}>

            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: y / 20
            }}>

              <Text style={styles.smallerText}>
                NARCOTICS {'\n'}
                ($ {this.state.narcoticsPrice})
             </Text>

              <TouchableHighlight
                onPress={() => this.state.narcoticsSupply == 50 ? ''
                  : (
                    this.setState(function (prevState, props) {
                      return {
                        narcoticsSupply: prevState.narcoticsSupply + 1
                      }
                    }),
                    Vibration.vibrate(50)
                  )
                }
                onLongPress={() => (
                  this.setState({ narcoticsSupply: 0 }),
                  Vibration.vibrate(100)
                )}
                onHideUnderlay={() => (
                  this.setNewAirFreightData('narcoticsSupply'),
                  this.calculatePrice('narcoticsSupply')
                )}
                underlayColor='rgba(61,88,117, 0)'>
                <View>
                  <AnimatedCircularProgress
                    size={40}
                    width={3}
                    fill={this.state.narcoticsSupply * 2}
                    tintColor='orange'
                    backgroundColor='#E6E6E6'
                    rotation={0} />

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
                      {this.state.narcoticsSupply} / 50 </Text>
                  </View>
                </View>
              </TouchableHighlight>
            </View>

            <View style={{
              alignItems: 'center',
              justifyContent: 'center'
            }}>

              <Text style={styles.smallerText}>
                ART & ANTIQUES {'\n'}
                ($ {this.state.artPrice})
              </Text>

              <TouchableHighlight
                onPress={() => this.state.artSupply == 50 ? ''
                  : (
                    this.setState(function (prevState, props) {
                      return {
                        artSupply: prevState.artSupply + 1
                      }
                    }),
                    Vibration.vibrate(50)
                  )
                }
                onLongPress={() => (
                  this.setState({ artSupply: 0 }),
                  Vibration.vibrate(100)
                )}
                onHideUnderlay={() => (
                  this.setNewAirFreightData('artSupply'),
                  this.calculatePrice('artSupply')
                )}
                underlayColor='rgba(61,88,117, 0)'>
                <View>
                  <AnimatedCircularProgress
                    size={40}
                    width={3}
                    fill={this.state.artSupply * 2}
                    tintColor='orange'
                    backgroundColor='#E6E6E6'
                    rotation={0} />

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
                      {this.state.artSupply} / 50 </Text>
                  </View>
                </View>
              </TouchableHighlight>
            </View>

          </View>


          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: x / 4.5,
          }}>

            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: y / 20
            }}>

              <Text style={styles.smallerText}>
                CHEMICALS {'\n'}
                ($ {this.state.chemicalPrice})
            </Text>

              <TouchableHighlight
                onPress={() => this.state.chemicalSupply == 50 ? ''
                  : (
                    this.setState(function (prevState, props) {
                      return {
                        chemicalSupply: prevState.chemicalSupply + 1
                      }
                    }),
                    Vibration.vibrate(50)
                  )
                }
                onLongPress={() => (
                  this.setState({ chemicalSupply: 0 }),
                  Vibration.vibrate(100)
                )}
                onHideUnderlay={() => (
                  this.setNewAirFreightData('chemicalSupply'),
                  this.calculatePrice('chemicalSupply')
                )}
                underlayColor='rgba(61,88,117, 0)'>
                <View>
                  <AnimatedCircularProgress
                    size={40}
                    width={3}
                    fill={this.state.chemicalSupply * 2}
                    tintColor='orange'
                    backgroundColor='#E6E6E6'
                    rotation={0} />

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
                      {this.state.chemicalSupply} / 50 </Text>
                  </View>
                </View>
              </TouchableHighlight>

            </View>

            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>

              <Text style={styles.smallerText}>
                JEWELRY {'\n'}
                ($ {this.state.jewelryPrice})
            </Text>

              <TouchableHighlight
                onPress={() => this.state.jewelrySupply == 50 ? ''
                  : (
                    this.setState(function (prevState, props) {
                      return {
                        jewelrySupply: prevState.jewelrySupply + 1
                      }
                    }),
                    Vibration.vibrate(50)
                  )
                }
                onLongPress={() => (
                  this.setState({ jewelrySupply: 0 }),
                  Vibration.vibrate(100)
                )}
                onHideUnderlay={() => (
                  this.setNewAirFreightData('jewelrySupply'),
                  this.calculatePrice('jewelrySupply')
                )}
                underlayColor='rgba(61,88,117, 0)'>
                <View>
                  <AnimatedCircularProgress
                    size={40}
                    width={3}
                    fill={this.state.jewelrySupply * 2}
                    tintColor='orange'
                    backgroundColor='#E6E6E6'
                    rotation={0} />

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
                      {this.state.jewelrySupply} / 50 </Text>
                  </View>
                </View>
              </TouchableHighlight>

            </View>

          </View>


          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: x / 4.5,
          }}>

            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: y / 20
            }}>

              <Text style={styles.smallerText}>
                MEDICAL {'\n'}
                ($ {this.state.medicalPrice})
            </Text>

              <TouchableHighlight
                onPress={() => this.state.medicalSupply == 50 ? ''
                  : (
                    this.setState(function (prevState, props) {
                      return {
                        medicalSupply: prevState.medicalSupply + 1
                      }
                    }),
                    Vibration.vibrate(50)
                  )
                }
                onLongPress={() => (
                  this.setState({ medicalSupply: 0 }),
                  Vibration.vibrate(100)
                )}
                onHideUnderlay={() => (
                  this.setNewAirFreightData('medicalSupply'),
                  this.calculatePrice('medicalSupply')
                )}
                underlayColor='rgba(61,88,117, 0)'>
                <View>
                  <AnimatedCircularProgress
                    size={40}
                    width={3}
                    fill={this.state.medicalSupply * 2}
                    tintColor='orange'
                    backgroundColor='#E6E6E6'
                    rotation={0} />

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
                      {this.state.medicalSupply} / 50 </Text>
                  </View>
                </View>
              </TouchableHighlight>

            </View>

            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>

              <Text style={styles.smallerText}>
                TOBACCO {'\n'}
                ($ {this.state.tobaccoPrice})
            </Text>

              <TouchableHighlight
                onPress={() => this.state.tobaccoSupply == 50 ? ''
                  : (
                    this.setState(function (prevState, props) {
                      return {
                        tobaccoSupply: prevState.tobaccoSupply + 1
                      }
                    }),
                    Vibration.vibrate(50)
                  )
                }
                onLongPress={() => (
                  this.setState({ tobaccoSupply: 0 }),
                  Vibration.vibrate(100)
                )}
                onHideUnderlay={() => (
                  this.setNewAirFreightData('tobaccoSupply'),
                  this.calculatePrice('tobaccoSupply')
                )}
                underlayColor='rgba(61,88,117, 0)'>
                <View>
                  <AnimatedCircularProgress
                    size={40}
                    width={3}
                    fill={this.state.tobaccoSupply * 2}
                    tintColor='orange'
                    backgroundColor='#E6E6E6'
                    rotation={0} />

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
                      {this.state.tobaccoSupply} / 50 </Text>
                  </View>
                </View>
              </TouchableHighlight>
            </View>
          </View>

          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: x / 4.5,
          }}>

            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: y / 20
            }}>

              <Text style={styles.smallerText}>
                ANIMAL {'\n'}
                ($ {this.state.animalPrice})
            </Text>

              <TouchableHighlight
                onPress={() => this.state.animalSupply == 50 ? ''
                  : (
                    this.setState(function (prevState, props) {
                      return {
                        animalSupply: prevState.animalSupply + 1
                      }
                    }),
                    Vibration.vibrate(50)
                  )
                }
                onLongPress={() => (
                  this.setState({ animalSupply: 0 }),
                  Vibration.vibrate(100)
                )}
                onHideUnderlay={() => (
                  this.setNewAirFreightData('animalSupply'),
                  this.calculatePrice('animalSupply')
                )}
                underlayColor='rgba(61,88,117, 0)'>
                <View>
                  <AnimatedCircularProgress
                    size={40}
                    width={3}
                    fill={this.state.animalSupply * 2}
                    tintColor='#ffab00'
                    backgroundColor='#E6E6E6'
                    rotation={0} />

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
                      {this.state.animalSupply} / 50 </Text>
                  </View>
                </View>
              </TouchableHighlight>

            </View>

            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>

              <Text style={styles.smallerText}>
                COUNTERFEIT {'\n'}
                ($ {this.state.counterfeitPrice})
            </Text>

              <TouchableHighlight
                onPress={() => this.state.counterfeitSupply == 50 ? ''
                  : (
                    this.setState(function (prevState, props) {
                      return {
                        counterfeitSupply: prevState.counterfeitSupply + 1
                      }
                    }),
                    Vibration.vibrate(50)
                  )
                }
                onLongPress={() => (
                  this.setState({ counterfeitSupply: 0 }),
                  Vibration.vibrate(100)
                )}
                onHideUnderlay={() => (
                  this.setNewAirFreightData('counterfeitSupply'),
                  this.calculatePrice('counterfeitSupply')
                )}
                underlayColor='rgba(61,88,117, 0)'>
                <View>
                  <AnimatedCircularProgress
                    size={40}
                    width={3}
                    fill={this.state.counterfeitSupply * 2}
                    tintColor='#ffab00'
                    backgroundColor='#E6E6E6'
                    rotation={0} />

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
                      {this.state.counterfeitSupply} / 50 </Text>
                  </View>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Settings;
