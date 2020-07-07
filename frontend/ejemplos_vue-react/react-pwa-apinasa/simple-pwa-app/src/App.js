import React, {Component} from 'react';
import './App.css';
import Home from './components/Home';
import Detail from './components/Detail';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        item: null
    }
      this.goDetail = this.goDetail.bind(this);
      this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.setState({ item: null })
  }

  goDetail(item){
    this.setState({ item: item }) 
  }

  render(){
    const { item } = this.state;
    let view = <Home goDetail={this.goDetail}></Home>;

    if ( item ) {
      view = <Detail goBack={this.goBack} data={this.state.item}></Detail>;
    }

    return (
        <div className="App">
            <header><h2>Nasa: Foto del día</h2></header>
            { view }
        </div>
    );
  }
}

export default App;
