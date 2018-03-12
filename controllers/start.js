'use strict';

const logger = require('../utils/logger');
const playlistStore = require('../models/playlist-store');

const start = {
  index(request, response) {
    logger.info('start rendering');
    
    const playCollections = playlistStore.getAllPlaylists();
    let totalsongs = 0;
    for (let i in playCollections) {
     totalsongs = totalsongs + playCollections[i].songs.length;
    }

    const viewData = {
      title: 'Welcome to Playlist 1',
      totalCollections: playCollections.length,
      totalsongs: totalsongs,
    };
    response.render('start', viewData);
  },
};

module.exports = start;
