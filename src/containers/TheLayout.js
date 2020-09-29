import React from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'


const TheLayout = () => {

  return (
    <div className="c-app c-default-layout">
      <TheSidebar style={{backgroundColor:'rgb(35, 35, 43)'}}/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <TheContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout
