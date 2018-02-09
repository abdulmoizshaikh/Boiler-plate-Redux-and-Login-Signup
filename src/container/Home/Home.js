import React, { Component } from 'react';
import HomeComp from '../../component/HomeComp/HomeComp';

// import firebase from 'firebase';




class Home extends Component {

  constructor(props){
    super(props);

    this.state={

    }
  }

  addToDatabase(){
    console.log("Data Going to Database")
    
  }

  render() {
    return (
        <HomeComp/>
         )
  }
}
export default Home;

