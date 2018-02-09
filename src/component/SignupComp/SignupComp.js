import React, { Component } from 'react';
import '../CustomCss/SignupComp.css';



class SignupComp extends Component {

    render() {
        // console.log(this.props,"this.props");
        return (

            <div className="signup-page">

                <form className="form">
                    <h2 className="signup-title">SignUp</h2>
                    <div className="form-group">
                        <label htmlFor="exampleInputUsername">User name</label>
                        <input type="text" name="userName" onChange={this.props._onInput} className="form-control" id="exampleInputUsername" aria-describedby="emailHelp" placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail">Email address</label>
                        <input type="email" name="email" onChange={this.props._onInput} className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" name="password" onChange={this.props._onInput} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                 <button  onClick={this.props._onBtnClick} className="btn btn-success">Submit</button>
                </form>

            </div>
        )
    }
}
export default SignupComp;



























// import React, { Component } from 'react';
// import '../CustomCss/SignupComp.css';



// class SignupComp extends Component {

//   render() {
//     return (

//       <div className="signup-page">

//         <form className="form">
//         <h2 className="login-title">LogIn</h2>
//           <div className="form-group">
//             <label htmlFor="exampleInputEmail1">Email address</label>
//             <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
//             <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//           </div>
//           <div className="form-group">
//             <label htmlFor="exampleInputPassword1">Password</label>
//             <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
//           </div>
//           {/* <div className="form-check">
//             <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//             <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//           </div> */}
//           <button type="submit" className="btn btn-success">Submit</button>
//         </form>

//       </div>
//     )
//   }
// }
// export default SignupComp;

