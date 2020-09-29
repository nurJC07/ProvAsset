import React from 'react'
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'


export default [
  {
    _tag: 'CSidebarNavTitle',
    _children: []
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-home',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Master Data',
    to: '/masterdata',
    icon: <CIcon content={freeSet.cilBarChart} customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Gate Scanner',
    to: '/gatescanner',
    icon: <CIcon content={freeSet.cilClipboard} customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Area Scanner',
    to: '/areascanner',
    icon: <CIcon content={freeSet.cilIndustrySlash} customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Report',
    to: '/report',
    icon: 'cil-list',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Keluar',
    to: '/logout',
    icon: <CIcon content={freeSet.cilPowerStandby} customClasses="c-sidebar-nav-icon" />,
  },
  
  
]

