function rootReducer (
    state = {
        currentUser: null,
        currentNote: null,
    },
    action
){
    console.log('inside rootReducer', action)

    switch(action.type){
        case 'FIRST_CASE':
            return console.log('DID FIRST CASE SUCCESS')
        default:
            console.log('SETTLED FOR DEFAULT')
            return state
    }
}

export default rootReducer




// export default function shoppingListItemReducer(state = {
//   items: []
// }, action) {
//   console.log(action);
//   switch(action.type) {

//     case 'INCREASE_COUNT':
//       console.log("Current state.items length %s", state.items.length);
//       console.log("Updating state.items length to %s", state.items.length + 1);
//       return Object.assign({}, state, { items: state.items.concat(state.items.length + 1) });

//     default:
//       console.log("Initial state.items length: %s", state.items.length);
//       return state;
//   }
// };