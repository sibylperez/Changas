import { GET_ALL_POSTS, GET_SINGLE_POST, GET_USER_ADMIN, GET_SINGLE_USER, SEARCH_BY_TITLE, CATEGORY_POST, CATEGORY_SPECEALTY, GET_FILTER_TYPE, USER_LOGIN, GET_ALL_REVIEWS, POST_REVIEW } from '../constants';

const initialState = {
    postList : [],
    userLogin: [],
    singlePost : {},
    singleUser: {},
    userAdmin: [],
    searchByTitle: [],
    categoryPost: [],
    specialtyCategory: [],
    filterType: 'All',
    allReview: []
    // favoritePost: [],
}

function rootReducer(state = initialState, action) {
    const { payload, type } = action;

    switch (type) {
        case GET_ALL_POSTS:
            return {
                ...state,
                postList: payload
            };
        case CATEGORY_POST:
            return {
                ...state,
                categoryPost: payload
            };
        case CATEGORY_SPECEALTY:
            return {
                ...state,
                specialtyCategory: payload
            };
        case GET_SINGLE_POST:
            return {
                ...state,
                singlePost: payload
            }
        case GET_USER_ADMIN:
            return {
                ...state,
                userAdmin: payload
            }
        case GET_SINGLE_USER:
            return {
                ...state,
                singleUser: payload
            }
         case USER_LOGIN:
            return {
                ...state,
                userLogin: payload
            }
        case SEARCH_BY_TITLE:
            return {
                ...state,
                searchByTitle: payload
            }
        case GET_FILTER_TYPE:
            return{
                ...state,
                filterType: payload
            }

            case GET_ALL_REVIEWS:
            return {
                ...state,
                allReview: payload
            };
            case POST_REVIEW:
            return {
                ...state,
                allReview: payload
            };
        // case ADD_FAVORITE_POST:
        //     return{
        //         ...state,
        //         favoritePost: payload
        //     }

        default:
            return state;
    }
}

export default rootReducer;