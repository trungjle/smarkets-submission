import React from 'react';
import { Event } from '../models/event';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  type?: string;
  event: Event;
}

export default function Card({ type, event }: CardProps) {
  const navigate = useNavigate();

  return (
    <div className={`flex grow flex-col justify-between card`}>
      <div className="flex flex-col p-4">
        <h3 className="card-title text-lg font-semibold text-black">{event.name}</h3>
        <p className="card-subtitle text-gray-700 mt-2">{event.description}</p>
        <div className="flex items-center mt-4">
          <span className="text-gray-500 mr-2">State:</span>
          <span
            className={`font-semibold text-${
              event.state === 'Pending'
                ? 'yellow-500'
                : event.state === 'In Progress'
                ? 'green-500'
                : 'red-500'
            }`}
          >
            {event.state}
          </span>
        </div>
      </div>
      {type && <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4 mb-4"
        onClick={() => navigate(`/sport/${type}/${event.id}`)}>
        View Details
      </button>}
    </div>
  );
}