import React, {useState} from "react";

function CreateArea(props) {
  const[note, setNote] = useState({
    title:"",
    content:""
  });
 
  function handleChange(event){                                                      // lorsque qu'il ya de la saisie
    const {name, value} = event.target;                                              // on stocke dans un objet JS, les évènements correspondant aux attributs name et value
    
    setNote((preValue) => {                                                          // on enregistre dans l'array note[] selon une fonction anonyme dont l'historique est stockée dans la variable preValue ( que l'on met en paramètre)
      return{                                                                        // cette fonction retourne à l'array note[]
        ...preValue,                                                                 // la liste des valeurs précédantes
        [name] : value                                                               // et là où name.title ou name.content a été modifié on envoit la valeur correspondante.
      };
    });
  }
  
  function submitNote(event){ 
    props.onAdd(note);                                                               // on passe à la fonction onApp() de App.jsx, l'array note[] au moyen d'une props
    setNote({                                                                        // permet de supprimer les champ de saisie "title" et "content" en même que le bouton "add" est clické
      title:"",
      content:""
    });
    event.preventDefault();                                                          // on empêche la comportement habituelle d'une form de se mettre à jour automatiquement et de perdre ainsi les données
  }
  
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={submitNote} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
