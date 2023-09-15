import { useState } from "react";

export default function ProfileSearchForm({search}){
  const [term, setTerm] = useState("");

  function handleChange(event){
    setTerm(event.target.value);
  }
  function handleSubmit(event){
    event.preventDefault();
    search(term);
    setTerm("");
  }
  return(
    <form onSubmit={handleSubmit} style={{marginTop: '20px'}}>
      <input value={term} onChange={handleChange} type="text" style={{height:'50px', width:'250px', backgroundColor:'white', color:'grey', fontSize:'20px'}}/> <br />
      <button style={{marginTop: '20px', height:'50px', width:'200px'}}>Sarch on Github</button>
    </form>
  )
}