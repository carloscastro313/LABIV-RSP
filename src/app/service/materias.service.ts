import { element } from 'protractor';
import { DbFirebaseService } from './db-firebase.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { relative } from 'path';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  private usuario : any[];
  private autos : any[];
  private interesados : any[];

  constructor(private dbFire: AngularFireDatabase, private DbFirebaseService : DbFirebaseService) {
    this.dbFire.list('/Usuarios/').valueChanges().subscribe((aux : any)=>{
      this.usuario = aux;
    })
    this.dbFire.list('/autos/').valueChanges().subscribe((aux : any)=>{
      this.autos = aux;
    })
    this.dbFire.list('/interesados/').valueChanges().subscribe((aux : any)=>{
      this.interesados = aux;
    })
  }

  public getListUsuario(){
    return this.usuario;
  }

  public getListAutos(){
    return this.autos;
  }

  public getListInteresados(){
    return this.interesados;
  }

  public existElement(path : string){
    return this.DbFirebaseService.existElements(path);
  }

  public addElemento(path : string, element : any){
    return this.DbFirebaseService.createElement(path, element);
  }

  public modElement(path : string, element : any){
    return this.DbFirebaseService.changeElement(path, element);
  }

  public eraseElement(path : string){
    return this.DbFirebaseService.eraseElement(path);
  }

  public addFile(path : string, element :any){
    return this.DbFirebaseService.storeFile(path,element);
  }

  public deleteFile(path : string){
    this.DbFirebaseService.eraseFile(path);
  }

  public getFile(path : string){
    return this.DbFirebaseService.getFile(path)
  }
}

