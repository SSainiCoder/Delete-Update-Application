import React from 'react'
//It will take props as shown below to assign and update the vlaues accordingly
const UpdatePost = ({
    postTitle,
    handleEditPost,
    submitEdit
  }) => {

    return(
        <div className="conatiner my-2">
        
            <input type="text" className='border border-secondary rounded-2 col-8 py-2' required="required" 
                   placeholder="Enter Post Value..." value={postTitle} onChange={handleEditPost} />   

            <br></br>
            <button type="button" className="btn btn-primary mx-2 my-2 py-2 col-3" onClick={submitEdit}>Submit</button>
        </div>
      ) 
}
export default UpdatePost;