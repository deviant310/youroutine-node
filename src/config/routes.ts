export default {
  // base routes
  login: {
    path: '/login'
  },
  auth: {
    path: '/auth'
  },
  notes: {
    path: '/notes'
  },
  note: {
    path: '/notes/:id'
  },
  
  //api routes
  apiLogin: {
    path: '/api/login',
    controller: 'api/login'
  },
  apiAuth: {
    path: '/api/auth',
    controller: 'api/auth'
  },
  apiNotes: {
    path: '/api/notes',
    controller: 'api/notes'
  },
  apiNote: {
    path: '/api/notes/:id',
    controller: 'api/note'
  }
};
