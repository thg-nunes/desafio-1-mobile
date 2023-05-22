import React, { useState } from 'react'
import { Alert, FlatList, StatusBar, Text } from 'react-native'
import styled, { ThemeProvider } from 'styled-components/native'
import {
  useFonts,
  Inter_700Bold,
  Inter_400Regular
} from '@expo-google-fonts/inter'

import { theme } from './src/theme'
import { Task } from '@components/task'
import { Input } from '@components/input'
import { Header } from '@components/header'
import { Button } from '@components/button'

const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${({ theme }) => theme.colors.gray[600]};
`

const Form = styled.View`
  padding: 0 24px;
  margin-top: -27px;

  flex-direction: row;
`

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold })

  const [taskDescription, setTaskDescription] = useState('')
  const [tasks, setTasks] = useState<string[]>([])
  const [completedTasks, setCompletedTasks] = useState(0)

  function handleRemoveTask(taskName: string): void {
    setTasks(tasks.filter((_task) => _task !== taskName))
  }

  function handleAddTask(taskName: string): void {
    if (tasks.includes(taskName)) {
      return Alert.alert(
        'Tarefa já adicionada',
        'Uma tarefa com o mesmo nome já foi adicionada, tente adicionar outra.'
      )
    }

    if (taskDescription === '') {
      return Alert.alert(
        'Uma tarefa de uma descrição!',
        'Não é possível criar uma tarefa sem uma descrição.'
      )
    }

    return setTasks((prevstate) => [...prevstate, taskDescription])
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" translucent />
      {fontsLoaded && (
        <Container>
          <Header />

          <Form>
            <Input onChangeText={setTaskDescription} />
            <Button onPress={() => handleAddTask(taskDescription)} />
          </Form>

          <Text style={{ color: '#FFF' }}>Criadas {tasks.length}</Text>
          <Text style={{ color: '#FFF' }}>Concluidas {completedTasks}</Text>
          <FlatList
            data={tasks}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Task
                taskText={item}
                completedTasks={completedTasks}
                setCompletedTasks={setCompletedTasks}
                removeTask={() => handleRemoveTask(item)}
              />
            )}
          />
        </Container>
      )}
    </ThemeProvider>
  )
}
