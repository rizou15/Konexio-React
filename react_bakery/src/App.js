import React, { Component } from 'react';
import logo from './logo.svg';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/core/Button';
import './App.css';
import bootstrap from '../src/css/bootstrap.min.css';


class App extends Component {
  constructor() {
    super();
    this.onClickTabAdd = this.onClickTabAdd.bind(this);
    this.onClickTabList = this.onClickTabList.bind(this);
    this.onClickTabPay = this.onClickTabPay.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
    
    this.state = {
      activeTab: 'add',
      items: []

    }
  }

  onClickTabAdd(){
    console.log('add click');
    this.setState({
      activeTab:'add'

    });
  }

  onClickTabList(){
    console.log('list click');
    this.setState({
      activeTab:'list'

    });
  }

  onClickTabPay(){
    console.log('pay click');
    this.setState({
      activeTab:'pay'

    });
  }

  updateInput(evt){
    
  }

  submitForm(evt){


  }


  render() {
    return (

      <div className="App">
        <Button isSelected={this.activeTab === 'add'} onClick={this.onClickTabAdd}>
          <Add></Add>
      </Button>
        <Button isSelected={this.activeTab === 'list'} onClick={this.onClickTabList}>
          <List></List>
      </Button>
        <Button isSelected={this.activeTab === 'pay'} onClick={this.onClickTabPay}>
          <Pay></Pay>
      </Button>
      </div>
    );
  }

}

export default App;
