import {
    getAuth,
    signInWithEmailAndPassword,
    deleteUser
} from 'firebase/auth';
import { app } from './index'

const auth = getAuth;

export const deleteTestUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        deleteUser(user)
        .then(() => console.log('User removed'))
    })
    .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.errorMessage
    })
}