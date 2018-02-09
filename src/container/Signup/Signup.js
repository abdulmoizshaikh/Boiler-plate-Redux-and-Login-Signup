import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import firebase from 'firebase';

import history from '../../history';
import SignupComp from '../../component/SignupComp/SignupComp';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            password: ''
        }
    }


    componentDidMount = () => {


    }


    _onInput(event) {
        // console.log(event.target.value,"event.target.value");
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    _onbtnClick() {
        console.log("Btn trigered")
        console.log(this.state, 'this.state');

        // this.setState({
        //     userName:this.state.userName,
        //     email:this.state.password,
        //     password:this.state.password
        // })

        let user = {
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password
        }
        console.log(user,"user");
        
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        // firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((success) => {
                console.log(success, "success");
                history.push("/login");

            })
            .catch((error) => {
                console.log(error.message, "error.message araha he ");
                // alert(error.m    essage, "error.message araha he ");
            })

        // history.push("/login");
    }

    render() {
        return (
            <div>
                <SignupComp
                    isState={this.state}
                    _onInput={this._onInput.bind(this)}
                    _onBtnClick={this._onbtnClick.bind(this)} />
                {/* 
            // <div className='signup-container'>
            //     <h2>Hello signup</h2>
            //     <div >
            //     <label>Username : <input type="text" name="userName" value={this.state.userName} onChange={this._onInput.bind(this)}/></label><br/>
            //     <label>Email     :   <input type="email" name="email" value={this.state.email} onChange={this._onInput.bind(this)} /> </label><br/>
            //     <label>Password : <input type="password" name="password" value={this.state.password} onChange={this._onInput.bind(this)}/></label><br/>
            //     <Link to="/login"><small>Already registered.</small></Link><br/>
            //     <button onClick={this._onbtnClick.bind(this)}>Signup</button>
            //     </div>
            // </div> */}











            </div>

        )
    }
}
export default Signup;

