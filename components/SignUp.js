import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    TextInput,
    Button,
} from 'react-native'
import { Formik, Field } from 'formik'
import * as yup from 'yup'
import { CustomInput } from "./CustomInput";

const SignUp = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <View style={styles.signupContainer}>
                    <Text>Sign Up Screen</Text>
                    <Formik
                        initialValues={{
                            fullName: '',
                            email: '',
                            phoneNumber: '',
                            password: '',
                            confirmPassword: '',
                        }}
                        onSubmit={values => console.log(values)}
                    >
                        {({ handleSubmit, isValid }) => (
                            <>
                                <Field
                                    component={CustomInput}
                                    name="fullName"
                                    placeholder="Full Name"
                                />
                                <Field
                                    component={CustomInput}
                                    name="email"
                                    placeholder="Email Address"
                                    keyboardType="email-address"
                                />
                                <Field
                                    component={CustomInput}
                                    name="phoneNumber"
                                    placeholder="Phone Number"
                                    keyboardType="numeric"
                                />
                                <Field
                                    component={CustomInput}
                                    name="password"
                                    placeholder="Password"
                                    secureTextEntry
                                />
                                <Field
                                    component={CustomInput}
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    secureTextEntry
                                />

                                <Button
                                    onPress={handleSubmit}
                                    title="SIGN UP"
                                    disabled={!isValid}
                                />
                            </>
                        )}
                    </Formik>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupContainer: {
        width: '80%',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        elevation: 10,
        backgroundColor: '#e6e6e6'
    },
})
export default SignUp