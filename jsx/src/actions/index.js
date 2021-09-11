import JsonPlaceholder from "../apis/JsonPlaceholder";
import _ from "lodash";


export const fetchPostAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());


    // ORIGINAL
    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // userIds.forEach(id => dispatch(fetchUser(id)));

    // OPTIONAL
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value()
}


export const fetchPosts = () => async dispatch => {
    const response = await JsonPlaceholder.get('posts');
    dispatch({type: 'FETCH_POSTS', payload: response.data})
};


// Memorizing one time using LODASH
/*
export const fetchUser = id => dispatch => {
    _fetchUser(id, dispatch);
};
*/

// Memorizing one time using LODASH
/*const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await JsonPlaceholder.get(`users/${id}`);
    dispatch({type: "FETCH_USER", payload: response.data})
});*/

// ORIGINAL REQUEST
/*export const fetchUser = id => async dispatch => {
    const response = await JsonPlaceholder.get(`users/${id}`);
    dispatch({type: "FETCH_USER", payload: response.data})
}*/

// NON MEMORIZING
export const fetchUser = id => async dispatch => {
    const response = await JsonPlaceholder.get(`users/${id}`);
    dispatch({type: "FETCH_USER", payload: response.data})
}
