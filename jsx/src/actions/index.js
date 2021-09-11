import JsonPlaceholder from "../apis/JsonPlaceholder";

export const fetchPost = async () => {

    // Bad Approach
    const response = await JsonPlaceholder.get('posts');
    return {
        type: 'FETCH_POST',
        payload: response
    };
};
