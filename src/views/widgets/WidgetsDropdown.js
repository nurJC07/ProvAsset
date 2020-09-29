import React from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple';
import ItemList from '../../Database/itemList';

const WidgetsDropdown = ({dataInBound,dataOutBound, dataTotal}) => {
  // console.log(props.data)
  // console.log(props.data.length)
  // render
  return (
    <CRow>
      <CCol sm="6" lg="4">
        <CWidgetDropdown
          color="gradient-primary"
          header="Total items Inbound today"
          text={dataInBound.length}
          style={{fontSize:"50px"}}
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="4">
      <CWidgetDropdown
          color="gradient-warning"
          header="Total items Outbound today"
          text={dataOutBound.length}
          style={{fontSize:"50px"}}
        >
      </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="4">
      <CWidgetDropdown
          color="gradient-danger"
          header="Total Stock items today"
          fontHeader ="50px"
          style={{fontSize:"50px"}}
          text={dataTotal.length}
          // footerSlot={
          //   []
          // }
        >
         
        </CWidgetDropdown>
      </CCol>

     
    </CRow>
  )
}

export default WidgetsDropdown
