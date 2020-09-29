import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter style={{backgroundColor:'#fff'}}>
      <div>
        <a href="http://datacakra.com" target="_blank" rel="noopener noreferrer">Datacakra</a>
        <span className="ml-1">&copy; 2020 Provisense Assets</span>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
