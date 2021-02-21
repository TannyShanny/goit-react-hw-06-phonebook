import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/add", (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

export const deleteContact = createAction("contacts/delete");
export const changeFilter = createAction("contacts/changeFilter");

// ** Redux

// import * as actionTypes from './types';

// export const addContact = (name, number) => ({
//   type: actionTypes.ADD_CONTACT,
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// });

// export const changeFilter = value => ({
//   type: actionTypes.CHANGE_FILTER,
//   payload: value,
// });

// export const deleteContact = contactId => ({
//   type: actionTypes.DELETE_CONTACT,
//   payload: contactId,
// });
