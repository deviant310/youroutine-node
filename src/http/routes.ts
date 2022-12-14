import { Http } from '@foobar/nojo';
//@ TODO реализовать в виде статичного экспорта маршрутов
Http
  .setRoutes({
    login: { path: '/login' },
    notes: { path: '/notes' },
    note: { path: '/notes/:id' }
  }, 'auth')
  .setRoutes({
    apiAuth: { path: '/api/auth', controller: 'api/auth' }
  }, 'json')
  .setRoutes({
    apiNotes: { path: '/api/notes', controller: 'api/notes' },
    apiNote: { path: '/api/notes/:id', controller: 'api/note' }
  }, 'json', 'auth');
