import ActionTypes from '../constants/Constants';


// const INITIAL_STATE = {
//     userName: '',
//     email: '',
//     password: ''
// }

// export const userReducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case ActionTypes.USERNAME:
//             return {
//                 ...state,
//                 userName: action.payload
//             }

//         case ActionTypes.email:
//             return {
//                 ...state,
//                 email: action.payload
//             }

//         case ActionTypes.password:
//             return {
//                 ...state,
//                 password: action.payload
//             }

//         default:
//             return state;

//     }

// }



const INITIAL_STATE2 = {
    todos: [],
    // todosArr: [],
    // inputValue: "",
    // flag: false
}

// console.log(todos)

export const todoReducer = (state = INITIAL_STATE2, action) => {
    switch (action.type) {
        // case ActionTypes.RENDERTODOS:
        //     return ({
        //         ...state,
        //         todos: action.payload
        //     })
        case ActionTypes.ADDTODO:
            return ({
                ...state,
                todos: [action.payload]
            })

        default:
            return state;
    }
}