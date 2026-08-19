// ==UserScript==
// @name YouTube Playlist → My Music (Ultra-Safe)
// @namespace youtube-playlist-to-music
// @version 3.2.0
// @description
// @match https://www.youtube.com/watch*
// @grant none
// @run-at document-idle
// ==/UserScript==
(() => {
    'use strict';

    // ============================================================
    // CONFIGURATION
    // ============================================================
    const SOURCE_PLAYLIST_ID = 'PLO7E9TeEK1rMKVx069xNb7osTJlpr5kmx';
    const TARGET_PLAYLIST_NAME = 'music';

    const currentId = getPlaylistId();

    function getPlaylistId(url = window.location.href) {
        const listId = new URL(url).searchParams.get('list');
        return (listId && listId.startsWith('PL')) ? listId : null;
    }

    function log(message, level = 'info') {
        if (!level) console.log(`%c[Userscript] ${message}`, "color: #00ff00; font-weight: bold;");
        else console.log(`%c[Userscript] ${message}`, "color: #00ff00; font-weight: bold;");
    }
})();
