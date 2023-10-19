import React from 'react';
import SidebarNav from '../../components/Sidebar';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

test('should render the sidebar items correctly', () => {
  const { getByText } = render(<SidebarNav />);

  const homeItem = getByText('Home');
  const categoriesItem = getByText('Categories');

  expect(homeItem).toBeInTheDocument();
  expect(categoriesItem).toBeInTheDocument();
});

test('should render the sidebar categories correctly', () => {
  const { getByText } = render(<SidebarNav />);

  const footballItem = getByText('Football');
  const basketballItem = getByText('Basketball');
  const baseballItem = getByText('Baseball');

  expect(footballItem).toBeInTheDocument();
  expect(basketballItem).toBeInTheDocument();
  expect(baseballItem).toBeInTheDocument();
});