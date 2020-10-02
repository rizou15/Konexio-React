import React, { Component } from 'react';
import logo from './logo.svg';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';



class App extends Component {
  constructor() {
    super();
    this.onClickTabAdd = this.onClickTabAdd.bind(this);
    this.onClickTabList = this.onClickTabList.bind(this);
    this.onClickTabPay = this.onClickTabPay.bind(this);
    this.renderContent = this.renderContent.bind(this);
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
    let items = this.state.items
    items.push({
      itemName,
      price
    })

    this.setState({
      items
    });

    console.log(items)

  }

  renderContent() {
    switch (this.state.activeTab) {
      case 'add':
        return <Add addItem={this.addItem}></Add>;
      case 'list':
        return <List>{this.state.items}</List>;
      case 'pay':
        return <Pay></Pay>;
      default:
        return (<h1>Error</h1>)
    }
  }


  render() {
    return (

      <div className="App">
        <Button isSelected={this.state.activeTab === 'add'} clickFn={this.onClickTabAdd}>Add</Button>
        <Button isSelected={this.state.activeTab === 'list'} clickFn={this.onClickTabList}>List</Button>
        <Button isSelected={this.state.activeTab === 'pay'} clickFn={this.onClickTabPay}>Pay</Button>

        {this.renderContent()}

      </div>
    );
  }

}

export default App;

