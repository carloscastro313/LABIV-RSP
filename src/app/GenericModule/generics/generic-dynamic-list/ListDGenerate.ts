export class ListDGenerate{

  type :  any[]
  indice : number[]
  btn : string[]
  actionExist : boolean

  constructor(){

  }

  changeList(actionExist : boolean, type : any[], btn? : string[], indice? : number[]){
    if(type != null){
      this.actionExist = actionExist
      this.type = type
      this.btn = btn
      this.indice = indice

      return true;
    }

    return false;
  }

  toArrayKey(array: object){
    return Object.keys(array).map(key=> key)
  }
  toArray(array: object){
    return Object.keys(array).map(key=> array[key])
  }
  getElementFromArray(array: object, indice: number){
    let aux = this.toArray(array)

    if(indice >= aux.length){
      console.log("Se a añadido un indice mayor al soportado")
      return null
    }

    return aux[indice];
  }

  isComplete(){
    if(this.actionExist){
      if(this.btn != null && this.indice != null){
        if(this.btn.length == this.indice.length){
          return true;
        }else{
          console.log("Te tiene que dar la misma cantidad de indices y btn");
        }
      }else{
        console.log("No se puede generar acciones de btn o indices null");
      }
    }else{
      return true;
    }
    return false;
  }
}
