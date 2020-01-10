import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Heading from './Heading'
import Input from './Input'
import Button from './Button'
import TodoList from './TodoList'

let todoIndex = 0

class App extends Component {
  state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }

  submitTodo = this.submitTodo.bind(this)  

  inputChange(inputValue) {
    console.warn('Input: ', inputValue)
    this.setState({ inputValue })
  }  

  submitTodo() {
    if (this.state.inputValue.match(/^\s*$/)) {
      return
    }  
    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false
    }    
    todoIndex++
    const todos = [...this.state.todos, todo]
    this.setState({ todos, inputValue: '' }, () => {   
      console.warn('State: ', this.state) 
    })
  }      

  render() {
    const { inputValue, todos } = this.state
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='always'
          style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={(text) => this.inputChange(text)} />
          <TodoList todos={todos} />
          <Button submitTodo={this.submitTodo} />            
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
})

export default App