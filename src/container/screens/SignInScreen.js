import React from 'react';
import {View, Text, Pressable, StatusBar, Animated} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/Button';
import HelperText from '../../components/HelperText';
import Text_Input from '../../components/Text_Input';
import CustomModal from '../../components/CustomModal';
import {
  changeEmail,
  changePassword,
  passwordValidationOnBlur,
} from '../../lib/validation/validation';
import {defaultStyle, signInStyle, textInputStyle} from '../../styles/styles';
import {
  fetchUsersFailure,
  login,
  requestFailed,
} from '../../redux/user/userActions';
import {useFocusEffect} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const SignInScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isValidEmail, setisValidEmail] = React.useState(true);
  const [isValidPassword, setisValidPassword] = React.useState(true);
  const [isBlankemail, setisBlankemail] = React.useState(false);
  const [isBlankpassword, setisBlankpassword] = React.useState(false);
  const [isSecureTextEntry, setisSecureTextEntry] = React.useState(true);
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user);
  const flexAnimate = React.useRef(new Animated.Value(0)).current;
  useFocusEffect(
    React.useCallback(() => {
      Animated.timing(flexAnimate, {
        toValue: 5,
        duration: 500,
        useNativeDriver: false,
      }).start();
      return () => {
        Animated.timing(flexAnimate, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }).start();
      };
    }, []),
  );
  const submitForum = e => {
    e.preventDefault();
    if (email !== '' && password !== '') {
      dispatch(login({password: password, email: email}));
    } else if (email === '' && password !== '') {
      setisBlankemail(true);
    } else if (email !== '' && password === '') {
      setisBlankpassword(true);
    } else {
      setisBlankemail(true);
      setisBlankpassword(true);
    }
  };

  return (
    <View style={[signInStyle.container, {backgroundColor: '#000000'}]}>
      <CustomModal
        loadingIndicator={true}
        text="loading"
        visible={userData.isloading}
        animatedType="slide"
        onRequestClose={() => {
          const controller = new AbortController();
          controller.abort();
          dispatch(fetchUsersFailure('Request Failed'));
        }}
      />
      <CustomModal
        text={`${userData.error}`}
        visible={userData.requestFailed}
        animatedType="slide"
        onRequestClose={() => dispatch(requestFailed())}
      />
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <View style={defaultStyle.headerContainer}>
        <Text style={signInStyle.titleDark}>ResFinder</Text>
      </View>
      <Animated.View
        style={[defaultStyle.footerContainer, {flexGrow: flexAnimate}]}>
        <Text style={defaultStyle.contentTitle}>Email</Text>
        <View style={textInputStyle.containerDark}>
          <Text_Input
            onChangeText={e =>
              changeEmail(e, setEmail, setisValidEmail, setisBlankemail)
            }
            placeholder=" email.."
            style={signInStyle.textareaDarkTheme}
          />
        </View>
        <HelperText isValid={isValidEmail} isBlank={isBlankemail} />
        <Text style={defaultStyle.contentTitle}>Password</Text>
        <View style={textInputStyle.containerDark}>
          <Text_Input
            onChangeText={e =>
              changePassword(
                e,
                setPassword,
                setisValidPassword,
                setisBlankpassword,
              )
            }
            placeholder=" e.g: abc@1234"
            style={signInStyle.textareaDarkTheme}
            onBlur={() =>
              passwordValidationOnBlur(password, setisBlankpassword)
            }
            Secure={isSecureTextEntry}
          />
          <View style={textInputStyle.alignment}>
            {isSecureTextEntry ? (
              <Icon
                name="eye-off"
                color="#000000"
                size={25}
                onPress={() => setisSecureTextEntry(!isSecureTextEntry)}
              />
            ) : (
              <Icon
                name="eye"
                color="#000000"
                size={25}
                onPress={() => setisSecureTextEntry(!isSecureTextEntry)}
              />
            )}
          </View>
        </View>
        <HelperText isValid={isValidPassword} isBlank={isBlankpassword} />

        <Button title="Login" onPress={submitForum} />
      </Animated.View>
    </View>
  );
};

export default SignInScreen;
