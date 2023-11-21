import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userID) {
    let items = [];
    try {
        let collectionReference = collection(db, "users", userID, "items");
        const querySnapshot = await getDocs(collectionReference);
        querySnapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() });
        });
    } catch (error) {
        console.error("Error fetching items:", error);
    }
    return items;
}

export async function addItem(userID, itemObj) {
    try {
        let collectionReference = collection(db, "users", userID, "items");
        const docRef = await addDoc(collectionReference, itemObj);
        return docRef.id;
    } catch (error) {
        console.error("Error adding item:", error);
    }
}