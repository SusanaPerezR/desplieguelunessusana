import express from 'express'
import { ControladorHabitacion } from '../controllers/ControladorHabitacion.js'
import { ControladorReservas } from '../controllers/ControladorReservas.js'

//Para poder llamar al controlador debo crear el objeto de la clase controladorHabitacion
let controladorHabitacion = new ControladorHabitacion();
let controladorReservas= new ControladorReservas();

export let rutas=express.Router()
//Habitaciones
rutas.post('/api/habitaciones',controladorHabitacion.registrarHabitacion)
rutas.get('/api/habitacion/:id',controladorHabitacion.buscarHabitacionId )
rutas.get('/api/habitaciones',controladorHabitacion.buscarHabitaciones)
rutas.put('/api/habitaciones/:id',controladorHabitacion.modificarHabitacion)
rutas.delete('/api/habitaciones/:id',controladorHabitacion.eliminarHabitacion)
//Reservas  
rutas.post('/api/reservas',controladorReservas.registrarReservas)
rutas.get('/api/reserva/:id',controladorReservas.buscarReservasId )
rutas.get('/api/reservas',controladorReservas.buscaReservas)
rutas.put('/api/reservas/:id',controladorReservas.modificarReservas)
rutas.delete('/api/reservas/:id',controladorReservas.eliminarReservas)