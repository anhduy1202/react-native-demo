import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SingleTodo from "./components/SingleTodo";

type Todo = String | any;

export interface Todos {
  id: Number;
  text: String;
}

export default function App() {
  const [todo, setTodo] = useState<Todo>("");
  const [todos, setTodos] = useState<Todos[]>([]);
  const addTodo = () => {
    if (!todo) return;
    setTodos([...todos, { id: Date.now(), text: todo }]);
    setTodo("");
    console.log(todos);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.heading}> My Todo App </Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Add a todo"
            style={styles.input}
            value={todo}
            onChangeText={(text) => setTodo(text)}
          />
          <TouchableOpacity style={styles.btn} onPress={addTodo}>
            <Text> Add </Text>
          </TouchableOpacity>
        </View>
        <View style={{width:"100%", marginTop:10}}>
          <FlatList
            data={todos}
            renderItem={({ item }) => <SingleTodo todo={item} setTodos={setTodos} todos={todos} />}
            keyExtractor={item => item.id.toString()}

          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7DAD9",
  },
  heading: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 30,
    fontWeight: "700",
  },
  inputContainer: {
    flexDirection: "row",
    marginHorizontal: 40,
    alignItems: "center",
  },
  btn: {
    padding: 13,
    backgroundColor: "white",
    borderRadius: 100,
    elevation: 10,
  },
  input: {
    flex: 1,
    shadowColor: "black",
    elevation: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginRight: 5,
    backgroundColor: "white",
  },
});
