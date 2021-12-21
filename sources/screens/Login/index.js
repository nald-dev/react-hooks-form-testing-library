import React from 'react';
import {useForm} from 'react-hook-form';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Input from './components/Input';

function Login() {
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm({mode: 'onChange'});

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Input
          name="username"
          control={control}
          placeholder="Username"
          testID="username-input"
        />

        <View style={styles.verticalSpacing20} />

        <Input
          name="password"
          control={control}
          placeholder="Password"
          testID="password-input"
        />

        <TouchableOpacity
          testID="login-button"
          disabled={!isValid}
          style={[
            styles.loginButtonContainer,
            isValid
              ? styles.loginButtonContainerEnable
              : styles.loginButtonContainerDisable,
          ]}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* <Button>Hey</Button> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    flex: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  verticalSpacing20: {
    height: 20,
  },
  loginButtonContainer: {
    borderRadius: 10,
    marginTop: 40,
    padding: 10,
  },
  loginButtonContainerEnable: {
    backgroundColor: 'green',
  },
  loginButtonContainerDisable: {
    backgroundColor: 'gray',
  },
  loginButtonText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Login;
