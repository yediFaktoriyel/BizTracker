import React, {Fragment} from "react";
import {
  ActivityIndicator,
  Alert,
  AppState,
  AsyncStorage,
  Button,
  Container,
  Dimensions,
  Header,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  Vibration,
  View
} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import styles from "../styles";
import SupplyContainer from "./supplyContainer"

const x = Dimensions.get("window").width;
const y = Dimensions.get("window").height;

class AirFreight extends React.Component {

  constructor() {
    super();
    this.state = {

      loadingAnimation: true,
      isFirstEnterance: true,

      narcoticsSupply: 0,
      chemicalSupply: 0,
      medicalSupply: 0,

      animalSupply: 0,
      artSupply: 0,
      jewelrySupply: 0,

      counterfeitSupply: 0,
      tobaccoSupply: 0,

      narcoticsPrice: 0,
      chemicalPrice: 0,
      medicalPrice: 0,

      animalPrice: 0,
      artPrice: 0,
      jewelryPrice: 0,

      counterfeitPrice: 0,
      tobaccoPrice: 0,
    };

  }

  calculatePrice(supplyType) {

    switch (supplyType) {

      case 'narcoticsSupply': {
        this.setState({
          narcoticsPrice:
            (this.state.narcoticsSupply * 10000
              + (this.state.narcoticsSupply * 10000
                * (Math.floor(this.state.narcoticsSupply / 25) * 35 / 100)
              ))
        })
        break;
      }
      case 'chemicalSupply':
        this.setState({
          chemicalPrice:
            (this.state.chemicalSupply * 10000
              + (this.state.chemicalSupply * 10000
                * (Math.floor(this.state.chemicalSupply / 25) * 35 / 100)
              ))
        })
        break;

      case 'medicalSupply':
        this.setState({
          medicalPrice:
            (this.state.medicalSupply * 10000
              + (this.state.medicalSupply * 10000
                * (Math.floor(this.state.medicalSupply / 25) * 35 / 100)
              ))
        })
        break;

      case 'animalSupply':
        this.setState({
          animalPrice:
            (this.state.animalSupply * 10000
              + (this.state.animalSupply * 10000
                * (Math.floor(this.state.animalSupply / 10) * 12 / 100)
              ))
        })
        break;

      case 'artSupply':
        this.setState({
          artPrice:
            (this.state.artSupply * 10000
              + (this.state.artSupply * 10000
                * (Math.floor(this.state.artSupply / 10) * 12 / 100)
              ))
        })
        break;

      case 'jewelrySupply':
        this.setState({
          jewelryPrice:
            (this.state.jewelrySupply * 10000
              + (this.state.jewelrySupply * 10000
                * (Math.floor(this.state.jewelrySupply / 10) * 12 / 100)
              ))
        })
        break;

      case 'counterfeitSupply':
        this.setState({
          counterfeitPrice:
            (this.state.counterfeitSupply * 10000
              + (this.state.counterfeitSupply * 10000
                * (Math.floor(this.state.counterfeitSupply / 5) * 5 / 100)
              ))
        })
        break;

      case 'tobaccoSupply':
        this.setState({
          tobaccoPrice:
            (this.state.tobaccoSupply * 10000
              + (this.state.tobaccoSupply * 10000
                * (Math.floor(this.state.tobaccoSupply / 5) * 5 / 100)
              ))
        })
        break;
    }

  }

