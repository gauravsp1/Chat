import {
    SET_POSTS,
    LIKE_POST,
    UNLIKE_POST,
    LOADING_DATA,
    STOP_LOADING_DATA,
    DELETE_POST,
    POST_POST,
    SET_POST,
    SUBMIT_COMMENT
  } from '../Actions/ActionType';
  
  const initialState = {
    posts: [
      {
      screamId:1,
      body:"What's the plan??",
      userHandle:"Ritesh",
      image:"./images/First.jpg",
      commentCount:5,
      likeCount:50,
      createdAt:"29/09/2020"
  },
  {
      screamId:2,
      body:"Let's meet at the Park." ,
      userHandle:"Shubham",
      image:"./images/Second.jpeg",
      commentCount:88,
      likeCount:500,
      createdAt:"29/09/2020"
  }
     , {
      screamId:3,
      body:"Hi All !!!",
      userHandle:"Varun",
      image:"./images/Third.jpg",
      commentCount:5,
      likeCount:50,
      createdAt:"29/09/2020"
  },
  {
      screamId:4,
      body:"Great to see you all...",
      userHandle:"Ankit",
      image:"./images/Fourth.jpeg",
      commentCount:88,
      likeCount:500,
      createdAt:"29/09/2020"
  }
  ]
  ,
    post: {},
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case LOADING_DATA:
        return {
          ...state,
          loading: true
        };
      case STOP_LOADING_DATA:
        return {
          ...state,
          loading: false
        };
      case SET_POSTS:
        return {
          ...state,
          posts: action.payload,
          loading: false
        };
      case SET_POST:
        return {
          ...state,
          post: action.payload
        };
        
      // case LIKE_POST:
      // case UNLIKE_POST:
      //   let index = state.posts.findIndex(
      //     (post) => post.screamId === action.payload.screamId
      //   );
      //   state.posts[index] = action.payload;
      //   if (state.post.screamId === action.payload.screamId) {
      //     state.post = action.payload;
      //   }
      //   return {
      //     ...state
      //   };
        
      // case DELETE_POST:
      //   index = state.posts.findIndex(
      //     (post) => post.screamId === action.payload
      //   );
      //   state.posts.splice(index, 1);
      //   return {
      //     ...state
      //   };
      case POST_POST:
        return {
          ...state,
          posts: [{
            screamId:action.payload.screamId,
      body:action.payload.body,
      userHandle:"Gaurav",
      image:"./images/Profile.jpeg",
      commentCount:5,
      likeCount:50,
      createdAt:action.payload.today
          }
            , ...state.posts]
        };
        /*
      case SUBMIT_COMMENT:
        return {
          ...state,
          post: {
            ...state.post,
            comments: [action.payload, ...state.post.comments]
          }
        };*/
      default:
        return state;
    }
  }