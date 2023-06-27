import { createContext, useState } from 'react';
export const NotesContext = createContext();


export const NotesProvider = ({ children }) => {
      const [writtenAddNotes,setWrittenAddNotes] = useState([])

      const handleAddNotes = (notesCollection) => {
            setWrittenAddNotes((prevNotes) => [...prevNotes, notesCollection]);
          };


      return (
            <NotesContext.Provider value={{ handleAddNotes, writtenAddNotes, setWrittenAddNotes}}>
                  {children}
            </NotesContext.Provider>
      )

}


// let notes = localStorage.getItem('notes')
// if(notes !== null){
//       notes=JSON.parse(notes)
//       setWrittenAddNotes(notes)
// }else{
//       setWrittenAddNotes((prevNotes) => [...prevNotes, notesCollection]);
//       localStorage.setItem('notes',writtenAddNotes)
// }