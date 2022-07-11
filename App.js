import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './components/Header';
import Todoitems from './components/Todoitems';
import Addtodo from './components/Addtodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy cofee', key: '1' },
    { text: 'buy shoe', key: '2' },
    { text: 'Go home', key: '3' },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert('OPPS', 'Todos must be over 3 chars long', [
        { text: 'Understood' },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <View>
          <Header />
        </View>
        <View style={styles.content}>
          <Addtodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <Todoitems item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    paddingBottom: 20,
    flex: 1,
  },
});
