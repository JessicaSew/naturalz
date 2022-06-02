import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Button, Error, FormField, Input, Label, Textarea } from "../styles";

function EditHairstyle({ hairstyle, user, setEditHairstyle, setHairstyleObj, handleGoBackClick}) {
  const [title, setTitle] = useState(hairstyle.title)
  const [minutesToComplete, setMinutesToComplete] = useState(hairstyle.minutes_to_complete);
  const [instructions, setInstructions] = useState(hairstyle.instructions);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();


  function handleGoBackClick(e) {
    e.preventDefault();
     setEditHairstyle(false)
     window.location.reload(false);
   }
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch(`/hairstyles/${hairstyle.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                title,
                minutes_to_complete: minutesToComplete,
                instructions
            }
        ),
      })
    .then((r) => {
      setIsLoading(false);
     
      if (r.ok) {
       r.json().then(hairstyleObj => { 
        setHairstyleObj(hairstyleObj)
        setEditHairstyle(false)
          }) 
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Wrapper>
      <WrapperChild>
        <h2>Edit Hairstyle</h2>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="minutesToComplete">Minutes to complete</Label>
            <Input
              type="number"
              id="minutesToComplete"
              value={minutesToComplete}
              onChange={(e) => setMinutesToComplete(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="instructions">Instructions</Label>
            <Textarea
              id="instructions"
              rows="10"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </FormField>
          <FormField>
            <Button color="secondary" type="submit">
              {isLoading ? "Loading..." : "Update Hairstyle"}
            </Button>
          </FormField>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
      </WrapperChild>
      <WrapperChild>
        <h1>{title}</h1>
        <p>
          <em>Time to Complete: {minutesToComplete} minutes</em>
          &nbsp;·&nbsp;
          <cite>By {user.username}</cite>
        </p>
        <ReactMarkdown>{instructions}</ReactMarkdown>

        <Button color="secondary" type="submit" onClick={handleGoBackClick}>
           Go Back
            
            </Button>
      </WrapperChild>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default EditHairstyle;
