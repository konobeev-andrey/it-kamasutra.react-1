import React from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

let state = {
    postsData: [
        {id: 1, message: 'Hi, how are you', likesCount: 10},
        {id: 2, message: 'it\'s my first post', likesCount: 20},
    ]}

test('length of posts should be incremented', () => {
    let action = addPostActionCreator('It-kamasutra.com')

   let newState = profileReducer(state,action)
    expect(newState.postsData.length).toBe(3)
});

test('message of new posts should be correct', () => {
    let action = addPostActionCreator('It-kamasutra.com')

    let newState = profileReducer(state,action)
    expect(newState.postsData[2].message).toBe('It-kamasutra.com')
});
test('after deleting length of messages should be decrement ', () => {
    let action = deletePost(1)

    let newState = profileReducer(state,action)
    expect(newState.postsData.length).toBe(1)
});