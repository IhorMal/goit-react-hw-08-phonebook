import { Contact } from "components/Contact/Contact";
import { Filter } from "components/Filter/Filter";
import { Phonebook } from "components/Phonebook/Phonebook";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/contactc/operations";
import css from './Contacts.module.css'

export default function Contacts() {
  const dispatch = useDispatch();
  


  useEffect( () =>{
    dispatch(fetchContacts())
  },[dispatch]);
  
    return (
    
      <div className={css.conteiner}>
         <h1 className={css.title}>Phonebook</h1>
         <Phonebook />
         <h2  className={css.titleContacts}>Contacts</h2>
         <Filter/>
         <Contact/>
       </div>
    
);
}