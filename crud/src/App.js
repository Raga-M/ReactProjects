import { useEffect, useState } from "react";
import {Toast,Table,Container,Tooltip,OverlayTrigger} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./App.css";
// import { Table } from "react-bootstrap";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [editShow, setEditShow] = useState(false);

  const editHandleClose = () => setEditShow(false);
  const editHandleShow = () => setEditShow(true);
  const [user, setUser] = useState([]);
  const [addToaster,setAddToaster]=useState(false)
  const [editToaster,setEditToaster]=useState(false)
  const [deleteToaster,setDeleteToaster]=useState(false)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

    const [newname, setNewName] = useState("");
    const [newemail, setNewEmail] = useState("");
    const [newwebsite, setNewWebsite] = useState("");
    const [editUser, setEditUser] = useState(null);
    const [editname, setEditName] = useState("");
    const [editemail, setEditEmail] = useState("");
    const [editwebsite, setEditWebsite] = useState("");

    function updateUser(user){
      setEditUser(user)
      setEditName(user.name)
      setEditEmail(user.email)
      setEditWebsite(user.website)
      editHandleShow()
    }

    function addUser(){
      handleClose();
      const name=newname.trim();
      const email=newemail.trim();
      const website= newwebsite.trim();

      if(name && email && website)
      {
       fetch("https://jsonplaceholder.typicode.com/users",
       {
        method:"POST",
        headers:{
        'Content-Type':"application/json ; charset=UTF-8" 
      },
          
        body:JSON.stringify({
          name,
          email,
          website})  
        }
       )
       .then(res=> res.json())
          .then(data => setUser([...user,data]))

          setAddToaster(true)  
          setTimeout(()=>{
            setAddToaster(false)  
          },3000)    
      
    }

  }

  function deleteUser(id){
  
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
       {
        method:"DELETE",
       }
      )
      .then(res=> res.json())
      .then(() => setUser((user)=>{ return user.filter((user)=> user.id !== id)}
      ))
      setDeleteToaster(true)  
      setTimeout(()=>{
        setDeleteToaster(false)  
      },3000) 
  }

  function updated(){
    editHandleClose()
const updatedUser=user.map(user => user.id === editUser.id ? {...user,name:editname,email:editemail,website:editwebsite }: user)
setUser(updatedUser);
console.log(editUser.id);
      fetch(`https://jsonplaceholder.typicode.com/users/${editUser.id}`,
      {
       method:"PUT",
       headers:{
       'Content-Type':"application/json ; charset=UTF-8" 
     },
         
       body:JSON.stringify(editUser)  
       }
      )
      .then(res=> res.json())
       

         setEditToaster(true)  
         setTimeout(()=>{
           setEditToaster(false)  
         },3000)    
     
   }



  return (
    <div className="">

       
    <h2 className="text-center fw-semibold text-info p-2">CRUD Operation</h2>
<Container>
<div className="d-flex justify-content-between mb-4"><h4 className="text-info fw-semibold ">User List</h4> <button className="btn btn-info text-white" onClick={handleShow}>Add user</button></div>

    <Table  bordered hover responsive className="costum-striped" >
        <thead >
          <tr className="text-center bg-info text-white " >
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          
          {user.map((user) => (
            <tr className="text-center " key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td className="d-flex gap-2 justify-content-center">
              <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={    <Tooltip id="button-tooltip" >
 
      Update
  
      </Tooltip>}
    >
                <button className="edit bg-edit"  onClick={()=>updateUser(user)}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8252 6.00786C15.8422 4.99087 17.4911 4.99087 18.5081 6.00786L19.2447 6.74442C20.2616 7.76141 20.2616 9.41029 19.2447 10.4273L10.774 18.8978H7.39634C6.82104 18.8978 6.35466 18.4314 6.35468 17.8561V14.4784L14.8252 6.00786ZM17.035 7.48099L17.7715 8.21757C17.9749 8.42096 17.9749 8.75073 17.7715 8.95413L16.6666 10.059L15.1935 8.58585L16.2983 7.48099C16.5017 7.2776 16.8315 7.2776 17.035 7.48099ZM15.1935 11.5322L9.91114 16.8145H8.43801V15.3413L13.7204 10.059L15.1935 11.5322Z" fill="white"></path>
                          </svg></button>
                          </OverlayTrigger>

                          <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={    <Tooltip id="button-tooltip" >
 
Delete
  
      </Tooltip>}
    >
                <button className="delete bg-del" onClick={()=>deleteUser(user.id)}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                              <path d="M17.4031 9.07022L13.9729 12.5004L17.4031 15.9306C17.5026 16.0267 17.582 16.1417 17.6366 16.2688C17.6912 16.3958 17.7199 16.5325 17.7211 16.6708C17.7223 16.8092 17.6959 16.9463 17.6436 17.0743C17.5912 17.2024 17.5138 17.3187 17.416 17.4165C17.3182 17.5143 17.2019 17.5916 17.0739 17.644C16.9459 17.6964 16.8087 17.7227 16.6704 17.7215C16.5321 17.7203 16.3954 17.6916 16.2683 17.637C16.1412 17.5824 16.0263 17.503 15.9302 17.4036L12.5 13.9733L9.06979 17.4036C8.9737 17.503 8.85876 17.5824 8.73167 17.637C8.60459 17.6916 8.4679 17.7203 8.32959 17.7215C8.19128 17.7227 8.05411 17.6964 7.92609 17.644C7.79808 17.5916 7.68177 17.5143 7.58397 17.4165C7.48616 17.3187 7.40881 17.2024 7.35644 17.0743C7.30406 16.9463 7.27771 16.8092 7.27891 16.6708C7.28011 16.5325 7.30885 16.3958 7.36344 16.2688C7.41803 16.1417 7.49739 16.0267 7.59688 15.9306L11.0271 12.5004L7.59688 9.07022C7.49739 8.97413 7.41803 8.85919 7.36344 8.7321C7.30885 8.60501 7.28011 8.46833 7.27891 8.33001C7.27771 8.1917 7.30406 8.05454 7.35644 7.92652C7.40881 7.7985 7.48616 7.6822 7.58397 7.58439C7.68177 7.48659 7.79808 7.40924 7.92609 7.35687C8.05411 7.30449 8.19128 7.27813 8.32959 7.27934C8.4679 7.28054 8.60459 7.30927 8.73167 7.36387C8.85876 7.41846 8.9737 7.49782 9.06979 7.59731L12.5 11.0275L15.9302 7.59731C16.0263 7.49782 16.1412 7.41846 16.2683 7.36387C16.3954 7.30927 16.5321 7.28054 16.6704 7.27934C16.8087 7.27813 16.9459 7.30449 17.0739 7.35687C17.2019 7.40924 17.3182 7.48659 17.416 7.58439C17.5138 7.6822 17.5912 7.7985 17.6436 7.92652C17.6959 8.05454 17.7223 8.1917 17.7211 8.33001C17.7199 8.46833 17.6912 8.60501 17.6366 8.7321C17.582 8.85919 17.5026 8.97413 17.4031 9.07022Z" fill="white"></path>
                            </svg></button>
                            </OverlayTrigger>
              </td>
            </tr>
          ))}
 
        </tbody>
      </Table>

      </Container> 


      <Toast show={addToaster}  className="success  position" >
        
        <Toast.Body className="text-white text-center fw-bold">User Add successfully ✌️ </Toast.Body>
      </Toast>
            <Toast show={deleteToaster}  className="danger  position" >
          
        <Toast.Body className="text-white text-center fw-bold">User Delete successfully 🫠 </Toast.Body>
      </Toast>
            <Toast show={editToaster}  className="warning  position" >
          
        <Toast.Body className="text-white text-center fw-bold">User Update successfully 👍</Toast.Body>
      </Toast>
  

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton className="bg-info text-white">
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <div className="bg-light d-flex  flex-column g-3 gap-4 px-5 ">
        

        <div>
          
          <input
            type="text"
          className="form-control"
            placeholder="Enter your Name"
            onChange={(e)=>setNewName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
          className="form-control"
            placeholder="Enter your email"
 onChange={(e)=>setNewEmail(e.target.value)}
          />
        </div>
        <div>
          <input 
            type="website"
          className="form-control"
            placeholder="Enter your Website"
                 onChange={(e)=>setNewWebsite(e.target.value)}
          />
        </div>
        <div>
         
         
         
        </div>
      </div></Modal.Body>
        <Modal.Footer className="bottom-colr-border">
       
          <Button variant="info" className="text-white" onClick={addUser}>
          Add User
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={editShow} onHide={editHandleClose} >
        <Modal.Header closeButton className="bg-info text-white">
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <div className="bg-light d-flex  flex-column g-3 gap-4 px-5 ">
        

        <div>
          
          <input
            type="text"
          className="form-control"
        value={editname}
            onChange={(e)=>setEditName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
          className="form-control"
      value={editemail}
 onChange={(e)=>setEditEmail(e.target.value)}
          />
        </div>
        <div>
          <input contentEditable="true"
            type="website"
          className="form-control"
         value={editwebsite}
                 onChange={(e)=>setEditWebsite(e.target.value)}
          />
        </div>
        <div>
         
         
         
        </div>
      </div></Modal.Body>
        <Modal.Footer className="bottom-colr-border">
       
          <Button variant="info" className="text-white" onClick={updated}>
          Update User
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default App;
