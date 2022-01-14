import React, {useState, useEffect} from 'react'
import { db } from '../firebase-config';
import { collection, getDocs, addDoc, setDoc, doc } from 'firebase/firestore';
import './style.css'
import Modal from 'react-modal';
import { useUserAuth } from '../context/UserAuthContext';



const Home = () => {

  const [messages, setMessages] = useState([]);
  const [newMess, setNewMess] = useState("");

  const messRef = collection(db, 'messages');

  const showMess = () => {
    getDocs(messRef)
    .then((snapshot) => {
      // console.log(snapshot.docs);
      let tempMess = [];
      snapshot.docs.forEach((doc) => {
        tempMess.push({ ...doc.data(), id: doc.id });
      })
      // console.log(tempMess);
      setMessages(tempMess);
      // setNewMess(tempMess);
    })
    .catch((err) => {
      console.error(err.message);
    })
  }

  useEffect(() => {
    showMess();
  }, [messages])

  // console.log(messages.text);

  const addMess = async () => {
    console.log(newMess);
    const docRef = await addDoc(collection(db, "messages"), {
      message: newMess,
      name: user.displayName,
      image: user.photoURL,
      time: new Date().toTimeString().split(" ")[0],
      email: user.email,
    });
    setNewMess("");
 }

  


  const { user, logOut } = useUserAuth();
  console.log(user);
  const handleLogOut = async () => {
    try{
       await logOut();
    }
    catch(err){
      console.log(err.message);
    }
  }


  const [modalIsOpen, setIsOpen] = useState(false);

  //modal function
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  console.log(messages);

  return (
    <div>
      <nav className="main-nav">
        <header>
          <h2 className="home-header">chatsmith_</h2>
        </header>

        <section className="top-container">
         
           <div>
             <img onClick={openModal}  title="Notification" className="icon-modal" src="./assets/bell.svg" alt="notification" />
             <Modal className="box-modal"
              isOpen={modalIsOpen}
              onRequestClose={closeModal}>
             <div className="box-top">
                <h2>New Notification's</h2> 
             </div>
             <div className="box-bottom-line"></div>
             <div className="box-bottom">
               <img className="eye" src="./images/eye-logo_adobespark.png" alt="eye" />
               <h3>You're all caught up!</h3>
               <h3>There is no any new notification.</h3>
             </div>
            </Modal>
           </div> 
           
           <div className="profile-box-top" title="profile">
               <img className="profile-box-top" src={user.photoURL} alt="user" />
           </div>

           <img onClick={handleLogOut} className="icon" src="./assets/code.svg" title="sign out" alt="user" /> 
        </section>
      </nav>

      <div className="sendmsg-section">

        <div className="text-msg-box">

          <div className="head-welcome-text">
            <p>Welcome to <span className="bold">chatsmith</span>. One of the best chatting <span className="bold">platform</span> that are build by <span className="bold">Aniket A. Raikwar</span>.</p>
          </div>

          <div className="show-text-msg">
               {
                 messages.map((chat) => {
    
                   return user.email == chat.email ? 
                   (
                    <div id={chat.id} className="text-box-1">
                      <div className="profile-box">
                          <img className="profile-box" src={chat.image} alt="user" />
                      </div>

                      <div key={chat.time} className="content-box-1">
                          <div className="user-name">{chat.name}</div>
                          <div key={chat.time} className="text">{chat.message}</div>
                          <div className="time">send</div>
                      </div>
                    </div>
                    ) 
                    :
                    (
                        <div id={chat.id} className="text-box">
                          <div className="profile-box">
                              <img className="profile-box" src={chat.image} alt="user" />
                          </div>

                          <div key={chat.time} className="content-box">
                              <div className="user-name">{chat.name}</div>
                              <div key={chat.time} className="text">{chat.message}</div>
                              {/* <div className="time">{chat.time}</div> */}
                          </div>
                        </div>
                      )
                 })
               } 
          </div>
        </div>
      
        <div className="send-box">
          <div className="input-child">
             <input 
               className="input-send" 
               placeholder="Type a message..." 
               type="text"
               value={newMess}
               onChange={ e => {setNewMess(e.target.value)}}
             />
             <div className="msg-line"></div>
          </div>
          <button onClick={addMess} className="btn-send">SEND</button>
        </div>    

      </div>

    
    </div>
      
  ) 
}

export default Home
