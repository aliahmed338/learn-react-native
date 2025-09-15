import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

type TodoItem = {
  id: string;
  task: string;
};

const Todo = () => {
  const [task, setTask] = useState<string>("");
  const [todo, setTodo] = useState<TodoItem[]>([]);

  const addTodo = () => {
    if (task.trim()) {
      setTodo([...todo, { id: Date.now().toString(), task }]);
      setTask("");
    }
  };

  const handleSubmit = () => {
    addTodo();
  };

  const removeTodo = (id: string) => {
    setTodo(todo.filter((f) => f.id !== id));
  };

  const renderTodo = ({ item }: { item: TodoItem }) => {
    return (
      <TouchableOpacity onPress={() => removeTodo(item.id)}>
        <Text>{item.task}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ marginTop: 60, marginInline: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 900 }}>Todo List</Text>

      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          borderRadius: 8,
          marginBottom: 10,
          backgroundColor: "#fff",
          marginBlock: 5,
        }}
        value={task}
        onChangeText={setTask}
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
        placeholder="Enter a task"
      />

      <Button title="Add task" onPress={addTodo} />

      <FlatList
        data={todo}
        keyExtractor={(item) => item.id}
        renderItem={renderTodo}
        style={{
          padding: 15,
          marginVertical: 10,
          borderRadius: 8,
          backgroundColor: "#e0e0e0",
        }}
      />
    </View>
  );
};

export default Todo;
