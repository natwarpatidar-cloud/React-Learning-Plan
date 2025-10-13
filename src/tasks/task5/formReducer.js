export default function formReducer (state, action) {
    if(action.type === 'HandleInputChange') {
        return {
            ...state,
            [action.field]: action.payload
        };
    }
}