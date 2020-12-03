export class Usuario {
  public correo : string;
  public perfil : string;
  public id : number;

  public constructor(correo,perfil,id=0){
      this.correo = correo;
      this.perfil = perfil;
      this.id = id;
  }
  public SetId(id){
      this.id = id;
  }
}
