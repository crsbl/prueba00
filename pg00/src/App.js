
import React, {useState} from 'react';
import './App.css';
import {Db} from './firebase/firebaseConfig';

import {useEffect} from 'react';
import {collection, getDocs, firestore} from 'firebase/firestore';
import { doc, setDoc, query } from "firebase/firestore";
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";

function App() {

const [array_empresas, setarray_empresas] = useState([])


const soldtd_bd= async()=>{

  const dts = await getDocs(collection(Db, 'prueba'));
  const datos_empre = dts.docs[0].data()

 
  datos_empre[Symbol.iterator] = function () {
    let values = Object.values(this);
    let index = 0;
    let length = values.length;
    return {
      next: () => {
        return index < length
          ? { done: false, value: values[index++] }
          : { done: true, value: undefined };
      },
    };
  }; 



setarray_empresas([...datos_empre])



}





const arrayjson = [
  {
    "nameAgency": "Ruhiscos Aventuras Spa",
    "day": "2020-12-22",
    "name": "Cristóbal",
    "paymentStatus": "Pago realizado",
    "finalPrice": 1500,
    "datePayment": "2020-12-14 00:57",
    "createdAt": "2020-12-14 00:57",
    "persons": 1,
    "hour": "06:30PM",
    "timeZone": "America/Santiago"
  },
  {
    "nameAgency": "Fuego Nativo",
    "hour": "11:00AM",
    "day": "2020-11-07",
    "finalPrice": 42000,
    "paymentStatus": "Pago realizado",
    "timeZone": "America/Santiago",
    "datePayment": "2020-11-04 14:56",
    "persons": 1,
    "createdAt": "2020-11-04 14:56",
    "name": "Mavi"
  },
  {
    "nameAgency": "Fuego Nativo",
    "timeZone": "America/Santiago",
    "persons": 1,
    "datePayment": "2020-11-27 20:03",
    "day": "2020-11-28",
    "name": "Luis",
    "finalPrice": 42000,
    "paymentStatus": "Pago realizado",
    "hour": "11:00AM",
    "createdAt": "2020-11-27 20:03"
  },
  {
    "nameAgency": "Fuego Nativo",
    "datePayment": "2020-11-21 15:50",
    "hour": "11:00AM",
    "persons": 1,
    "paymentStatus": "Pago realizado",
    "name": "Dulce",
    "day": "2020-11-22",
    "createdAt": "2020-11-21 15:50",
    "timeZone": "America/Santiago",
    "finalPrice": 42000
  },
  {
    "nameAgency": "Fuego Nativo",
    "paymentStatus": "Pago realizado",
    "persons": 1,
    "timeZone": "America/Santiago",
    "finalPrice": 42000,
    "hour": "11:00AM",
    "createdAt": "2020-11-23 20:46",
    "datePayment": "2020-11-23 20:46",
    "day": "2020-11-28",
    "name": "Josefina"
  },
  {
    "nameAgency": "Fuego Nativo",
    "finalPrice": 42000,
    "name": "Tina",
    "totalPrice": 0,
    "timeZone": "America/Santiago",
    "createdAt": "2020-10-09 13:43",
    "datePayment": "2020-10-09 13:43",
    "wayToPay": "Directa",
    "day": "2020-10-11",
    "persons": 1,
    "hour": "11:00AM",
    "paymentType": "Transferencia",
    "paymentStatus": "Pago realizado"
  },
  {
    "nameAgency": "Fuego Nativo",
    "persons": 1,
    "day": "2020-10-24",
    "name": "CAROLINA",
    "hour": "11:00AM",
    "timeZone": "America/Santiago",
    "finalPrice": 42000,
    "createdAt": "2020-10-21 14:29",
    "paymentStatus": "Pago realizado",
    "datePayment": "2020-10-21 14:29"
  },
  {
    "nameAgency": "Fuego Nativo",
    "persons": 1,
    "hour": "11:00AM",
    "paymentStatus": "Pago realizado",
    "day": "2020-10-31",
    "timeZone": "America/Santiago",
    "name": "Veronica ",
    "finalPrice": 42000,
    "datePayment": "2020-10-29 10:34",
    "createdAt": "2020-10-29 10:34"
  },
  {
    "nameAgency": "Fuego Nativo",
    "day": "2020-10-02",
    "name": "Ricardo",
    "persons": 1,
    "finalPrice": 42000,
    "hour": "11:00AM",
    "paymentStatus": "Pago realizado",
    "createdAt": "2020-09-29 11:47",
    "datePayment": "2020-09-29 11:47",
    "timeZone": "America/Santiago"
  },
  {
    "nameAgency": "Fuego Nativo",
    "hour": "11:00AM",
    "finalPrice": 42000,
    "name": "Ricardo",
    "paymentStatus": "Pago realizado",
    "day": "2020-09-18",
    "persons": 1,
    "timeZone": "America/Santiago",
    "createdAt": "2020-09-12 16:52",
    "datePayment": "2020-09-12 16:52"
  },
  {
    "nameAgency": "Fuego Nativo",
    "createdAt": "2020-11-28 14:39",
    "day": "2020-11-29",
    "datePayment": "2020-11-28 14:39",
    "name": "Andres",
    "finalPrice": 42000,
    "persons": 1,
    "hour": "11:00AM",
    "timeZone": "America/Santiago",
    "paymentStatus": "Pago realizado"
  },
  {
    "nameAgency": "Fuego Nativo",
    "paymentStatus": "Pago realizado",
    "name": "Jesus",
    "totalPrice": 0,
    "hour": "11:00AM",
    "day": "2020-10-11",
    "persons": 1,
    "timeZone": "America/Santiago",
    "wayToPay": "",
    "finalPrice": 42000,
    "paymentType": "Efectivo",
    "datePayment": "2020-10-10 19:34",
    "createdAt": "2020-10-10 19:34"
  },
  {
    "nameAgency": "Fuego Nativo",
    "paymentStatus": "Pago realizado",
    "datePayment": "2020-10-29 15:08",
    "name": "Rolando ",
    "persons": 1,
    "timeZone": "America/Santiago",
    "hour": "11:00AM",
    "createdAt": "2020-10-29 15:08",
    "day": "2020-11-01",
    "finalPrice": 42000
  },
  {
    "nameAgency": "Fuego Nativo",
    "persons": 1,
    "timeZone": "America/Santiago",
    "totalPrice": 0,
    "hour": "11:00AM",
    "datePayment": "2020-11-06 18:43",
    "createdAt": "2020-11-06 18:43",
    "paymentType": "Transferencia",
    "finalPrice": 42000,
    "name": "Carolina ",
    "wayToPay": "Banco Estado",
    "paymentStatus": "Pago realizado",
    "day": "2020-11-08"
  },
  {
    "nameAgency": "Fuego Nativo",
    "timeZone": "America/Santiago",
    "datePayment": "2020-09-23 19:19",
    "createdAt": "2020-09-23 19:19",
    "paymentStatus": "Pago realizado",
    "name": "camila",
    "hour": "11:00AM",
    "day": "2020-10-02",
    "finalPrice": 42000,
    "persons": 1
  },
  {
    "nameAgency": "Fuego Nativo",
    "day": "2020-11-29",
    "createdAt": "2020-11-27 17:50",
    "hour": "11:00AM",
    "datePayment": "2020-11-27 17:50",
    "paymentStatus": "Pago realizado",
    "timeZone": "America/Santiago",
    "name": "Ingrid ",
    "finalPrice": 42000,
    "persons": 1
  },
  {
    "nameAgency": "Fuego Nativo",
    "datePayment": "2020-11-07 16:23",
    "paymentType": "Transferencia",
    "timeZone": "America/Santiago",
    "hour": "11:00AM",
    "paymentStatus": "Pago realizado",
    "persons": 1,
    "finalPrice": 42000,
    "day": "2020-11-08",
    "totalPrice": 0,
    "createdAt": "2020-11-07 16:23",
    "name": "Rosa Maria",
    "wayToPay": "Banco"
  },
  {
    "nameAgency": "Fuego Nativo",
    "hour": "11:00AM",
    "finalPrice": 42000,
    "timeZone": "America/Santiago",
    "paymentStatus": "Pago realizado",
    "persons": 1,
    "createdAt": "2020-11-10 19:10",
    "name": "Katherine",
    "datePayment": "2020-11-10 19:10",
    "day": "2020-11-14"
  },
  {
    "nameAgency": "Fuego Nativo",
    "paymentStatus": "Pago realizado",
    "day": "2020-10-18",
    "name": "Leyla",
    "hour": "11:00AM",
    "datePayment": "2020-10-17 11:31",
    "timeZone": "America/Santiago",
    "finalPrice": 42000,
    "createdAt": "2020-10-17 11:31",
    "persons": 1
  },
  {
    "nameAgency": "Fuego Nativo",
    "persons": 1,
    "hour": "11:00AM",
    "paymentType": "Transferencia",
    "totalPrice": 0,
    "createdAt": "2020-11-12 22:40",
    "timeZone": "America/Santiago",
    "paymentStatus": "Pago realizado",
    "finalPrice": 78000,
    "day": "2020-11-14",
    "name": "Karla ",
    "wayToPay": "",
    "datePayment": "2020-11-12 22:40"
  },
  {
    "nameAgency": "Fuego Nativo",
    "day": "2020-10-14",
    "timeZone": "America/Santiago",
    "hour": "11:00AM",
    "name": "Marcelo",
    "paymentStatus": "Pago realizado",
    "createdAt": "2020-10-12 13:46",
    "datePayment": "2020-10-12 13:46",
    "finalPrice": 26000,
    "persons": 1
  },
  {
    "nameAgency": "Fuego Nativo",
    "hour": "11:00AM",
    "createdAt": "2020-11-06 10:29",
    "day": "2020-11-08",
    "paymentStatus": "Pago realizado",
    "timeZone": "America/Santiago",
    "finalPrice": 26000,
    "datePayment": "2020-11-06 10:29",
    "persons": 1,
    "name": "Maria"
  },
  {
    "nameAgency": "Fuego Nativo",
    "datePayment": "2020-11-07 15:17",
    "paymentStatus": "Pago realizado",
    "persons": 1,
    "name": "Daniela",
    "finalPrice": 26000,
    "wayToPay": "Banco Estado",
    "totalPrice": 0,
    "timeZone": "America/Santiago",
    "day": "2020-11-08",
    "createdAt": "2020-11-07 15:17",
    "hour": "11:00AM",
    "paymentType": "Transferencia"
  },
  {
    "nameAgency": "Fuego Nativo",
    "paymentStatus": "Pago realizado",
    "day": "2020-12-08",
    "datePayment": "2020-12-07 16:52",
    "persons": 1,
    "name": "Norma",
    "createdAt": "2020-12-07 16:52",
    "timeZone": "America/Santiago",
    "hour": "11:00AM",
    "finalPrice": 26000
  },
  {
    "nameAgency": "Fuego Nativo",
    "finalPrice": 26000,
    "datePayment": "2020-10-11 11:20",
    "paymentStatus": "Pago realizado",
    "name": "Jimmy",
    "persons": 1,
    "wayToPay": "",
    "createdAt": "2020-10-11 11:20",
    "day": "2020-10-11",
    "totalPrice": 0,
    "hour": "11:00AM",
    "paymentType": "Transferencia",
    "timeZone": "America/Santiago",
    "status": "Reserva pagada"
  },
  {
    "nameAgency": "Fuego Nativo",
    "hour": "11:00AM",
    "finalPrice": 26000,
    "datePayment": "2020-11-27 10:48",
    "day": "2020-11-28",
    "timeZone": "America/Santiago",
    "createdAt": "2020-11-27 10:48",
    "name": "Dionel ",
    "persons": 1,
    "paymentStatus": "Pago realizado"
  },
  {
    "nameAgency": "Fuego Nativo",
    "persons": 1,
    "finalPrice": 26000,
    "timeZone": "America/Santiago",
    "name": "Bernardo ",
    "hour": "11:00AM",
    "createdAt": "2020-09-16 12:44",
    "paymentStatus": "Pago realizado",
    "datePayment": "2020-09-16 12:44",
    "day": "2020-09-17"
  },
  {
    "nameAgency": "Fuego Nativo",
    "name": "Frenscisca",
    "createdAt": "2020-10-11 11:03",
    "totalPrice": 0,
    "day": "2020-10-11",
    "paymentStatus": "Pago realizado",
    "hour": "11:00AM",
    "timeZone": "America/Santiago",
    "paymentType": "Transferencia",
    "wayToPay": "",
    "datePayment": "2020-10-11 11:03",
    "finalPrice": 26000,
    "persons": 1
  },
  {
    "nameAgency": "Fuego Nativo",
    "createdAt": "2020-11-28 21:00",
    "paymentStatus": "Pago realizado",
    "finalPrice": 26000,
    "persons": 1,
    "timeZone": "America/Santiago",
    "hour": "11:00AM",
    "day": "2020-11-29",
    "name": "Sebastian",
    "datePayment": "2020-11-28 21:00"
  },
  {
    "nameAgency": "Fuego Nativo",
    "day": "2020-12-12",
    "hour": "11:00AM",
    "persons": 1,
    "timeZone": "America/Santiago",
    "finalPrice": 26000,
    "name": "Rodrigo",
    "createdAt": "2020-11-24 10:54",
    "paymentStatus": "Pago realizado",
    "datePayment": "2020-11-24 10:54"
  },
  {
    "nameAgency": "Fuego Nativo",
    "createdAt": "2020-11-06 13:22",
    "persons": 1,
    "paymentStatus": "Pago realizado",
    "hour": "11:00AM",
    "day": "2020-11-07",
    "timeZone": "America/Santiago",
    "name": "Ivannia",
    "datePayment": "2020-11-06 13:22",
    "finalPrice": 26000
  },
  {
    "nameAgency": "Fuego Nativo",
    "hour": "11:00AM",
    "timeZone": "America/Santiago",
    "finalPrice": 26000,
    "paymentStatus": "Pago realizado",
    "createdAt": "2020-12-04 19:08",
    "day": "2020-12-05",
    "persons": 1,
    "datePayment": "2020-12-04 19:08",
    "name": "ricardo"
  },
  {
    "nameAgency": "Fuego Nativo",
    "finalPrice": 26000,
    "createdAt": "2020-09-11 18:12",
    "name": "Gabriel",
    "timeZone": "America/Santiago",
    "hour": "11:00AM",
    "persons": 1,
    "day": "2020-09-12",
    "datePayment": "2020-09-11 18:12",
    "paymentStatus": "Pago realizado",
    "status": "Reserva pagada"
  },
  {
    "nameAgency": "Fuego Nativo",
    "datePayment": "2020-12-09 16:49",
    "finalPrice": 7000,
    "timeZone": "America/Santiago",
    "paymentStatus": "Pago realizado",
    "createdAt": "2020-12-09 16:49",
    "name": "Ignacia ",
    "day": "2020-12-24",
    "hour": "11:00AM",
    "persons": 2
  },
  {
    "nameAgency": "test",
    "createdAt": "2020-12-30 00:02",
    "name": "ignacio",
    "paymentStatus": "Pago realizado",
    "finalPrice": 27000,
    "datePayment": "2020-12-30 00:02",
    "dayTo": "2021-01-10",
    "persons": 2,
    "hour": "03:00PM",
    "timeZone": "America/Santiago",
    "dayFrom": "2021-01-01"
  },
  {
    "nameAgency": "test",
    "datePayment": "2020-12-29 23:56",
    "hour": "03:00PM",
    "paymentStatus": "Pago realizado",
    "dayTo": "2021-01-10",
    "dayFrom": "2021-01-01",
    "name": "ignacio",
    "persons": 2,
    "createdAt": "2020-12-29 23:56",
    "timeZone": "America/Santiago",
    "finalPrice": 27000
  },
  {
    "nameAgency": "test",
    "name": "asdsadsa",
    "datePayment": "2020-12-13 09:54",
    "persons": 1,
    "day": "2020-12-15",
    "finalPrice": 14000,
    "hour": "00:30AM",
    "paymentStatus": "Pago realizado",
    "createdAt": "2020-12-13 09:54",
    "timeZone": "America/Santiago"
  },
  {
    "nameAgency": "Por fortuna",
    "paymentStatus": "Pago realizado",
    "timeZone": "America/Santiago",
    "totalPrice": 0,
    "finalPrice": 2500,
    "day": "2020-11-13",
    "name": "Cristóbal",
    "wayToPay": "Página web",
    "persons": 5,
    "paymentType": "Transferencia",
    "datePayment": "2020-11-15 16:30",
    "createdAt": "2020-11-15 16:30",
    "hour": "10:00AM"
  },
  {
    "nameAgency": "Por fortuna",
    "name": "Cristobal",
    "createdAt": "2020-08-14 13:08",
    "day": "2020-08-27",
    "hour": "10:00AM",
    "paymentStatus": "Pago realizado",
    "finalPrice": 500,
    "datePayment": "2020-08-14 13:08",
    "persons": 1,
    "timeZone": "America/Santiago"
  },
  {
    "nameAgency": "Por fortuna",
    "datePayment": "2020-11-15 16:34",
    "paymentStatus": "Pago realizado",
    "name": "Cristobal",
    "paymentType": "Transferencia",
    "createdAt": "2020-11-15 16:34",
    "day": "2020-11-28",
    "finalPrice": 2500,
    "totalPrice": 0,
    "hour": "10:00AM",
    "timeZone": "America/Santiago",
    "persons": 5
  },
  {
    "nameAgency": "Por fortuna",
    "persons": 2,
    "timeZone": "America/Santiago",
    "createdAt": "2020-12-05 11:50",
    "finalPrice": 1000,
    "hour": "10:00AM",
    "datePayment": "2020-12-05 11:50",
    "day": "2020-12-11",
    "paymentStatus": "Pago realizado",
    "name": "Pamela"
  },
  {
    "nameAgency": "Agencia 1",
    "paymentStatus": "Pago realizado",
    "day": "2020-11-30",
    "finalPrice": 2000,
    "hour": "00:30AM",
    "createdAt": "2020-11-29 16:45",
    "datePayment": "2020-11-29 16:45",
    "persons": 2,
    "timeZone": "America/Santiago",
    "name": "Ignacio"
  },
  {
    "nameAgency": "Agencia 1",
    "paymentType": "Efectivo",
    "totalPrice": 0,
    "persons": 2,
    "paymentStatus": "Pago realizado",
    "timeZone": "America/Santiago",
    "hour": "00:30AM",
    "finalPrice": 1000,
    "createdAt": "2020-11-17 23:13",
    "name": "asdas",
    "datePayment": "2020-11-17 23:13",
    "wayToPay": "Airbnb",
    "day": "2020-11-28"
  },
  {
    "nameAgency": "Agencia 1",
    "day": "2020-12-10",
    "name": "Tomas",
    "totalPrice": 0,
    "paymentStatus": "Pago realizado",
    "timeZone": "America/Santiago",
    "hour": "04:30AM",
    "paymentType": "Efectivo",
    "wayToPay": "Tripadvisor",
    "datePayment": "2020-11-25 00:17",
    "createdAt": "2020-11-25 00:17",
    "finalPrice": 1000,
    "persons": 2
  },
  {
    "nameAgency": "Agencia 1",
    "paymentStatus": "Pago realizado",
    "day": "2020-12-09",
    "name": "Antonio",
    "hour": "00:00AM",
    "totalPrice": 0,
    "timeZone": "America/Santiago",
    "finalPrice": 1000,
    "createdAt": "2020-11-29 16:16",
    "persons": 2,
    "datePayment": "2020-11-29 16:16"
  },
  {
    "nameAgency": "Agencia 1",
    "day": "2020-12-01",
    "name": "tomas",
    "hour": "00:00AM",
    "finalPrice": 1000,
    "createdAt": "2020-12-01 00:02",
    "totalPrice": 0,
    "wayToPay": "Airbnb",
    "persons": 2,
    "datePayment": "2020-12-01 00:02",
    "timeZone": "America/Santiago",
    "paymentStatus": "Pago realizado"
  },
  {
    "nameAgency": "Agencia 1",
    "createdAt": "2020-12-01 00:04",
    "hour": "00:00AM",
    "paymentStatus": "Pago realizado",
    "day": "2020-12-02",
    "timeZone": "America/Santiago",
    "persons": 2,
    "datePayment": "2020-12-01 00:04",
    "name": "Ignacio",
    "finalPrice": 1000
  },
  {
    "nameAgency": "Agencia 1",
    "timeZone": "America/Santiago",
    "day": "2020-12-02",
    "createdAt": "2020-12-01 00:07",
    "persons": 2,
    "paymentStatus": "Pago realizado",
    "name": "Ignacio",
    "hour": "00:30AM",
    "datePayment": "2020-12-01 00:07",
    "finalPrice": 1000
  },
  {
    "nameAgency": "Agencia 1",
    "finalPrice": 1000,
    "paymentStatus": "Pago realizado",
    "name": "Ignacio",
    "day": "2020-12-03",
    "datePayment": "2020-12-01 00:08",
    "persons": 2,
    "timeZone": "America/Santiago",
    "hour": "00:00AM",
    "createdAt": "2020-12-01 00:08"
  },
  {
    "nameAgency": "Agencia 1",
    "createdAt": "2020-11-30 21:24",
    "hour": "03:00PM",
    "timeZone": "America/Santiago",
    "datePayment": "2020-11-30 21:24",
    "finalPrice": 500,
    "name": "adsasd",
    "totalPrice": 0,
    "paymentStatus": "Pago realizado",
    "day": "2020-12-22",
    "persons": 1
  },
  {
    "nameAgency": "Agencia 1",
    "datePayment": "2020-11-30 21:26",
    "createdAt": "2020-11-30 21:26",
    "timeZone": "America/Santiago",
    "totalPrice": 0,
    "day": "2020-11-25",
    "wayToPay": "Airbnb",
    "finalPrice": 500,
    "name": "adsasd",
    "persons": 1,
    "paymentStatus": "Pago realizado",
    "hour": "03:00PM"
  }
]

const pedido = async()=>{
  await setDoc(doc(Db, "prueba", "ventas"), 
 
  {
    ...arrayjson
  }
  );

}

const Datos_empresas = (props)=>{

const {dtsempresa} = useParams()


const datos_empre = props.datos

const empre_filtrada = datos_empre.filter(dts=>dts.nameAgency == dtsempresa)


  return<div className='d_datos_empresa00'>

     <div className='d_datos_empresa01'>
        <Link to={"/empresa"}><h2 className='h2_datos_empresa00'>Empresa</h2></Link>
        <h2 className='h2_datos_empresa00'>></h2>
        <h2 className='h2_datos_empresa00'>{dtsempresa}</h2>
        </div>

<div className='d_datos_empresa02'>
<h1 className='h1_empresas_datos00'>Nombre Cliente</h1>
<h1 className='h1_empresas_datos01'>Personas</h1>
<h1 className='h1_empresas_datos01'>Dia</h1>
<h1 className='h1_empresas_datos01'>Hora</h1>
<h1 className='h1_empresas_datos01'>Valor venta</h1>
</div>


{empre_filtrada.map(empre_fil =>{

return<div className='d_grid_empresas01'>
<h2 className='h2_empresas_datos02'>{empre_fil.nameAgency}</h2>
<h2 className='h2_empresas_datos03'>{empre_fil.persons}</h2>
<h2 className='h2_empresas_datos03'>{empre_fil.day}</h2>
<h2 className='h2_empresas_datos03'>{empre_fil.hour}</h2>
<h2 className='h2_empresas_datos03'>{empre_fil.finalPrice}</h2>

</div>
})}

  
  </div>
}

const Empresas = (props)=>{



 const  [mes_ventas, setmes_ventas] = useState([])
 const [lista_empre, setlista_empre] = useState([])
 const [empre_top_saldo, setempre_top_saldo] = useState([])

  const total_empresa_datos = ()=>{

    const datos_array00 = [...arrayjson]



    let empresas_nombre = []
    let totales_empresa = []
    
    datos_array00.map(array  => { 
    if(empresas_nombre.filter(empre => empre == array.nameAgency) == false )
    {
      empresas_nombre = [...empresas_nombre, array.nameAgency]
    }
    })
    for (let i = 0; i < empresas_nombre.length; i++) {
    
      let sma = 0;
     
      for (let e = 0; e < datos_array00.length; e++) {
       
        if(empresas_nombre[i] == datos_array00[e].nameAgency)
        {sma +=datos_array00[e].finalPrice}
      }
      totales_empresa.push([[empresas_nombre[i]],[sma]])
      
    }

    totales_empresa.sort((a, b)=>{
    
      if(parseInt(b[1])< parseInt(a[1])){
    return -1;
    }
    if (parseInt(b[1]) > parseInt(a[1])){
    return 1 ;
    }
    return 0
    })
   
    setempre_top_saldo([totales_empresa[0][0],totales_empresa[0][1]])

    setlista_empre(totales_empresa.sort())
    }



    const total_meses_datos = ()=>{

      const datos_array01 = [...arrayjson]

      let empresas_meses = []
      let totales_meses = []
   
      array_empresas.forEach(array=>{
        let mes00 = new Date(array.datePayment)

switch(mes00.getMonth()){
  case 0 :
    mes00 = "Enero"
  break 
  case 1 :
    mes00 = "Febrero"
  break 
  case 2 :
    mes00 = "Marzo"
  break 
  case 3 :
    mes00 = "Abril"
  break 
  case 4 :
    mes00 = "Mayo"
  break 
  case 5 :
    mes00 = "Junio"
  break 
  case 6 :
    mes00 = "Julio"
  break 
  case 7 :
    mes00 = "Agosto"
  break 
  case 8 :
    mes00 = "Septiembre"
  break 
  case 9 :
    mes00 = "Octubre"
  break 
  case 10 :
    mes00 = "Noviembre"
  break 
  case 11 :
    mes00 = "Diciembre"
  break 
}

        array.datePayment=   mes00

      })


      datos_array01.map(array  => { 
        if(empresas_meses.filter(empre => empre == array.datePayment) == false )
        {
          empresas_meses = [...empresas_meses, array.datePayment]
        }
        })
        
        
        for (let i = 0; i < empresas_meses.length; i++) {
        
          let sma = 0;
         
          for (let e = 0; e < datos_array01.length; e++) {
           
            if(empresas_meses[i] == datos_array01[e].datePayment)
            {sma +=datos_array01[e].finalPrice}
          }
          totales_meses.push([[empresas_meses[i]],[sma]])
          
        }
        
        
        totales_meses.sort((a, b)=>{
        
          if(parseInt(b[1])< parseInt(a[1])){
        return -1;
        }
        if (parseInt(b[1]) > parseInt(a[1])){
        return 1 ;
        }
        return 0
        })

        setmes_ventas(totales_meses[0][0])
        

      
      }
  

   



useEffect(() => {
  total_empresa_datos()
 
  total_meses_datos()

},[])


  return <div>

  
  <div className='d_info00'>
  
  <div className='d_info_principal00'>
    <h1 className='h1_empresas01'>{empre_top_saldo[0]}</h1>
    <h1 className='h1_empresas01'>{empre_top_saldo[1]}</h1>
    </div>

  
    <div className='d_info_principal00'>
    <h1 className='h1_empresas01'>Mes mas ventas</h1>
    <h1 className='h1_empresas01'>{mes_ventas}</h1>
    </div>

    </div>


<div className='d_grid_empresas02'>

  <div className='d_grid_empresas00'> 
  <h1 className='h1_empresas00'>Nombre empresa</h1>
  <h1 className='h1_empresas00'>Total de ventas</h1>
  <h1 className='h1_empresas00'>Comision</h1>
  <h1 className='h1_empresas00'>Detalle</h1>
  </div>   
  
  {lista_empre.map((empresas_datos)=>{

return <div className='d_grid_empresas01'>
<h2 className='h2_empresas02'>{empresas_datos[0]}</h2>
<h2 className='h2_empresas02'>{empresas_datos[1]}</h2>
<h2 className='h2_empresas02'>{empresas_datos[1] * 0.025}</h2>

<Link 
to={`/empresa/${empresas_datos[0]}`}
>
<h2 className='h2_empresas02'>Ver detalles</h2>
</Link>


</div>

})}
  </div>
    </div>
}

const Inicio = ()=>{
  return<div className='d_inicio00'>
    <Link to={"/empresa"}>
     <h1 className='h1_inicio'>Entrar</h1>
     </Link>
</div>
}

useEffect(() => {
 
  soldtd_bd()


  },[])




  return (
<React.Fragment>


<header>
    Cristobal Ortega
  </header>

<Router>




<Switch>
          <Route path="/empresa/:dtsempresa">
            <Datos_empresas datos={arrayjson} />
          </Route>

          <Route path="/empresa">
            <Empresas />
          </Route>

          <Route path="/" exact>
            <Inicio />
          </Route>

        </Switch>



    </Router>
    </React.Fragment>
  );
}

export default App;
