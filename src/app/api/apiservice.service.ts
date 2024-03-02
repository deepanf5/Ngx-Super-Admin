import { Injectable, signal } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';




interface Users {

  firstName: 'default name',
  LastName: 'default name',
  email: 'default email',
  gender: 'default gender'
  mobileNumber: 'mobile number'
  address: 'address'
  state: 'state'
  city: 'city'
  zipcode: 'zipcode'
  orders: '6'
}

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private fs: Firestore,) { }

  usersDetails = signal<Users[]>([])
  disable = signal(true);
  addButton = signal(true)
  sendId = signal(0)



  login() {
    let admin = collection(this.fs, 'admin')
    return collectionData(admin, { idField: 'id' });

  }


  sendUsers(details: any) {

    this.usersDetails.set(details)
  }

  setDisable(setDisplay: boolean) {
    this.disable.set(setDisplay);
  }

  setAddButton(setDisplay: boolean) {
    this.addButton.set(setDisplay)
  }

  setId(id: number) {
    this.sendId.set(id);
  }





  // http calls 

  get() {
    let allUsers = collection(this.fs, 'users')
    return collectionData(allUsers, { idField: 'id' });
  }

  add(user: any) {

    let userCollection = collection(this.fs, 'users')
    return addDoc(userCollection, user)
  }


  delete(id: string) {
    let user = doc(this.fs, 'users/' + id);
    return deleteDoc(user)
  }

  edit(id: string, user: any) {
    let updateUser = doc(this.fs, 'users/' + id);
    return updateDoc(updateUser, user)
  }


  addDeletedUser(user: any) {
    let userCollection = collection(this.fs, 'deletedUsers')
    return addDoc(userCollection, user)

  }


  getDeletedUser() {
    let deletedUser = collection(this.fs, 'deletedUsers')
    return collectionData(deletedUser, { idField: 'id' });

  }


}
