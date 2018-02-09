import React, { Component } from 'react';
import '../../index.css';
import NavbarComp from '../../component/NavbarComp/NavbarComp';

// import firebase from 'firebase';




class Home extends Component {

  constructor(props){
    super(props);

    this.state={

    }
  }

  addToDatabase(){
    console.log("Data Going to Database")

    // function writeUserData(userId, name, email, imageUrl) {
    //   firebase.database().ref('users/' + userId).set({
    //     username: name,
    //     email: email,
    //     profile_picture : imageUrl
    //   });
    // }


  }

  render() {
    return (
        <NavbarComp/>
         )
  }
}
export default Home;

