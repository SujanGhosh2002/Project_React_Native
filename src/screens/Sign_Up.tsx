import {StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../Redux/hooks';
import {setUser} from '../Redux/features/users/usersSlice';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {showPassword} from '../Redux/features/toggle/togglePasswordSlice';
import Footer from '../components/Footer';
import Sign_In from './Sign_In';

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 word')
    .required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Phone number must only contain digits')
    .min(10, 'Phone number must be at least 10 digits')
    .required('Phone number is required'),
  address: Yup.string()
    .min(5, 'Address must be at least 5 characters')
    .required('Address is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const Sign_Up = () => {
  const user = useAppSelector(state => state.users);
  const dispatch = useAppDispatch();
  const isPasswordVisible = useAppSelector(
    state => state.password.isPasswordVisible,
  );

  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.heading}>Sign Up</Text>
        <View style={styles.headingText}>
          <Text style={styles.headingTextLeft}>Already have account? </Text>
          <Text
            style={styles.headingTextRight}
            onPress={() => navigation.navigate('Sign_In')}>
            Sign In
          </Text>
        </View>
      </View>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          address: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={values => {
          console.warn(values);
          dispatch(
            setUser({
              name: values.name,
              email: values.email,
              phone: values.phone,
              address: values.address,
              password: values.password,
            }),
          );
          navigation.navigate(Sign_In);
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
                name="man"
                size={30}
                color={'skyblue'}
              />
              <TextInput
                placeholder="Name"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                cursorColor={'skyblue'}
                placeholderTextColor={'skyblue'}
                style={styles.input}
              />
            </View>
            {touched.name && errors.name ? (
              <Text style={{color: 'red'}}>{errors.name}</Text>
            ) : null}
            <View>
              <Icon
                style={styles.logo}
                name="email"
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
                name="phone"
                size={30}
                color={'skyblue'}
              />
              <TextInput
                placeholder="Phone"
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
                keyboardType="numeric"
                cursorColor={'skyblue'}
                placeholderTextColor={'skyblue'}
                style={styles.input}
              />
            </View>
            {touched.phone && errors.phone ? (
              <Text style={{color: 'red'}}>{errors.phone}</Text>
            ) : null}
            <View>
              <Icon
                style={styles.logo}
                name="home"
                size={30}
                color={'skyblue'}
              />
              <TextInput
                placeholder="Address"
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                value={values.address}
                cursorColor={'skyblue'}
                placeholderTextColor={'skyblue'}
                style={styles.input}
              />
            </View>
            {touched.address && errors.address ? (
              <Text style={{color: 'red'}}>{errors.address}</Text>
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
            <View>
              <Icon
                style={styles.logo}
                name="password"
                size={30}
                color={'skyblue'}
              />
              <TextInput
                placeholder="Confirm Password"
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry
                cursorColor={'skyblue'}
                placeholderTextColor={'skyblue'}
                style={styles.input}
              />
            </View>
            {touched.confirmPassword && errors.confirmPassword ? (
              <Text style={{color: 'red'}}>{errors.confirmPassword}</Text>
            ) : null}
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <Footer />
    </View>
  );
};

export default Sign_Up;

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
    color: '#0073b1',
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
    // elevation: 1,
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
