import React from 'react';

import Card from '../components/Card';
import { useQuery } from '@tanstack/react-query';
import { getEvents } from '../api/events';


export default function Home() {
  const { status, data } = useQuery(['events'],getEvents);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No events available</div>;
  }

  return (
    <div className="grow ml-1/5 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.events.map((event) => {
            return <Card key={event.id} event={event} />;
        })}
      </div>
    </div>
  );
}