import {modeloHabitacion} from '../models/modeloHabitacion.js'

export class ServicioHabitacion{
  constructor(){}
  async registrarHabitacion(datos){
    let habitacionNueva= new modeloHabitacion(datos)
    return await habitacionNueva.save()
  }

  async buscarHabitaciones(){
    let habitaciones= await modeloHabitacion.find()
    return habitaciones
  }
  async buscarHabitacionId(id){
    let habitacion= await modeloHabitacion.findById(id)
    return habitacion
  }

  async modificarHabitacion(id,datos){
    return await modeloHabitacion.findByIdAndUpdate(id,datos)
  
  }
  async eliminarHabitacion(id){}
 
}

//Qué son métodos idepotentes