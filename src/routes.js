import React from 'react';

const Dashboard = React.lazy(() => import('./views/Pages/Dashboard/Dashboard'));
const Contact = React.lazy(() => import('./views/Pages/Contacts/Contact.js'));
const Company = React.lazy(() => import('./views/Pages/Company/Company.js'));
const ContactProfile = React.lazy(() => import('./views/Pages/Contacts/ContactProfile'));
const Index = React.lazy(() => import('./views/Pages/Contacts/index'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/company', name: 'Company', component: Company },
  { path: '/contact', exact: true, name: 'Contact', component: Index},
  // { path: '/contact/profile', name: 'Profile', component: ContactProfile }
];

export default routes;
