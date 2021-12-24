import React from 'react';
import styles from './home.module.css'; 

//hooks
import {useEffect, useState} from "react";

//Source documentatie https://developer.spotify.com/

const Home = () => {
const CLIENT_ID = "88bf89bf5a0f4c3d95c4bd0379a6ab5c"
const REDIRECT_URI = "http://localhost:3000/home"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"


  return (    
    <div className={styles.home}>
      <h1>Hier komt de Spotify API implementatie.</h1> 
      <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
    </div>
      
  );
};


export default Home;