import React, { Component } from 'react';
import '../CustomCss/HomeComp.css';
import { connect } from 'react-redux';
import ActionTypes from '../../store/constants/Constants';

class HomeComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: "",
      // todosArr: [],
    }
  }
  _onInputChange(event) {
    this.setState({
      todos: event.target.value,
    })
    console.log(this.state,"this.state");
    // return
  }

  _onClickBtnHandler() {
    let input = [];
    console.log(this.state.todos,"this.state.todos");
    input = input.concat(this.state.todos);
    console.log(input,"input");
    this.props.onAdd(input);
    console.log(this.props.onAdd,'this.props.onAdd')
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to Home</h1>
        <input type="text" name="todos" onChange={this._onInputChange.bind(this)} />
        <button onClick={this._onClickBtnHandler.bind(this)}>Add todo</button>
      {console.log(this.props.todoRender)}

        {/* <div>{this.props.todoRender.map((snap) => {
          return(
          <ul><li>{snap}</li></ul>);

        })}</div> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    todoRender: state.todoRed.todosArr

  })
}
const mapDispatchToProps = (dispatch) => {
  return ({
    onAdd: (input) => { dispatch({ type: ActionTypes.ADDTODO, payload: input }) }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComp);