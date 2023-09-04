import React from 'react';
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from '../store/store'
import Header from './Header';
const RootLayout = () => {
  return (
    <>
      <Provider store={store}> 
        <Header/>
        <main>
          <Outlet/>
        </main>
      </Provider>
    </>
  )
}

export default RootLayout