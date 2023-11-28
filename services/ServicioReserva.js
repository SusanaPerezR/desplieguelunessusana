import {modeloReserva} from '../models/modeloReserva.js'
export class ServicioReserva{
  constructor(){}
  async registrarReserva(datos){
    let reservaNueva= new modeloReserva(datos)
    return await reservaNueva.save()
  }

  async buscarReserva(){
    let reservas= await modeloReserva.find()
    return reservas
  }
  async buscarReservaId(id){
    let reserva= await modeloReserva.findById(id)
    return reserva
  }

  async modificarReserva(id,datos){
    return await modeloReserva.findByIdAndUpdate(id,datos)
  
  }
  async eliminarReserva(id){}
 
}
