import React from "react";

function Note(props) {

  function handleClick() {
    props.onDelete(props.id)                                                // récupération de l'id de App.jsx grace au props
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>                         {/* la fonction handleClick() est appelé quand on click */}
    </div>
  );
}

export default Note;
