import React, {useReducer} from 'react'
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext'
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';
   
const ContactState = props =>{
    const initialState ={
        contacts: [
           {
               id:1,
               name: 'Ephantufs Okumu',
               email: 'eohnet@gmail.com',
               phone: '+25471566336467',
               type: 'personal'
           },
           {
            id:2,
            name: 'Ephantuccs Okumu',
            email: 'eohnet@gmail.com',
            phone: '+25471566336467',
            type: 'personal'
        }, {
            id:3,
            name: 'Ephaccntus Okumu',
            email: 'eohnet@gccmail.com',
            phone: '+2547156cc6336467',
            type: 'profesional'
        }

        ]
    };
 const [state, dispatch] = useReducer(contactReducer, initialState);

 //add contacts
 const addContact = contact =>{
     contact.id = uuidv4;
     dispatch({type: ADD_CONTACT, payload:contact});
 };

 //delete contacts

 const deleteContact = id =>{
    dispatch({type: DELETE_CONTACT, payload:id});
};

 //set current cotnatc

 //clear

 //update

 //filter contacts


 return (
     <ContactContext.Provider 
     value={{
         contacts:state.contacts,
         addContact,
         deleteContact
     }}>
    {props.children}
     </ContactContext.Provider>
 )
};

export default ContactState;