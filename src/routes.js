import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const MasterData = React.lazy(() => import('./views/master/MasterData'));
const Logout = React.lazy(() => import('./views/pages/logout/Logout'));
const Report = React.lazy(() => import('./views/report/report'));
const GateScanner = React.lazy(() => import('./views/gate/GateScanner'));
const AreaScanner = React.lazy(() => import('./views/area/AreaScanner'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/masterdata', name: 'Master Data', component: MasterData },
  { path: '/logout', name: 'Logout', component: Logout },
  { path: '/report', name: 'Report', component: Report },
  { path: '/gatescanner', name: 'Gate Scanner', component: GateScanner },
  { path: '/areascanner', name: 'Area Scanner', component: AreaScanner },
];

export default routes;
