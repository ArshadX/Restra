import {StyleSheet, Dimensions} from 'react-native';

export const textInputStyle = StyleSheet.create({
  containerDark: {
    width: Dimensions.get('window').width - 40,
    backgroundColor: '#abb2b9',
    borderRadius: 100,
    marginTop: 5,
    flexDirection: 'row',
  },
  containerLight: {
    width: Dimensions.get('window').width - 40,
    backgroundColor: '#ebedef',
    borderRadius: 100,

    borderWidth: 0.2,
    elevation: 1,
  },
  alignment: {
    position: 'absolute',
    alignSelf: 'center',
    left: Dimensions.get('window').width - 80,
  },
});

export const signInStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleLight: {
    fontSize: 30,
    color: '#000000',
  },
  titleDark: {
    fontSize: 30,
    color: '#ffffff',
  },
  textarea: {
    marginBottom: 10,
    marginTop: 10,
  },
  textareaLightTheme: {
    color: '#000000',
    alignItems: 'stretch',
  },
  textareaDarkTheme: {
    color: '#000000',
    flex: 1,
    borderRadius: 100,
    marginLeft: 15,
  },
  text: {
    color: '#ffffff',
  },
});

export const buttonStyles = StyleSheet.create({
  pressableStyle: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 120,
    marginRight: 120,
    borderRadius: 6,
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonText: {
    color: '#ffffff',
  },
  pressIn: {
    backgroundColor: '#0000cd',
  },
  pressOut: {
    backgroundColor: '#4169e1',
  },
});
export const defaultStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#000000',
  },
  title: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 40,
  },
  text: {
    color: '#000000',
  },
  textDark: {
    color: '#ffffff',
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  footerContainer: {
    flex: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 10,
    padding: 30,
    backgroundColor: '#303030',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderRadius: 60,
    overflow: 'hidden',
    borderColor: '#696969',
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#0000ff',
    marginBottom: 30,
    padding: 5,
  },
  listTitles: {
    fontWeight: 'bold',
    fontFamily: 'cursive sens-serif',
    color: '#000000',
  },
  titleDark: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 40,
  },
  textareaLightTheme: {
    color: '#000000',
  },
  textareaDarkTheme: {
    color: '#000000',
  },
  helperText: {
    color: '#FF0000',
  },
  helperTextContainer: {
    marginLeft: 10,
    marginBottom: 5,
    flexDirection: 'row',
  },
  mapcontainer: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contentTitle: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: 'sens-serif',
  },
});
