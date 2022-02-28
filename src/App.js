import { useState, useEffect } from 'react';
import { Heading, VStack, IconButton, useColorMode } from '@chakra-ui/react';
import { TodoList } from './components/TodoList';
import { AddTodo } from './components/AddTodo';
import { FaSun, FaMoon } from 'react-icons/fa';

function App() {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || [],
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4}>
      <IconButton
        size="lg"
        isRound="true"
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Heading
        pb="8"
        size="2xl"
        fontWeight="extrabold"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        Todo Application
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
