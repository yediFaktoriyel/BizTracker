const React = require("react-native");
const { Platform, Dimensions } = React;
import {Colors} from 'react-native/Libraries/NewAppScreen';

const y = Dimensions.get("window").height;
const x = Dimensions.get("window").width;

export default {
  badgeText: {
    fontSize: Platform.OS === "ios" ? 13 : 11,
    fontWeight: "400",
    textAlign: "center",
    marginTop: Platform.OS === "android" ? -3 : undefined
  },
  body: {
    backgroundColor: Colors.white,
  },
  drawerCover: {
    height: y / 3.5,
    width: null,
    position: "relative",
    marginBottom: 10
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  highlight: {
    fontWeight: '700',
  },
  Images: {
    position: "absolute",
    width: x,
    height: y / 2,
    resizeMode: "center"
  },
  scrollView: {
    backgroundColor: 'black',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  sectionTitle: {
    color: Colors.white,
    marginTop: 10,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  smallerText: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 10,
    marginBottom: 7,
    marginTop: 7,
    color: '#E6E6E6',
    textAlign: 'center'
  },
  text: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 15,
    marginBottom: 7,
    marginTop: 7,
    color: '#E6E6E6'
  },
}
