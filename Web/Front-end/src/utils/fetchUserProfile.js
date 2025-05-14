import Cookies from 'js-cookie';
import { API_URL } from '../apiEndpoints';

/**
 * Fetches the user profile using the handle stored in localStorage (removes '@'),
 * and includes the token from cookies for authorization.
 * Throws an error if the handle or token is missing, or if the fetch fails.
 */
export const fetchUserProfile = async () => {
  const storedHandle = localStorage.getItem('userHandle');
  if (!storedHandle) throw new Error('User handle not found in localStorage');
  const cleanHandle = storedHandle.replace('@', '');
  const token = Cookies.get('token');
  if (!token) throw new Error('Token not found in cookies');

  const res = await fetch(`${API_URL}/api/v1/user/${cleanHandle}`,
    {
      method: 'GET',
      credentials: 'include',
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch user');
  }
  const data = await res.json();
  return data;
};
