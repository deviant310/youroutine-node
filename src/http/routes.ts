import { Http } from '@jsway/interior';

Http
  .registerRoutes({
    login: { path: '/login' },
    auth: { path: '/auth' },
    notes: { path: '/notes' },
    note: { path: '/notes/:id' }
  }, 'auth')
  .registerRoutes({
    apiLogin: { path: '/api/login', controller: 'api/login' },
    apiAuth: { path: '/api/auth', controller: 'api/auth' }
  }, 'json', 'apiHeaders')
  .registerRoutes({
    apiNotes: { path: '/api/notes', controller: 'api/notes' },
    apiNote: { path: '/api/notes/:id', controller: 'api/note' }
  }, 'json', 'apiHeaders', 'auth');