  async setNewAirFreightData(supplyType) {

    try {
      switch (supplyType) {
        case 'narcoticsSupply':
          await AsyncStorage.setItem('narcoticsSupply', this.state.narcoticsSupply.toString());
          await AsyncStorage.setItem('narcoticsPrice', this.state.narcoticsPrice.toString());
          break;
        case 'chemicalSupply':
          await AsyncStorage.setItem('chemicalSupply', this.state.chemicalSupply.toString());
          await AsyncStorage.setItem('chemicalPrice', this.state.chemicalPrice.toString());
          break;
        case 'medicalSupply':
          await AsyncStorage.setItem('medicalSupply', this.state.medicalSupply.toString());
          await AsyncStorage.setItem('medicalPrice', this.state.medicalPrice.toString());
          break;

        case 'animalSupply':
          await AsyncStorage.setItem('animalSupply', this.state.animalSupply.toString());
          await AsyncStorage.setItem('animalPrice', this.state.animalPrice.toString());
          break;
        case 'artSupply':
          await AsyncStorage.setItem('artSupply', this.state.artSupply.toString());
          await AsyncStorage.setItem('artPrice', this.state.artPrice.toString());
          break;
        case 'jewelrySupply':
          await AsyncStorage.setItem('jewelrySupply', this.state.jewelrySupply.toString());
          await AsyncStorage.setItem('jewelryPrice', this.state.jewelryPrice.toString());
          break;

        case 'counterfeitSupply':
          await AsyncStorage.setItem('counterfeitSupply', this.state.counterfeitSupply.toString());
          await AsyncStorage.setItem('counterfeitPrice', this.state.counterfeitPrice.toString());
          break;
        case 'tobaccoSupply':
          await AsyncStorage.setItem('tobaccoSupply', this.state.tobaccoSupply.toString());
          await AsyncStorage.setItem('tobaccoPrice', this.state.tobaccoPrice.toString());
          break;

      }
    } catch (error) {
      Alert.alert('An error has occured while saving user data.')
    }
  }

  async getAirFreightData() {

    try {

      const narcotics = await AsyncStorage.getItem('narcoticsSupply');
      const narcoticsP = await AsyncStorage.getItem('narcoticsPrice');

      const chemical = await AsyncStorage.getItem('chemicalSupply');
      const chemicalP = await AsyncStorage.getItem('chemicalPrice');

      const medical = await AsyncStorage.getItem('medicalSupply');
      const medicalP = await AsyncStorage.getItem('medicalPrice');

      const animal = await AsyncStorage.getItem('animalSupply');
      const animalP = await AsyncStorage.getItem('animalPrice');

      const art = await AsyncStorage.getItem('artSupply');
      const artP = await AsyncStorage.getItem('artPrice');

      const jewelry = await AsyncStorage.getItem('jewelrySupply');
      const jewelryP = await AsyncStorage.getItem('jewelryPrice');

      const counterfeit = await AsyncStorage.getItem('counterfeitSupply');
      const counterfeitP = await AsyncStorage.getItem('counterfeitPrice');

      const tobacco = await AsyncStorage.getItem('tobaccoSupply');
      const tobaccoP = await AsyncStorage.getItem('tobaccoPrice');

      this.setState({ narcoticsSupply: parseFloat(narcotics) })
      this.setState({ narcoticsPrice: parseFloat(narcoticsP) })

      this.setState({ chemicalSupply: parseFloat(chemical) })
      this.setState({ chemicalPrice: parseFloat(chemicalP) })

      this.setState({ medicalSupply: parseFloat(medical) })
      this.setState({ medicalPrice: parseFloat(medicalP) })

      this.setState({ animalSupply: parseFloat(animal) })
      this.setState({ animalPrice: parseFloat(animalP) })

      this.setState({ artSupply: parseFloat(art) })
      this.setState({ artPrice: parseFloat(artP) })

      this.setState({ jewelrySupply: parseFloat(jewelry) })
      this.setState({ jewelryPrice: parseFloat(jewelryP) })

      this.setState({ counterfeitSupply: parseFloat(counterfeit) })
      this.setState({ counterfeitPrice: parseFloat(counterfeitP) })

      this.setState({ tobaccoSupply: parseFloat(tobacco) })
      this.setState({ tobaccoPrice: parseFloat(tobaccoP) },

        this.setState({ loadingAnimation: false }))

    } catch (error) {
      Alert.alert('An error has occured while retireving user data.')
    }
  }

