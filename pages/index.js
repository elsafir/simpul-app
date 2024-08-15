import { useState } from 'react';
import Messaging from '../components/messaging';
import ToDoList from '../components/TodoList';
import '../styles/globals.css'; // Tambahkan impor global.css di sini

export default function Home() {
  const [activeTool, setActiveTool] = useState('messaging');

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-around mb-4">
          <button
            className={`px-4 py-2 ${activeTool === 'messaging' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTool('messaging')}
          >
            Messaging
          </button>
          <button
            className={`px-4 py-2 ${activeTool === 'todo' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTool('todo')}
          >
            To-Do List
          </button>
        </div>
        {activeTool === 'messaging' && <Messaging />}
        {activeTool === 'todo' && <ToDoList />}
      </div>
    </div>
  );
}
