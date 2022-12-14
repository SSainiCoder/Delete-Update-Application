import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Record from './Record';
import UpdatePost from './UpdatePost';


export default function SetOfpostRecords() {
  
  //initializing the states to store the data and component visibility on action
  const [combinedData, setCombinedData] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [getIndex, setIndex] = useState(0);

  let myObjectArr =[]; //array initialized to store the object from APIs in a form of [{"post" : {...},"album" : {...}"user" : {...}},...])

 //fetchData() fucntion to call the data from the APIs and store into the array object declared and pushed into combinedData state
  const fetchData = async () => {
    const postApi= 'https://jsonplaceholder.typicode.com/posts';
    const albumApi= 'https://jsonplaceholder.typicode.com/albums';
    const userApi = 'https://jsonplaceholder.typicode.com/users';
  
    const getPost = await axios.get(postApi)
    const getAlbum = await axios.get(albumApi)
    const getUser = await axios.get(userApi)
    axios.all([getPost, getAlbum, getUser]).then(
      axios.spread((...allData) => {
         for(let i=1; i<=10; i++) {   

          let object = {
                  post: "", 
                  album: "", 
                  user: ""
          }
      
          let rand = Math.floor(Math.random() * 99) + 0; 
          object.post = allData[0]?.data[rand]?.title
          object.album = allData[1]?.data[rand]?.title;
          object.user = allData[2]?.data[i-1]?.username;

          myObjectArr.push(object)
        } 
        setCombinedData(myObjectArr)    
      })
    )   
  }

  //useEffect() used to trigger the fetchData()
  useEffect(() => {   
    fetchData()   // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  //filterRows to delete the record on user action
  const filterRows = (id) => {
    var newArr = combinedData;
    newArr.splice(10,10)
    if(id.key>=0 && id.key<10 && window.confirm("Are you sure you want to delete this record associated with "+(newArr[id.key].user)+" ?"))//this condition allows to workt close button from 1 to 10 
    {      
      newArr.splice(id.key,1)   
      setCombinedData([...newArr])
    }
    
  }

  //It will render the UpdatePost component the screen for editting
  const editPost = (id) => {
    if(id.key>=0 && id.key<10){  
      var newArr = combinedData;
      newArr.splice(10,10);
      console.log(newArr[id.key].post);
      let index = id.key;
      setIndex(index)     
      setIsShown(current => !current);}  
  }

 //This function will update the value on in the table on keypress
  const handleEditPost = (e) => {
    let index = getIndex;
    let value = e.target.value;
    var newArr = combinedData;
    setCombinedData([...newArr], newArr[index].post = value)
  }

//clicking on this button will permanently save the data into obejct array and close the rendered UpdatePost
 const submitEdit = () => {
  if(combinedData[getIndex].post.length===0)
   {window.alert("Post Title Cannot be Null !")}
   if(combinedData[getIndex].post.length!==0)
   {setIsShown(current => !current);}
}
   
  //It will display the output in tabualr form from the combinedData state
  return(
    <>
      
      <div className='container my-5'>
          
          <table className="table table-striped table-hover my-5">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">POSTS</th>
                <th scope="col">ALBUMS</th>
                <th scope="col">USERS</th>
                <th scope="col">ACTIONS</th>
              </tr>
            </thead>
            {combinedData.map((element,key) => {
              return <tbody key={key}>
                    <tr>
                      <th scope="row">{key+1}</th>

                        <td><Record PostTitle={element.post} /></td>                        
                        <td><Record  AlbumTitle={element.album}/></td>
                        <td><Record Username={element.user}/></td>

                        <td className='col-3'>
                            <button type="button" id="delete-btn-post" className='btn btn-danger col-2' onClick={()=>filterRows({key})}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                                    </svg>
                              </button> 
                              <button type="button" className='btn btn-primary col-2 mx-2' onClick={()=>editPost({key})}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                  </svg>
                              </button> 
                            
                              {isShown && (key)===getIndex && <UpdatePost postTitle={element.post} handleEditPost={handleEditPost} submitEdit={submitEdit} />}
                                  
                        </td>
                    </tr>        
                </tbody> 
                       
            })}         
          </table> 
          
      </div> 
    </>
  )
  
}

