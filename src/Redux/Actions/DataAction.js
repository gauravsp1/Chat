import {
  SET_POSTS,
  LOADING_DATA,
  STOP_LOADING_DATA,
  LIKE_POST,
  UNLIKE_POST,
  DELETE_POST,
  SET_ERRORS,
  POST_POST,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_POST,
  STOP_LOADING_UI,
  SUBMIT_COMMENT
} from './ActionType';
import axios from 'axios';

export default {
  // Get all posts
  getPosts() {
    console.log("Clicked");
    return async (dispatch) => {
      dispatch({ type: LOADING_DATA });

      const response =  await  axios.get('/screams')
      console.log("Datas", response);
      if (response.status === 200) {
            dispatch({
              type: SET_POSTS,
              payload: response.data
            });
  
            dispatch({ type: STOP_LOADING_DATA });
            return response;
          }
      // .then((res) => {
      //   console.log("Data", res?.data);
      //   console.log("DataR", res);
      //   const response = res?.data
      //   if (res.status === 200) {
      //     dispatch({
      //       type: SET_POSTS,
      //       payload: response
      //     });

      //     dispatch({ type: STOP_LOADING_DATA });
      //     return response;
      //   }


      // }).catch((err) => {
      //   console.log(err?.response);
      // });

          }


    },
      posts(){
      const success = (data) => ({
        type: SET_POSTS,
        data,
      });
      return (dispatch) => {
        axios.get('/screams').then((res) => {
          console.log("ReduxData", res?.data)
          dispatch(success(res.data));
        })
      }
    },
    /*
     getPost = (screamId) => (dispatch) => {
      dispatch({ type: LOADING_UI });
      axios
        .get(`/scream/${screamId}`)
        .then((res) => {
          dispatch({
            type: SET_POST,
            payload: res.data
          });
          dispatch({ type: STOP_LOADING_UI });
        })
        .catch((err) => console.log(err));
    },
    */
    // Post a scream

    addContent(newpost) {
      return (dispatch) => {
        dispatch({ type: LOADING_UI });
          let date=new Date()
          let today=date.toLocaleDateString()
          let screamId= Math.floor(Math.random()*100+10)
          console.log("screamId",screamId);
          let body={
            screamId,
            today,
            body: newpost.body
          }
          setTimeout(()=>{

            dispatch({ type: POST_POST ,
              payload:body
            });
            dispatch({ type: STOP_LOADING_UI });
          },1000)

        // // const url="https://us-central1-ecstatic-backup-314504.cloudfunctions.net/api/posts"
        // axios
        //   .post("/posts", newpost)
        //   .then((res) => {
        //     console.log("Post", res.data);
        //     // dispatch({
        //     //   type: POST_POST,
        //     //   payload: res.data
        //     // });
        //   })
        //   .catch((err) => {
        //     // dispatch({
        //     //   type: SET_ERRORS,
        //     //   payload: err.response.data
        //     // });
        //     dispatch({ type: STOP_LOADING_UI });
        //     console.log(err);
        //   });


      }
    },

    // Like a scream
    likePost(postId) {
      return (dispatch) => {
      dispatch({
        type: LIKE_POST,
        payload: postId
      })
    }
      // return (dispatch) => {
      //   axios
      //     .get(`/scream/${postId}/like`)
      //     .then((res) => {
      //       console.log("res",res.data);
      //       dispatch({
      //         type: LIKE_POST,
      //         payload: res.data
      //       });
      //     })
      //     .catch((err) => console.log(err));
      // }


    },
    // Unlike a scream
    unlikePost(postId) {
      return (dispatch) => {
      dispatch({
        type: UNLIKE_POST,
        payload: postId
      });
    }
      // return (dispatch) => {
      //   axios
      //     .get(`/scream/${postId}/unlike`)
      //     .then((res) => {
      //       dispatch({
      //         type: UNLIKE_POST,
      //         payload: res.data
      //       });
      //     })
      //     .catch((err) => console.log(err));
      // }

    },
    /*
    // Submit a comment
     submitComment = (screamId, commentData) => (dispatch) => {
      axios
        .post(`/scream/${screamId}/comment`, commentData)
        .then((res) => {
          dispatch({
            type: SUBMIT_COMMENT,
            payload: res.data
          });
          dispatch(clearErrors());
        })
        .catch((err) => {
          dispatch({
            type: SET_ERRORS,
            payload: err.response.data
          });
        });
    },
    */
    deleteScream(postId) {
      return (dispatch) => {
        axios
          .delete(`/post/${postId}`)
          .then(() => {
            dispatch({ type: DELETE_POST, payload: postId });
          })
          .catch((err) => console.log(err));
      }
    },
    /*
     getUserData = (userHandle) => (dispatch) => {
      dispatch({ type: LOADING_DATA });
      axios
        .get(`/user/${userHandle}`)
        .then((res) => {
          dispatch({
            type: SET_POSTS,
            payload: res.data.screams
          });
        })
        .catch(() => {
          dispatch({
            type: SET_POSTS,
            payload: null
          });
        });
    };
    */



    clearErrors() {
      return (dispatch) => {
        dispatch({ type: CLEAR_ERRORS });
      }
    }
  }