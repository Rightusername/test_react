const initialState = [

];

export default function studio(state = initialState, action) {

    if (action.type === 'FETCH_STUDIOS_SUCCESS') {
        return [
            ...action.payload.data.studios
        ];
    }
    return state;
}