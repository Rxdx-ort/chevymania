import { reactive } from 'vue';
export type CurrentUser = { id: string; name: string; email: string; role: string };
export const auth = reactive<{ user: CurrentUser | null }>({ user: JSON.parse(localStorage.getItem('user') || 'null') });
export function login(token: string, user: CurrentUser) { localStorage.setItem('token', token); localStorage.setItem('user', JSON.stringify(user)); auth.user = user; }
export function logout() { localStorage.removeItem('token'); localStorage.removeItem('user'); auth.user = null; }
