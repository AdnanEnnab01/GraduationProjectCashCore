import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Login = () => {
  return (
    <View>
      <View style={styles.container}>
        <Icon
          name="alternate-email"
          size={20}
          color="gray"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="gray"
        />
      </View>
      <View style={styles.container}>
        <Icon name="lock" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="gray"
          secureTextEntry={true}
        />
      </View>

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            width: 300,
            backgroundColor: '#B2BEBF',
            alignItems: 'center',
            borderColor: '#000000',
            borderRadius: 20,
            borderWidth: 1,
          }}
        >
          <Text
            style={{
              fontSize: 24,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>Create an account</Text>
        </TouchableOpacity>
        <View>
          <Image
            style={{ width: 130, height: 150, marginTop: 10 }}
            source={require('../assets/mylogo.png')}
          ></Image>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: { width: '80%' },
});

export default Login;
