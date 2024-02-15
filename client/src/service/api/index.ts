import axios from 'axios';

export const getInterval = async () =>
  axios.get('/update-interval-time').then(({ data }) => data);

export const updateInterval = async (updatedInterval: number) =>
  axios
    .post('/update-interval-time', { updatedInterval })
    .then(({ data }) => data);
