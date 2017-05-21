import { get, post } from '../http/client';

export async function getUser() {
  const user = await get('/api/user');
  return user;
}

export async function bindTv(id) {
  await post('/api/user/bind-tv', { id });
}

export async function getMovie(id) {
  const movie = await get(`/api/movie/${id}`);
  return movie;
}

export async function getMovies() {
  const movies = await get(`/api/movie`);
  return movies;
}

export async function getMovieClusters() {
  const movieClusters = await get('/api/movie/cluster');
  return movieClusters;
}

export async function favs(data) {
  await post('/api/user/favs', data);
}
