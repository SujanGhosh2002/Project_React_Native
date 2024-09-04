import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../Redux/hooks';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {showPassword} from '../Redux/features/toggle/togglePasswordSlice';
import Footer from '../components/Footer';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Sign_In = () => {
  // const [show, setShow] = useState(false);
  const user = useAppSelector(state => state.users);
  const isPasswordVisible = useAppSelector(
    state => state.password.isPasswordVisible,
  );
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.heading}>Sign In</Text>
        <View style={styles.headingText}>
          <Text style={styles.headingTextLeft}>Don't have an account? </Text>
          <Text
            style={styles.headingTextRight}
            onPress={() => navigation.navigate('Sign_Up')}>
            Sign Up
          </Text>
        </View>
      </View>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={SignInSchema}
        onSubmit={values => {
          console.log(values);
          if (
            values.email === user.email &&
            values.password === user.password
          ) {
            navigation.navigate('Main');
          } else {
            Alert.alert('Invalid email or password');
          }
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.container}>
            <View>
              <Icon
                style={styles.logo}
                name="mail"
                size={30}
                color={'skyblue'}
              />
              <TextInput
                placeholder="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                cursorColor={'skyblue'}
                placeholderTextColor={'skyblue'}
                style={styles.input}
              />
            </View>
            {touched.email && errors.email ? (
              <Text style={{color: 'red'}}>{errors.email}</Text>
            ) : null}
            <View>
              <Icon
                style={styles.logo}
                name="password"
                size={30}
                color={'skyblue'}
              />
              <TextInput
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={isPasswordVisible}
                cursorColor={'skyblue'}
                placeholderTextColor={'skyblue'}
                style={styles.input}
              />
              <TouchableOpacity
                style={styles.hideLogo}
                onPress={() => dispatch(showPassword())}>
                <Icon
                  name={isPasswordVisible ? 'visibility-off' : 'visibility'}
                  size={30}
                  color={'skyblue'}
                />
              </TouchableOpacity>
            </View>
            {touched.password && errors.password ? (
              <Text style={{color: 'red'}}>{errors.password}</Text>
            ) : null}
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <Footer />
    </View>
  );
};

export default Sign_In;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dadada',
  },
  container: {
    width: '80%',
  },
  heading: {
    color: 'skyblue',
    fontSize: 30,
    textAlign: 'center',
  },
  headingText: {
    flexDirection: 'row',
  },
  headingTextLeft: {},
  headingTextRight: {
    fontWeight: 'bold',
  },
  input: {
    marginTop: 8,
    paddingHorizontal: 8,
    fontSize: 20,
    borderColor: '#0073b1',
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: '#0073b1',
    elevation: 1,
    shadowOpacity: 1,
    paddingLeft: 35,
  },
  button: {
    marginVertical: 8,
    paddingVertical: 7,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0073b1',
    shadowColor: 'black',
    elevation: 5,
    shadowOpacity: 1,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 25,
    textTransform: 'capitalize',
  },
  logo: {
    position: 'absolute',
    top: 18,
    left: 5,
  },
  hideLogo: {
    position: 'absolute',
    top: 18,
    right: 5,
  },
});
