import { get } from '../http/client';

export async function getUser() {
  const user = await get('/api/user');
  return user;
}
