
import React, { Component } from 'react';
// import firebase from 'firebase';
import * as firebase from 'firebase';

import history from '../../history';
import LoginComp from '../../component/LoginComp/LoginComp';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            email: '',
            password: ''
        }
    }

    _onInput(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onbtnClick() {
        console.log("Btn trigered");

        let user = {
            userId: this.state.userId,
            email: this.state.email,
            password: this.state.password
        }
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((newuser) => {
                console.log(newuser.uid,'newuser.uid');
                firebase.database().ref("Myusers/" + newuser.uid).set({
                    email: user.email,
                    password: user.password
                });
                console.log("Congrats your Data successfully added to database ")
                history.push("/home");
            })

            .catch((error) => {
                console.log(error.message, "error.message");
            })

    }

    render() {
        return (
            <div>
                <LoginComp/>
            </div>

        )
    }
}
export default Login;

