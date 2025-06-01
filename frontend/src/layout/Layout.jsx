import React from 'react';

export default function Layout({ children, setPage }) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-white p-4 space-y-4">
        <div className="font-bold text-lg">Ticket Platform</div>
        <button onClick={() => setPage('list')} className="block w-full text-left">📋 Ticket Listesi</button>
        <button onClick={() => setPage('new')} className="block w-full text-left">➕ Yeni Ticket</button>
      </aside>
      <main className="flex-1 bg-gray-100 p-6">{children}</main>
    </div>
  );
}