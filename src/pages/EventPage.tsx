import React from 'react';
import { Event } from '../models/event';
import { useQuery } from '@tanstack/react-query';
import { getEventStateByID } from '../api/events';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

interface EventPageProps {
  sport: string
}


export default function EventPage({ sport} : EventPageProps) {
  const { id } = useParams();

  if (!id) {
    return
  }
  const { data, isLoading } = useQuery(['eventState', id], () => getEventStateByID(id));
  if (!data) {
    return <div>No data available</div>
  }

  const event: Event = data.events[0]

  return (
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
  </div>);
};