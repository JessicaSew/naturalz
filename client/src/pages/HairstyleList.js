import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import HairstyleCard from "./HairstyleCard"

function HairstyleList({user}) {
  const [hairstyles, setHairstyles] = useState([]);

  useEffect(() => {
    fetch("/hairstyles")
      .then((res) => res.json())
      .then(setHairstyles);
  }, []);

  function handleDeleteHairstyle(hairstyleToDelete) {
    const updatedHairstyles = hairstyles.filter((hairstyle) => hairstyle.id !== hairstyleToDelete.id);
    setHairstyles(updatedHairstyles);
  }

  function handleUpdateHairstyle(updatedHairstyle) {
    const updatedHairstyles = hairstyles.map((hairstyle) =>
      hairstyle.id === updatedHairstyle.id ? updatedHairstyle : hairstyle
    );
    setHairstyles(updatedHairstyles);
  }

  return (
    <Wrapper>
      {hairstyles.length > 0 ? (
        hairstyles.map((hairstyle) => (

          <HairstyleCard 
          id={hairstyle.id} 
          user={user}
          hairstyle={hairstyle}
          onDeleteHairstyle={handleDeleteHairstyle}
          onUpdateHairstyle={handleUpdateHairstyle}
          />
          
        ))
      ) : (
        <>
          <h2>No Hairsyles Found</h2>
          <Button as={Link} to="/hairstyles/new">
            Make a New Hairstyle
          </Button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

export default HairstyleList;