import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

export function TodoList({ todos, deleteTodo }) {
  if (!todos.length) {
    return (
      <Badge colorScheme="green" p="4" m="4" borderRadius="lg">
        No todos!
      </Badge>
    );
  }

  return (
    <VStack
      maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      divider={<StackDivider />}
      borderColor="gray.100"
      alignItems="stretch"
      borderRadius="lg"
      borderWidth="2px"
      w="100%"
      p="4"
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton
            isRound="true"
            icon={<FaTrash />}
            onClick={() => deleteTodo(todo.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
}
