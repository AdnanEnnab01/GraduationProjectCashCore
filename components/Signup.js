import { TouchableOpacity } from 'react-native';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const photo = require('../assets/signup.png');

export default Signup = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Join Our Exciting Adventure!</Text>
        <View style={styles.imageContainer}>
          <Image style={styles.photostyle} source={photo}></Image>
        </View>
        <View style={styles.inputContainer}>
          <Icon
            name="person"
            size={20}
            color="black"
            style={styles.icon}
          ></Icon>
          <TextInput placeholder="Username" style={styles.input}></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Icon
            name="alternate-email"
            size={20}
            color="black"
            style={styles.icon}
          ></Icon>
          <TextInput placeholder="Email" style={styles.input}></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="black" style={styles.icon}></Icon>
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={styles.input}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="black" style={styles.icon}></Icon>
          <TextInput
            placeholder="Confirm your password"
            style={styles.input}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Icon name="call" size={20} color="black" style={styles.icon}></Icon>
          <TextInput
            placeholder="Phone number"
            keyboardType="numeric"
            style={styles.input}
          ></TextInput>
        </View>
        <View
          style={{
            marginTop: 40,
            backgroundColor: '#FFDB58',
            width: '50%',
            alignItems: 'center',
            borderColor: '#FFDB58',
            borderWidth: 1,
            borderRadius: 10,
            height: 27,
          }}
        >
          <TouchableOpacity>
            <Text
              style={{ fontWeight: 'bold', fontSize: 18, color: '#ffffff' }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../assets/logoo.png')}
          ></Image>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 60,
  },
  photostyle: {
    width: 400,
    marginTop: 35,
    height: 200,
    marginBottom: 10, // Slightly adjusted margin
  },
  imageContainer: {
    marginBottom: 20, // Slightly adjusted margin
  },
  inputContainer: {
    flexDirection: 'row',
    borderColor: '#000000',
    borderWidth: 1,
    width: 350,
    borderRadius: 10,
    marginBottom: 15, // Slightly adjusted margin
  },
  icon: {
    marginTop: 3,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  logoContainer: {
    marginTop: 20, // Adjusted margin
  },
  logo: {
    width: 130,
    height: 150,
  },
});
