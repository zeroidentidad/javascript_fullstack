import React from 'react'
import {
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity
} from 'react-native'
import styles from './styles'
import { addBook, removeBook } from './actions'

import { connect } from 'react-redux'

const initialState = {
    name: '',
    author: ''
}

class Books extends React.Component {
    
    state = initialState

    updateInput = (key, value) => {
        this.setState({
            ...this.state,
            [key]: value
        })
    }

    addBook = () => {
        this.props.dispatchAddBook(this.state)
        this.setState(initialState)
    }

    removeBook = (book) => {
        this.props.dispatchRemoveBook(book)
    }


    render() {
        const { books } = this.props

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Libros leídos</Text>
                <ScrollView
                    keyboardShouldPersistTaps='always'
                    style={styles.booksContainer}
                >
                    {
                        books.map((book, index) => (
                            <View style={styles.book} key={index}>
                                <Text style={styles.name}>{book.name}</Text>
                                <Text style={styles.author}>{book.author}</Text>
                                <Text onPress={() => this.removeBook(book)}>Eliminar</Text>
                            </View>
                        ))
                    }
                </ScrollView>
                <View style={styles.inputContainer}>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            value={this.state.name}
                            onChangeText={value => this.updateInput('name', value)}
                            style={styles.input}
                            placeholder='Titulo libro'
                        />
                        <TextInput
                            value={this.state.author}
                            onChangeText={value => this.updateInput('author', value)}
                            style={styles.input}
                            placeholder='Nombre autor'
                        />
                    </View>
                    <TouchableOpacity onPress={this.addBook}>
                        <View style={styles.addButtonContainer}>
                            <Text style={styles.addButton}>+</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = {
    dispatchAddBook: (book) => addBook(book),
    dispatchRemoveBook: (book) => removeBook(book)
}

const mapStateToProps = (state) => ({
    books: state.bookReducer.books
})


export default connect(mapStateToProps, mapDispatchToProps)(Books)
