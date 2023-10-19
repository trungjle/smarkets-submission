import React from 'react';

import Card from '../components/Card';
import { useQuery } from '@tanstack/react-query';
import { getEventsByType } from '../api/events';

interface CategoryProps {
  type: string;
}

export default function Category({ type }: CategoryProps) {
  const { status, data } = useQuery([type], () =>
    getEventsByType(type)
  );

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No events available</div>;
  }

  return (
    <div className="grow ml-1/5 p-4">
      <h1 className="text-3xl capitalize font-semibold my-8">{type}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.events.map((event) => {
            return <Card key={event.id} type={type} event={event} />;
        })}
      </div>
    </div>
  );
}