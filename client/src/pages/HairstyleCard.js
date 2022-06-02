import React from 'react';
import { Box, Button } from "../styles";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useState, useEffect} from "react";
import EditHairstyle from "./EditHairstyle";
import { useHistory } from "react-router";

function HairstyleCard({hairstyle, id, onDeleteHairstyle, user, onUpdateHairstyle}) {

    let {key} = useParams(id);
    const [hairstyleObj, setHairstyleObj] = useState(hairstyle);
    const [editHairstyle, setEditHairstyle] = useState(false);
    const history = useHistory();
  
    useEffect(() => {
      fetch(`/hairstyles/${id}`)
      .then(res => res.json())
      .then(hairstyle => setHairstyleObj(hairstyle))
      
    }, [])

    function handleDelete(){
      fetch(`/hairstyles/${id}`, {
          method: 'DELETE'
      })
      .then((res) => {
          if (res.ok) {
             onDeleteHairstyle(hairstyle)
          }
      })
  }
 
  function handleUpdateClick() {
    setEditHairstyle(true)
  }
  
    if (!hairstyleObj) return <h3>Loading...</h3>
    
    return (
      <Box>
      { editHairstyle ?  
      <EditHairstyle hairstyle={hairstyleObj} user={user} setEditHairstyle={setEditHairstyle} setHairstyleObj={setHairstyleObj} /> 
      : (
        <>
          <Button onClick={handleUpdateClick}>
          Edit Hairstyle
          </Button>
           <h2>{hairstyleObj.title}</h2> 
           <p>
            <em>Time to Complete: {hairstyleObj.minutes_to_complete} minutes</em>
            &nbsp;·&nbsp;
           </p>
           <ReactMarkdown>{hairstyleObj.instructions}</ReactMarkdown>
          <Button onClick={handleDelete}>Delete</Button>
        </>
      )}
      </Box>
    )}

export default HairstyleCard