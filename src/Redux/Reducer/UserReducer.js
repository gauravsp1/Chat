import {
    SET_USER,
    SET_AUTHENTICATED,
    SET_UNAUTHENTICATED,
    LOADING_USER,
    LIKE_POST,
    UNLIKE_POST,
    EDIT_PROFILE,
    MARK_NOTIFICATIONS_READ
  } from '../Actions/ActionType';
  
  const initialState = {
    authenticated: false,
    loading: false,
    likes:[{
      screamId:1
    }    
    ,{
      screamId:3
    }
  ],
  credentials:{
    handle:"Gaurav",
    bio:"Coder, Artist and much more...",
    location:"Karad",
    createdAt:"1/10/2021"
  }
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case SET_AUTHENTICATED:
        return {
          ...state,
          authenticated: true
        };
      case SET_UNAUTHENTICATED:
        return initialState;
      case SET_USER:
        return {
          authenticated: true,
          loading: false,
          ...action.payload
        };
      case LOADING_USER:
        return {
          ...state,
          loading: true
        };
      case LIKE_POST:
        return {
          ...state,
          likes: [
            ...state.likes,
            {              
              screamId: action.payload
            }
          ]
        };
      case UNLIKE_POST:
        return {
          ...state,
          likes: state.likes.filter(
            (like) => like.screamId !== action.payload
          )
        };
      case MARK_NOTIFICATIONS_READ:
        state.notifications.forEach((not) => (not.read = true));
        return {
          ...state
        };
        case EDIT_PROFILE:
        return {
          ...state,
          credentials:{
            handle:"Gaurav",
            bio:action.payload.bio,
            location:action.payload.location,
            createdAt:"1/10/2021"
          }
        };
      default:
        return state;
    }
  }