  async componentDidMount() {

    const isFirst = await AsyncStorage.getItem('isFirstEnterance');

    isFirst == null ? (

      this.setState({ isFirstEnterance: false }),
      await AsyncStorage.setItem('isFirstEnterance', 'false'),

      this.setNewAirFreightData('narcoticsSupply'),
      this.setNewAirFreightData('chemicalSupply'),
      this.setNewAirFreightData('medicalSupply'),
      this.setNewAirFreightData('animalSupply'),
      this.setNewAirFreightData('artSupply'),
      this.setNewAirFreightData('jewelrySupply'),
      this.setNewAirFreightData('counterfeitSupply'),
      this.setNewAirFreightData('tobaccoSupply'),
      this.setState({ loadingAnimation: false })

    ) :
      (
        this.getAirFreightData()
      )
  }

  render () {
    return (
      <View style = {{
        flex: 1,
        flexDirection: 'column',
        height: y / 3
      }}>

        <View style = {{
          flex: 1,
          flexDirection: 'row'
        }}>
          <View style = {{
            flex: 1,
          }}>
            <SupplyContainer
            marginBottom = {20}
            title = 'NARCOTICS'
            supplyPrice = {this.state.narcoticsPrice}
            supplyAmount = {this.state.narcoticsSupply}
            onPress = {() => this.state.narcoticsSupply == 50 ? ''
              : (
                this.setState(function (prevState, props) {
                  return {
                    narcoticsSupply: prevState.narcoticsSupply + 1
                  }
                }),
                Vibration.vibrate(50)
              )
            }
            onLongPress = {() => (
              this.setState({ narcoticsSupply: 0 }),
              Vibration.vibrate(100)
            )}
            onHideUnderlay = {() => (
              this.setNewAirFreightData('narcoticsSupply'),
              this.calculatePrice('narcoticsSupply')
            )}/>
          </View>

          <View style = {{
            flex: 1,
          }}>
            <SupplyContainer
            marginBottom = {20}
            title = 'NARCOTICS'
            supplyPrice = {this.state.narcoticsPrice}
            supplyAmount = {this.state.narcoticsSupply}
            onPress = {() => this.state.narcoticsSupply == 50 ? ''
              : (
                this.setState(function (prevState, props) {
                  return {
                    narcoticsSupply: prevState.narcoticsSupply + 1
                  }
                }),
                Vibration.vibrate(50)
              )
            }
            onLongPress = {() => (
              this.setState({ narcoticsSupply: 0 }),
              Vibration.vibrate(100)
            )}
            onHideUnderlay = {() => (
              this.setNewAirFreightData('narcoticsSupply'),
              this.calculatePrice('narcoticsSupply')
            )}/>
          </View>

          <View style = {{
            flex: 1,
          }}>
            <SupplyContainer
            marginBottom = {20}
            title = 'NARCOTICS'
            supplyPrice = {this.state.narcoticsPrice}
            supplyAmount = {this.state.narcoticsSupply}
            onPress = {() => this.state.narcoticsSupply == 50 ? ''
              : (
                this.setState(function (prevState, props) {
                  return {
                    narcoticsSupply: prevState.narcoticsSupply + 1
                  }
                }),
                Vibration.vibrate(50)
              )
            }
            onLongPress = {() => (
              this.setState({ narcoticsSupply: 0 }),
              Vibration.vibrate(100)
            )}
            onHideUnderlay = {() => (
              this.setNewAirFreightData('narcoticsSupply'),
              this.calculatePrice('narcoticsSupply')
            )}/>
          </View>

          <View style = {{
            flex: 1,
          }}>
            <SupplyContainer
            marginBottom = {20}
            title = 'NARCOTICS'
            supplyPrice = {this.state.narcoticsPrice}
            supplyAmount = {this.state.narcoticsSupply}
            onPress = {() => this.state.narcoticsSupply == 50 ? ''
              : (
                this.setState(function (prevState, props) {
                  return {
                    narcoticsSupply: prevState.narcoticsSupply + 1
                  }
                }),
                Vibration.vibrate(50)
              )
            }
            onLongPress = {() => (
              this.setState({ narcoticsSupply: 0 }),
              Vibration.vibrate(100)
            )}
            onHideUnderlay = {() => (
              this.setNewAirFreightData('narcoticsSupply'),
              this.calculatePrice('narcoticsSupply')
            )}/>
          </View>
        </View>

        <View style = {{
          flex: 1,
          flexDirection: 'row'
        }}>
          <View style = {{
            flex: 1,
          }}>
            <SupplyContainer
            marginBottom = {20}
            title = 'NARCOTICS'
            supplyPrice = {this.state.narcoticsPrice}
            supplyAmount = {this.state.narcoticsSupply}
            onPress = {() => this.state.narcoticsSupply == 50 ? ''
              : (
                this.setState(function (prevState, props) {
                  return {
                    narcoticsSupply: prevState.narcoticsSupply + 1
                  }
                }),
                Vibration.vibrate(50)
              )
            }
            onLongPress = {() => (
              this.setState({ narcoticsSupply: 0 }),
              Vibration.vibrate(100)
            )}
            onHideUnderlay = {() => (
              this.setNewAirFreightData('narcoticsSupply'),
              this.calculatePrice('narcoticsSupply')
            )}/>
          </View>

          <View style = {{
            flex: 1,
          }}>
            <SupplyContainer
            marginBottom = {20}
            title = 'NARCOTICS'
            supplyPrice = {this.state.narcoticsPrice}
            supplyAmount = {this.state.narcoticsSupply}
            onPress = {() => this.state.narcoticsSupply == 50 ? ''
              : (
                this.setState(function (prevState, props) {
                  return {
                    narcoticsSupply: prevState.narcoticsSupply + 1
                  }
                }),
                Vibration.vibrate(50)
              )
            }
            onLongPress = {() => (
              this.setState({ narcoticsSupply: 0 }),
              Vibration.vibrate(100)
            )}
            onHideUnderlay = {() => (
              this.setNewAirFreightData('narcoticsSupply'),
              this.calculatePrice('narcoticsSupply')
            )}/>
          </View>

          <View style = {{
            flex: 1,
          }}>
            <SupplyContainer
            marginBottom = {20}
            title = 'NARCOTICS'
            supplyPrice = {this.state.narcoticsPrice}
            supplyAmount = {this.state.narcoticsSupply}
            onPress = {() => this.state.narcoticsSupply == 50 ? ''
              : (
                this.setState(function (prevState, props) {
                  return {
                    narcoticsSupply: prevState.narcoticsSupply + 1
                  }
                }),
                Vibration.vibrate(50)
              )
            }
            onLongPress = {() => (
              this.setState({ narcoticsSupply: 0 }),
              Vibration.vibrate(100)
            )}
            onHideUnderlay = {() => (
              this.setNewAirFreightData('narcoticsSupply'),
              this.calculatePrice('narcoticsSupply')
            )}/>
          </View>

          <View style = {{
            flex: 1,
          }}>
            <SupplyContainer
            marginBottom = {20}
            title = 'NARCOTICS'
            supplyPrice = {this.state.narcoticsPrice}
            supplyAmount = {this.state.narcoticsSupply}
            onPress = {() => this.state.narcoticsSupply == 50 ? ''
              : (
                this.setState(function (prevState, props) {
                  return {
                    narcoticsSupply: prevState.narcoticsSupply + 1
                  }
                }),
                Vibration.vibrate(50)
              )
            }
            onLongPress = {() => (
              this.setState({ narcoticsSupply: 0 }),
              Vibration.vibrate(100)
            )}
            onHideUnderlay = {() => (
              this.setNewAirFreightData('narcoticsSupply'),
              this.calculatePrice('narcoticsSupply')
            )}/>
          </View>
        </View>
      </View>
    )
  }

}

export default AirFreight;
