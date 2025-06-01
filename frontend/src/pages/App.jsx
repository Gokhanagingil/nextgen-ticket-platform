import React, { useState } from 'react';
import Layout from '../layout/Layout';
import TicketList from '../components/TicketList';
import NewTicketForm from '../components/NewTicketForm';

export default function App() {
  const [page, setPage] = useState('list');

  return (
    <Layout setPage={setPage}>
      {page === 'list' && <TicketList />}
      {page === 'new' && <NewTicketForm />}
    </Layout>
  );
}