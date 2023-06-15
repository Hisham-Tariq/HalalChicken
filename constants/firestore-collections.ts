import {firestore} from '@/config/firebase'
import { CollectionReference, DocumentData, collection } from 'firebase/firestore'


const FirestoreCollectionsList = ['FoodItems', 'Users', 'Orders', 'OrderItems', 'Deals'] as const
type FirestoreCollection = typeof FirestoreCollectionsList[number]

type FirestoreCollectionRecord = Record<FirestoreCollection, CollectionReference<DocumentData>>

export const FirestoreCollections: FirestoreCollectionRecord = FirestoreCollectionsList.reduce((acc, collectionName) => {
    acc[collectionName] = collection(firestore, collectionName)
    return acc
}, {} as FirestoreCollectionRecord)
