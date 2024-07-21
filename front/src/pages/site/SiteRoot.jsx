import React from 'react'
import Header from '../../layout/header/Header'
import { Outlet } from 'react-router';
const SiteRoot = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default SiteRoot