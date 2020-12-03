import { AngularFireStorage } from '@angular/fire/storage';
import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, listChanges } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DbFirebaseService {

  constructor(private dbFire: AngularFireDatabase, private fileFire : AngularFireStorage) { }

  public createElement(path : string, element : any[]){
    return this.dbFire.object(path).set(element)
  }

  public changeElement(path : string, element : any[]){
    return this.dbFire.object(path).update(element)
  }

  public eraseElement(path : string){
    this.dbFire.object(path).remove();
  }

  public getElements(path : string){
    return this.dbFire.list(path).valueChanges();
  }

  public existElements(path : string){
    return this.dbFire.list(path).snapshotChanges();
  }

  public storeFile(path : string, element : any){
    return this.fileFire.upload(path,element);
  }

  public eraseFile(path : string){
    this.fileFire.ref(path).delete();
  }

  public getFile(path : string){
    return this.fileFire.ref(path).getDownloadURL();
  }
}
