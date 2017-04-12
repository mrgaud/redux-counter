// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;
// NOTE: Creates initial state
const initialState = {
	currentValue: 0
}
// NOTE: names the action types
const INCREMENT = 'counter/INCREMENT'
// NOTE: creates the action type function
export function increment(amount){
    return {
        type:INCREMENT,
        amount:amount
    }
}


export default function counter( state = initialState, action )
{
	switch ( action.type ){
        case INCREMENT:
            return {
                currentValue: state.currentValue + action.amount
            }
        break;

		default:
            return state
	}
}
