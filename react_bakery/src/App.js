import React, { Component } from 'react';
import logo from './logo.svg';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.onClickTabAdd = this.onClickTabAdd.bind(this);
    this.onClickTabList = this.onClickTabList.bind(this);
    this.onClickTabPay = this.onClickTabPay.bind(this);
    this.addItem = this.addItem.bind(this);


    this.state = {
      activeTab: 'add',
      items: []

    }
  }

  onClickTabAdd() {
    console.log('add click');
    this.setState({
      activeTab: 'add'

    });
  }

  onClickTabList() {
    console.log('list click');
    this.setState({
      activeTab: 'list'

    });
  }

  onClickTabPay() {
    console.log('pay click');
    this.setState({
      activeTab: 'pay'

    });
  }

  addItem(itemName, price) {
    console.log(itemName,price)
      

  }

  renderContent() {
    switch (this.state.activeTab) {
      case 'add':
        return <Add addItem={this.addItem}></Add>;
      case 'list':
        return <List></List>;
      case 'pay':
        return <Pay></Pay>;
      default:
        return (<h1>Error</h1>)
    }
  }


  render() {
    return (

      <div className="App">
        <Button name='Add' isSelected={this.activeTab === 'add'} onClick={this.onClickTabAdd}>Add</Button>
        <Button name='List' isSelected={this.activeTab === 'list'} onClick={this.onClickTabList}>List</Button>
        <Button name='Pay' isSelected={this.activeTab === 'pay'} onClick={this.onClickTabPay}>Pay</Button>

        {this.renderContent()}

      </div>
    );
  }

}

export default App;
