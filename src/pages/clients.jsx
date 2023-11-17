import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import HeaderClients from '../components/HeaderClients'
import { Table } from '@mui/material'

import ClientTable from '../components/Table/ClientTable'

const Clients = () => {
  
  return (
    <div className='container-client-table'>
        <NavBar/>
        <div>
        <Header />
        <HeaderClients/>
        <ClientTable/>
        </div>
    </div>

)

}

export default Clients