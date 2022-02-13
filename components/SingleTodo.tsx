import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Todos } from "../App";
//rnf
interface IProps {
  todo: Todos;
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
  todos: Todos[];
}
export default function SingleTodo(props: IProps) {
  const { todo, setTodos, todos } = props;
  return (
    <View style={styles.todo}>
      <Text> {todo.text} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    todo: {
        flexDirection:"row",
        marginHorizontal:40,
        elevation:5,
        shadowColor:"black",
        backgroundColor:"white",
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10,
        borderRadius: 50, 
    }
});
