import React from 'react';
import './createPost.css';

const CreatePost = () => {
    return (
        <div className="createpost">
            <h1>Create News Post</h1>
            <form action="">
                <div className="input">
                    <label htmlFor="posttitle">Post Title</label><br/>
                    <textarea name="posttitle" cols="30" rows="4">title text</textarea>
                </div>
                <div className="input">
                    <label htmlFor="postimage">Post Image</label>
                    <input type="file" name="postimage"  />
                </div>
                <div className="input">
                    <label htmlFor="posttext">Post Text</label><br/>
                    <textarea name="postText" cols="30" rows="8">Post Text</textarea>
                </div>
                <div className="button">
                    <button>Submit</button>
                </div>
            </form>
        </div>
      );
}
 
export default CreatePost;