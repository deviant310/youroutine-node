import { Route } from '@jsway/interior';

Route.register({
  login: { path: '/login' },
  auth: { path: '/auth' },
  notes: { path: '/notes' },
  note: { path: '/notes/:id' }
}, 'auth');

Route.register({
  apiLogin: { path: '/api/login', controller: 'api/login' },
  apiAuth: { path: '/api/auth', controller: 'api/auth' }
}, 'json', 'apiHeaders');

Route.register({
  apiNotes: { path: '/api/notes', controller: 'api/notes' },
  apiNote: { path: '/api/notes/:id', controller: 'api/note' }
}, 'json', 'apiHeaders', 'auth');
