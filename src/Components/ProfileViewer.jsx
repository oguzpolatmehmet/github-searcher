import axios from "axios"
import ProfileSearchForm from "./ProfileSearchForm"
import { useState, useEffect } from "react"

const BASE_URL = "https://api.github.com/users"

export default function ProfileViewer(){
  const [username, setUsername] = useState('oguzpolatmehmet');
  const [profile, setProfile] = useState({data: null, isLoading: true});

  useEffect(
    function fetchUserOnUsernameChange(){
      async function fetchUser(){
        const userResult = await axios.get(`${BASE_URL}/${username}`)
        console.log(userResult)
        setProfile({data: userResult.data, isLoading: false})
      }
      fetchUser();
    },[username])

  function search(username){
    setProfile({data: null, isLoading: true});
    setUsername(username)
  }
  
  if(profile.isLoading) return <i>Loading .... </i>
  
  return (
    <div style={{display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '5px solid white', borderRadius:'25px' ,padding: '100px'}}>
      <b style={{margin:'25px', fontSize:'60px'}}>{profile.data.login}</b>
      <img src={profile.data.avatar_url} style={{border: '5px solid grey', borderRadius:'5px'}}></img>
      <ProfileSearchForm search={search}/>
    </div>
  )
}