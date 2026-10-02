import { reactive } from 'vue';
export const auth = reactive({ user: JSON.parse(localStorage.getItem('user') || 'null') });
export function login(token, user) { localStorage.setItem('token', token); localStorage.setItem('user', JSON.stringify(user)); auth.user = user; }
export function logout() { localStorage.removeItem('token'); localStorage.removeItem('user'); auth.user = null; }
