const initialState = [
    1200,
    2500
];

export default function studio(state = initialState, action) {

    if (action.type === 'FILTER_STUDIOS') {
        console.log(action.payload);
        return [
            ...action.payload
        ]

    }
    return state;
}