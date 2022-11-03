import React from 'react';
import addAvatar from '../assets/addAvatar.png';
import { createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from '../helpers/firebase';
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom'

export const Register = () => {
  const [error, setError] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const data = await createUserWithEmailAndPassword(auth , email , password);
      
      const metadata = {
        contentType: 'image/jpeg'
      };

      const storageRef = ref(storage, 'images/' + displayName);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');

        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default :
            console.log('Default')
            break;   
      }
    }, 
      (error) => {
        setError(true)
    }, 
       () => {
     getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
        await updateProfile(data.user, {
          displayName,
          photoURL: downloadURL
        })
        await setDoc(doc(db, 'users', data.user.uid), {
          uid: data.user.uid,
          displayName,
          email,
          photoURL: downloadURL
        })

        await setDoc(doc(db, 'userChat', data.user.uid), {})
         navigate('/login')
    });
  }
);


  } catch (erro) {
    setError(true)
}
  }

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'> Dogs Chat </span>
        <span className='title'>Registre-se</span>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Digite seu Nome'/>
          <input type='email' placeholder='Digite um e-mail'/>
          <input type='password'  placeholder='Digite uma senha'/>
          <label htmlFor='file'> 
            <img src={addAvatar} alt="" />
            Adicione sua foto
          </label>
          <input id='file' style={{display: 'none'}} type='file'/>
          <button> Cadastre-se </button>
        </form>
        <p> Já possui cadastro? Login</p>
        {error && <span>Algo deu errado</span>}
      </div>
    </div>)
}

