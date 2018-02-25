import axios from 'axios';
const url = 'http://localhost:3000'

export const getStudios = () => dispatch => {
    axios.get('../../studio.json')
    // axios.get(url)
        .then(res => {
            dispatch({ type: 'FETCH_STUDIOS_SUCCESS', payload: res })
        });
}


export const filterStudios = (data) => dispatch => {
    dispatch({ type: 'FILTER_STUDIOS', payload: data })
}

