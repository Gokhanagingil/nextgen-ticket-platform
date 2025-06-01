import React, { useEffect, useState } from 'react';
import { getTickets } from '../api/ticketApi';

export default function TicketList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getTickets().then(data => setTickets(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Ticket Listesi</h2>
      <ul className="space-y-2">
        {tickets.map(ticket => (
          <li key={ticket.id} className="bg-white shadow p-4 rounded">
            <h3 className="font-bold">{ticket.title}</h3>
            <p>{ticket.description}</p>
            <span className="text-sm text-gray-500">{ticket.type} | {ticket.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}