import React, { Component } from 'react';
import { Text, View, StyleSheet, Switch, TouchableOpacity, TextInput } from 'react-native';

export default class Row extends Component {
    render() {
        const { complete } = this.props;
        const textComponent = (
            <TouchableOpacity style={styles.textWrap} onLongPress={()=>this.props.onToggleEdit(true)}>
                <Text style={[styles.text, complete && styles.complete]}>{this.props.text}</Text>
            </TouchableOpacity>            
        )
        const removeButton = (
            <TouchableOpacity onPress={this.props.onRemove}>
                <Text style={styles.destroy}>X</Text>
            </TouchableOpacity>
        )
        const editingComponent = (
            <View style={styles.textWrap}>
                <TextInput
                onChangeText={this.props.onUpdate}
                autoFocus
                value={this.props.text}
                style={styles.input}
                multiline
                ></TextInput>
            </View>             
        )
        const doneButton = (
            <TouchableOpacity 
            onPress={() => this.props.onToggleEdit(false)}
            style={styles.save}
            ><Text style={styles.saveText}>Guardar</Text>
            </TouchableOpacity>            
        )
        return (
            <View style={styles.container}>
                <Switch 
                    value={complete}
                    onValueChange={this.props.onComplete}
                ></Switch>
                {this.props.editing ? editingComponent : textComponent}
                {this.props.editing ? doneButton : removeButton}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between"
    },
    text: {
        fontSize: 24,
        color: "#4d4d4d"
    },
    textWrap: {
        flex: 1,
        marginHorizontal: 10
    },
    complete: {
        textDecorationLine: "line-through"
    },
    destroy: {
        fontSize: 20,
        color: "#cc9a9a",
        fontWeight: 'bold'
    },
    input: {
        height: 100,
        flex: 1,
        fontSize: 24,
        padding: 0,
        color: "#4d4d4d"
    },
    save: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#7be290",
        padding: 7
    }, 
    saveText: {
        fontSize: 20,
        color: "#4d4d4d",
        fontWeight: 'bold'
    }       
})