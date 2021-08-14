import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((note) => (                                                  // .map() crééer un array à partir d'élements d'un autre array notes[], chaque index de l'array prendra le nom (note)
        <Note key={note.key} title={note.title} content={note.content} />     // on récupère les data voulu et on les envoit au props. On réitière jusquà la fin du tableau
      ))}
      <Footer />
    </div>
  );
}

export default App;
