import React, { Component } from 'react';
import './Home.css';
import Item from '../Item'

class Home extends Component {

  constructor(props){
    super(props);

    this.state = {
      items:[],
      day: new Date(),
      index: 0,
    }

    this.goDetail = this.goDetail.bind(this);
  }

  getToday(day) {
  	return day.getFullYear() + '-' + (day.getMonth() + 1) + '-' + day.getDate()
  }  

  getData(){
    let index = this.state.index;
    let day = new Date(this.state.day);
    day.setDate(day.getDate() - 1 * index);
    const dayString = this.getToday(day);

    const key = 'nAl6E1ag97caJ2Nby8KCj6rLLP47Az9OW1imLOds';
    const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${dayString}`;

    fetch(url)
    .then(res => res.json())
    .then(data => {
      let items = this.state.items;
      items.push(data);
      index += 1;
      this.setState({items: items, index: index})
      if (index < 14) {
      	this.getData();
      } else {
      	localStorage.setItem('nasa_data', JSON.stringify(items));
      	localStorage.setItem('nasa_day', this.getToday(this.state.day));
      }
    })
  }

  componentDidMount() {
  	const LStorageData = JSON.parse(localStorage.getItem('nasa_data'));
  	const LStorageDay = localStorage.getItem('nasa_day');
  	if (!LStorageData || LStorageDay !== this.getToday(this.state.day)) {
  		this.getData();
  	} else {
  		this.setState({items: LStorageData})
  	}
  }

  goDetail(item){
  	this.props.goDetail(item);
  }

  render(){
  	const { items } = this.state;
  	const elements = items.map( (item, i) => {
  		return <Item data={item} key={i} goDetail={this.goDetail}></Item>
  	})
  	return (
  		<div className="Home" goDetail={this.goDetail}>
  		{ elements }
  		</div>
  	);
  }
}

export default Home;