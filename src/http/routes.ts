import { Http } from '@jsway/interior';

Http
  .setRoutes({
    login: { path: '/login' },
    notes: { path: '/notes' },
    note: { path: '/notes/:id' }
  }, 'auth')
  .setRoutes({
    apiAuth: { path: '/api/auth', controller: 'api/auth' }
  }, 'json', 'apiHeaders')
  .setRoutes({
    apiNotes: { path: '/api/notes', controller: 'api/notes' },
    apiNote: { path: '/api/notes/:id', controller: 'api/note' }
  }, 'json', 'apiHeaders', 'auth');
