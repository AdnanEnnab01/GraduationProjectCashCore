import { View, StyleSheet, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ValidationTextInput = (props) => {
  const Validate = (input) => {
    const { regex, confirmPasswordRegex } = props;

    // Check the main regex (e.g., password)
    const isValid = regex.test(input);
    if (!isValid) {
      setValidationMessage(props.ValidationMessage);
    } else {
      setValidationMessage(null);
    }

    // Check if this is the "Confirm Password" field and compare it to the password
    if (confirmPasswordRegex && input !== confirmPasswordRegex) {
      setValidationMessage('Passwords do not match');
    }
  };

  const [text, setText] = useState('');
  const [ValidationMessage, setValidationMessage] = useState(null);

  const borderColor = ValidationMessage ? 'red' : '#000000';

  return (
    <View>
      <View style={[styles.inputContainer, { borderColor: borderColor }]}>
        <Icon style={styles.icon} {...props}></Icon>
        <TextInput
          style={[styles.input, { borderColor: borderColor }]}
          {...props}
          onEndEditing={() => Validate(text)}
          onChangeText={(text) => setText(text)}
        />
      </View>

      <Text style={{ marginTop: -10, marginBottom: 3, color: 'red' }}>
        {ValidationMessage}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    width: 350,
    borderRadius: 10,
    marginBottom: 15,
  },
  icon: {
    marginTop: 3,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
});

export default ValidationTextInput;
