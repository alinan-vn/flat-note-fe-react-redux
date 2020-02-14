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
        case 'CHANGE_NOTE':
            console.log('change note action, current note is now:', action.noteId )
            return {
                ...state,
                currentNote: action.noteId
            }
        default:
            console.log('SETTLED FOR DEFAULT')
            return state
    }
}

export default rootReducer

// ------------------------------------------

// export default function manageUsers(state = {
//     users: [],
//   }, action){
//     switch (action.type) {
//       case 'ADD_USER':
//         console.log('adding ', action.user);
//         return {
//           ...state,
//           users: [...state.users, action.user]
//         }
  
//       default:
//         return state;
//     }
//   };
  
// ---------------------------------------------

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