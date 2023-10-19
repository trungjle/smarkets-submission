import axios from 'axios';
import { API_URL as url } from '../config/index';

const EVENTS_URL = `${url}/events/`;

async function fetchEvents(url: string, params?: any) {
  const res = await axios.get(url, { params });
  return res.data;
}

export function getEvents() {
  return fetchEvents(EVENTS_URL);
}

export async function getEventsByType(type: string) {
  return await fetchEvents(EVENTS_URL, { type_domain: type });
}

export async function getEventStateByID(id: string) {
  return await fetchEvents(EVENTS_URL, { id: id });
}