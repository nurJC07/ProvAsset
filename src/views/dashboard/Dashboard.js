import React, { lazy, useState, useEffect } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CForm,
  CFormGroup,
  CFormText,
  CCallout
} from '@coreui/react';
import { Card, CardBody, Col, Row, CardHeader, Jumbotron } from 'reactstrap';
import CIcon from '@coreui/icons-react';
import ItemList from '../../Database/itemList';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import { freeSet } from '@coreui/icons'
import Select from 'react-select'


const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))

const options = [
  { value: 'Gudang A', label: 'Gudang A' },
  { value: 'Gudang B', label: 'Gudang B' },
  { value: 'Gudang C', label: 'Gudang C' }
]

const Dashboard = () => {

  // set value for default selection
  const [selectedValue, setSelectedValue] = useState("Gudang A");
  const [inBound, setInBound] = useState();
  const [outBound, setOutBound] = useState();
  const [total, setTotalBound] = useState()
 

  useEffect(() => {
    var inBoundList = ItemList.filter(item => item.area === selectedValue && item.status === 'INBOUND')
    var outBoundList = ItemList.filter(item => item.area === selectedValue && item.status === 'OUTBOUND')
    var TotalList = ItemList.filter(item => item.area === selectedValue)
    setInBound(inBoundList)
    setOutBound(outBoundList)
    setTotalBound(TotalList)
    // setSelectedValue(selectedValue)
  }, 
  [selectedValue] )
  
 
  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedValue(e.value);
  }
  const itemList = ()=>{
    const 	statusFormatter = (cell, row) => {
      if(row.status === "INBOUND") {
          return (
            <div style={{color:"green"}}><CIcon content={freeSet.cilArrowBottom} /> {row.status}<span></span></div>
          )
      } else if (row.status === "OUTBOUND") {
          return (
            <div style={{color:"red"}}><CIcon content={freeSet.cilArrowTop}  /> {row.status}<span></span></div>
          )
      }
  }
    var options = {
      sizePerPageList: [
        {text: 'lihat 5', value: 5},
        {text: 'lihat 10', value: 10},
        {text: 'lihat 15', value: 15}
      ],
      sizePerPage: 10,
      sortName: 'id',
      // borderless : true,
      noDataText: 'No data(s) found. Please try again by using another keyword.'
    }
  
    return(
      <BootstrapTable data={total} 
      striped hover pagination search edit options={options} 
      exportCSV version='4' 
      searchPlaceholder={"Pencarian...."}   >
        <TableHeaderColumn 
           thStyle={ { whiteSpace: 'normal', width: '10%'} } 
           tdStyle={ { whiteSpace: 'normal', width:"10%" } } 
          isKey
          dataField="id"
        >
         RFID ID
        </TableHeaderColumn>
        <TableHeaderColumn
         thStyle={ { whiteSpace: 'normal', width: '10%'} } 
         tdStyle={ { whiteSpace: 'normal', width:"10%" } } 
          dataField="time"
          dataAlign="center"
        >
          Time
        </TableHeaderColumn>
        <TableHeaderColumn
          thStyle={ { whiteSpace: 'normal', width: '15%'} } 
          tdStyle={ { whiteSpace: 'normal', width:"15%" } } 
          dataField="status"
          dataAlign="center"
          dataFormat={statusFormatter}
        >
          Status
        </TableHeaderColumn>
        <TableHeaderColumn
          thStyle={ { whiteSpace: 'normal', width: '25%'} } 
          tdStyle={ { whiteSpace: 'normal', width:"25%" } } 
          dataField="type"
          dataAlign="center"
        >
          Type
        </TableHeaderColumn>
        <TableHeaderColumn
           thStyle={ { whiteSpace: 'normal', width: '35%'} } 
           tdStyle={ { whiteSpace: 'normal', width:"35%" } } 
          dataField="name"
          dataAlign="center"
        >
          Item Name
        </TableHeaderColumn>
      </BootstrapTable>
    )
  }
  
  return (
    <div>
      <CRow>
        <CCol>
        <p style={{fontSize:"20px", fontWeight:"bold"}}>{selectedValue}</p>
        </CCol>
        <CCol md="4" >
        <CForm style={{ marginLeft:"auto", borderRadius: '8px'}}>
        <Select
        isClearable
        isSearchable
        defaultValue={options[0]}
        value={options.find(obj => obj.value === selectedValue)} // set selected value
        options={options} // set list of the data
        onChange={handleChange} // assign onChange function

        />
         </CForm>
        </CCol>

       

        
      </CRow>
      <WidgetsDropdown dataInBound={inBound} dataOutBound={outBound} dataTotal={total} />
      <Card>
        <CardBody>
        {itemList()}
        </CardBody>
      </Card>
    
    </div>
  )
}

export default Dashboard
