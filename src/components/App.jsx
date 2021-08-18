import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {                                                               // le paramètre de la fonction est celui que l'on a passer dans onAdd(), à savoir (note), l'array de CreateArea.jsx est donc maintenant accessible dans App.jsx
    setNotes((preNote) => {                                                              // on peuple l'array notes[] selon une fonction
      return [...preNote, note];                                                         // qui retourne les valeurs précédantes de note[] et la nouvelle.                  
    }); 
   
    
  }

  function deleteNote(id){                                                               // quand handleClick() de Notes.jsx est triggée, deleteNote() l'est aussi, elle prend comme param (id)
     setNotes(prevNotes => {                                                             // on peuple Notes[] par la fonction suivante : 
       return prevNotes.filter((note, index) => {                                        // est retourné par la méthode .filter() tous les éléments précédants
         return index !== id;                                                            // dont l'index est différent de l'id de l'item qui a eu sont bouton delete clické. 
       });
     });
    }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />                                                     {/*props à laquelle sera liée la fonction submitNote() de CreateArea.jsx  */}
      {notes.map((noteItem, index) => {                                                   // on créer un array à partir de l'array notes[], et on itère
        return <Note                                                                      // l'objet JS qui y est inscrit dans chacun de ses élements, dans une <Note /> 
        key={index}                                                                       // la valeur de l'index est récupéré grace au paramètre de la méthode .map()
        id={index}
        onDelete={deleteNote}
        title={noteItem.title} 
        content={noteItem.content} />;                                                    
      })}
      <Footer />
    </div>
  );
}

export default App;
