import React from 'react';
import * as router from 'react-router'
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Card from '../../components/Card';

const mockEvent = {
  id: 1,
  name: 'Test Event',
  description: 'This is a test event',
  state: 'Pending'
};

const navigate = jest.fn()

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
})

describe('Card component', () => {
  test('renders event name and description', () => {
    render(<Card event={mockEvent} />);
    expect(screen.getByText('Test Event')).toBeInTheDocument();
    expect(screen.getByText('This is a test event')).toBeInTheDocument();
  });

  test('renders state information correctly', () => {
    render(<Card event={mockEvent} />);
    expect(screen.getByText('State:')).toBeInTheDocument();
    expect(screen.getByText('Pending')).toBeInTheDocument();
  });

  test('navigates to the correct URL on button click', () => {
    const mockType = 'football';

    render(<Card type={mockType} event={mockEvent} />);
    const viewDetailsButton = screen.getByText('View Details');
    fireEvent.click(viewDetailsButton);
    expect(navigate).toHaveBeenCalledWith(`/sport/${mockType}/${mockEvent.id}`);
  });
});