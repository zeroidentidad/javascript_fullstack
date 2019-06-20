import React, { Component } from  'react';
import { View, Text, StyleSheet, Platform, ListView, Keyboard } from 'react-native';
import Header from './header';
import Footer from './footer';
import Row from './row';

export default class App extends Component {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1!==r2});
        this.state = {
            value: "",
            items: [],
            allComplete: false,
            dataSource: ds.cloneWithRows([])
        }
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleToggleAllComplete = this.handleToggleAllComplete.bind(this);
        this.setSource = this.setSource.bind(this);
        this.handleToggleComplete = this.handleToggleComplete.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
    }

    handleAddItem(){
        if(!this.state.value) return;
        const newItems = [
            ... this.state.items,
            {
                key: Date.now(),
                text: this.state.value,
                complete: false
            }
        ];
        this.setSource(newItems, newItems, { value: "" });
        /*this.setState({
            items: newItems,
            value: ""
        })*/
    }

    handleToggleAllComplete(){
        const complete = !this.state.allComplete;
        const newItems = this.state.items.map((item)=>({ ... item, complete }));
        //console.table(newItems);
        this.setSource(newItems, newItems, {allComplete: complete});
        /*this.setState({
            items: newItems,
            allComplete: complete          
        })*/
    }

    setSource(items, itemsDatasource, otherState={}){
        this.setState({
            items,
            dataSource: this.state.dataSource.cloneWithRows(itemsDatasource),
            ...otherState
        })
    }

    handleToggleComplete(key, complete){
        const newItems = this.state.items.map((item) => { 
            if(item.key !== key) return item;
            return {
                ...item,
                complete
            }
         });
        this.setSource(newItems, newItems);
    }

    handleRemoveItem(key){
        const newItems = this.state.items.filter((item)=>{
            return item.key !== key
        })
        this.setSource(newItems, newItems);
    }

    render(){
        return(
            <View style = {styles.container}>
                <Header
                    value={this.state.value}
                    onAddItem={this.handleAddItem}
                    onChange={(value=>this.setState({ value }))}
                    onToggleAllComplete={this.handleToggleAllComplete}
                />
                <View style={styles.content}>
                    <ListView
                        style={styles.list}
                        enableEmptySections
                        dataSource={this.state.dataSource}
                        onScroll={()=> Keyboard.dismiss()}
                        renderRow={({ key, ...value})=>{
                            return(
                                <Row
                                    key={key}
                                    {...value}
                                    onComplete={(complete) => this.handleToggleComplete(key, complete)}
                                    onRemove={() => this.handleRemoveItem(key)}
                                ></Row>
                            )
                        }}
                        renderSeparator={(sectionId, rowId)=>{
                            return <View key={rowId} style={styles.separator}></View>
                        }}
                    ></ListView>
                </View>
                <Footer/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        ... Platform.select({
            android: { paddingTop: 20 }
        })
    },
    content: {
        flex: 1
    },
    list: {
        backgroundColor: "#FFF",
    },
    separator: {
        borderWidth: 1,
        borderColor: "#F5F5F5"
    }
});