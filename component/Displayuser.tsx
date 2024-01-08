import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Displayuser = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const showMessageHandler = () => {
    if (message.trim()==='')
    {
    console.error("Field not be empty");
    }
    else{

      setMessages((prevMessages) => [...prevMessages, message]);
      setMessage(''); 
    }
  
};

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.messageContainer}>
        {messages.map((msg, index) => (
          <Text key={index} style={styles.messageText}>{msg}</Text>
        ))}
      </View>
      </ScrollView>
      <TextInput
        placeholder='Type your message'
        style={styles.textInput}
        value={message}
        onChangeText={(txt) => setMessage(txt)}
      />
      <TouchableOpacity style={styles.button} onPress={showMessageHandler}>
        <Text>Enter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  messageContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding:10,
    borderRadius:5,
  },
  messageText: {
    fontSize: 30,
    backgroundColor: 'lightgreen',
    padding: 10,
    marginVertical: 5,
  },
  textInput: {
    width: '100%', 
    height: 40,
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
  },
});

export default Displayuser;


