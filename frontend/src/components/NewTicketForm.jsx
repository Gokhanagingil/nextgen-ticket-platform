import React, { useState } from 'react';
import { createTicket } from '../api/ticketApi';

export default function NewTicketForm() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    type: 'incident',
    priority: 'medium'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTicket(form);
    alert('Ticket oluşturuldu!');
    setForm({ title: '', description: '', type: 'incident', priority: 'medium' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-semibold">Yeni Ticket Oluştur</h2>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Başlık" className="w-full p-2 border" />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Açıklama" className="w-full p-2 border" />
      <select name="type" value={form.type} onChange={handleChange} className="w-full p-2 border">
        <option value="incident">Incident</option>
        <option value="request">Request</option>
        <option value="change">Change</option>
      </select>
      <select name="priority" value={form.priority} onChange={handleChange} className="w-full p-2 border">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
        <option value="critical">Critical</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Oluştur</button>
    </form>
  );
}