// CRUD operations for db task goes here

import { db } from "./index";
import { collection, addDoc } from "firebase/firestore";

export const addNewTask = async task => {
    await addDoc(collection(db, "tasks"), task)
} 