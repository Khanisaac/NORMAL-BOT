const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
const path = require("path");

// Load environment variables from config.env if it exists
if (fs.existsSync('config.env')) {
    require('dotenv').config({ path: path.join(__dirname, 'config.env') });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL || databasePath;

module.exports = {
    PREFIX: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "isaac khan",
    NUMERO_OWNER: process.env.NUMERO_OWNER || " khans",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || "no",
    BOT: process.env.BOT_NAME || 'BMW_MD',
    URL: process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
    HEROKU_API_KEY: process.env.HEROKU_API_KEY,
    WARN_COUNT: process.env.WARN_COUNT || '3',
    ETAT: process.env.PRESENCE || '',
    CHATBOT: process.env.CHATBOT || 'no',
    CHATBOT1: process.env.AUDIO_CHATBOT || 'yes',
    DP: process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1: process.env.ANTIDELETE_MESSAGES || 'yes',
    ANTIDELETE2: process.env.ANTIDELETE2 || 'yes',
    MENUTYPE: process.env.MENUTYPE || '',
    ANTICALL: process.env.ANTICALL || 'yes',
    ANTILINK_GROUP: process.env.ANTILINK_GROUP || 'yes',
    AUTO_REACT: process.env.AUTO_REACT || 'yes',
    AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || 'yes',
    AUTO_REPLY: process.env.AUTO_REPLY || 'no',
    AUTO_READ: process.env.AUTO_READ || 'yes',
    AUTO_SAVE_CONTACTS: process.env.AUTO_SAVE_CONTACTS || 'yes',
    AUTO_REJECT_CALL: process.env.AUTO_REJECT_CALL || 'yes',
    AUTO_BIO: process.env.AUTO_BIO || 'yes',
    AUDIO_REPLY: process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath ? process.env.DEFAULT_DATABASE_URL : DATABASE_URL,
};const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
const path = require("path");

// Load environment variables from config.env if it exists
if (fs.existsSync('config.env')) {
    require('dotenv').config({ path: path.join(__dirname, 'config.env') });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL || databasePath;

module.exports = {
    PREFIX: process.env.PREFIX || ".",
    isaac: process.env.OWNER_NAME || "isaac khan",
    NUMERO_OWNER: process.env.NUMERO_OWNER || " khans",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || "no",
    BOT: process.env.BOT_NAME || 'BMW_MD',
    URL: process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
    HEROKU_API_KEY: process.env.HEROKU_API_KEY,
    WARN_COUNT: process.env.WARN_COUNT || '3',
    ETAT: process.env.PRESENCE || '',
    CHATBOT: process.env.CHATBOT || 'no',
    CHATBOT1: process.env.AUDIO_CHATBOT || 'yes',
    DP: process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1: process.env.ANTIDELETE_MESSAGES || 'yes',
    ANTIDELETE2: process.env.ANTIDELETE2 || 'yes',
    MENUTYPE: process.env.MENUTYPE || '',
    ANTICALL: process.env.ANTICALL || 'yes',
    ANTILINK_GROUP: process.env.ANTILINK_GROUP || 'yes',
    AUTO_REACT: process.env.AUTO_REACT || 'yes',
    AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || 'yes',
    AUTO_REPLY: process.env.AUTO_REPLY || 'no',
    AUTO_READ: process.env.AUTO_READ || 'yes',
    AUTO_SAVE_CONTACTS: process.env.AUTO_SAVE_CONTACTS || 'yes',
    AUTO_REJECT_CALL: process.env.AUTO_REJECT_CALL || 'yes',
    AUTO_BIO: process.env.AUTO_BIO || 'yes',
    AUDIO_REPLY: process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath ? process.env.DEFAULT_DATABASE_URL : DATABASE_URL,
};BWM-XMD;;;H4sIAAAAAAAAA5VU25KiSBT8lYl61d5GRAEjOmJARBEQ8dboxjwUUGBxlypQ7PDfN9Du6H7Yme19q6hLnqzMk+cNZDkmSEcNGL2BosQ1pKhd0qZAYATkKghQCbrAhxSCEbAUaGymNqTMgpxsOq6NbNeRjAmMz5EYXMpktjUN87maOd4LuHVBUbkJ9v4AqE232qKfXlWul28G9kYZWGnKz9Rrog/T2JF7G0bdloNwcbFfwK1FhLjEWTgpjihFJUx01CwhLr9HPzcZ/uKJunK05sQau8o5EJKZss/xUh+cXxNtIm1WjJjIr8z36J8sZ2AvAlV1JCsS9lUQ2ca818ml+nDOXi168ZplfdCuTEYe9AkOM+RrPsoops23dc+1XJ7yQVLtFiKNsrFmXHf58fVyoRM2ZKE88fpKljH9S2p+j/hSIE46W0K+WnBVGL2O94so2SvqIVk5ph6rmWhx62aniNftV+LL8qNX4v+je2N5nhxasN7bDapCYdsxdDRkOzxWTBVzBRUnRO64z07KfY/++OoXapQaMVzFrnSQBbqK/GyBlkE4jzMv2e4Gdj2FltvLP+lDWpV/Ylnax56V1hu3kAM9V52T4JTxzFSUnb309WwlajthsjSqg5OflX0qpOPAQTjmhL372t/mezI1p8ZJeiapJiu9K7us4UoKX+4/ilGj+WDUu3VBiUJMaAkpzrP73rDfBdCv18grEb3LC6JLtSnyPTasonSyWg1cAVVXeZAhsZlH0Yl68+SZnbBkuH8BXVCUuYcIQf4ME5qXjYkIgSEiYPT3ry7I0IU+jGvL9XtdEOCS0G1WFUkO/Q9XPw6h5+VVRtdN5o3bBSrBiPncRpTiLCStjlUGS++IazQ+QkrAKIAJQbcu8FGNPdTigcNxzfJPw8TWT+wl2Gj8YLPlpJbyMc8eVzzk+gMIB0+QFbknDvbcJzdghCd24PcFwQ0ED4qgC/B7Zto3v7UQTlY+TcfhxVjanm450mCg1BfDoZJ9t+GhPSqRD0a0rFAXuNCLq2KTxyj7A+6kb1Yqjc5kztOFjcnBuK58Lojjk/kF9+EpGL19zqlx7rd40mrF8sZaBl2Q3lsQtz9nBxzP9QYiy3HiqDf8Sf46t0LCovgrQxR0QQbb2+AnJhB6P/QjzH6kKKN52dZ8N6RF8xGFOCFtMJYWzV1NmejLFXaZ6VSyQ2kctop/GPiRhEen+WGwXmt9nfHXqnxN+aLq7GNdc5VFfli/ig1fzzrqQmv6jfTyLyBgBGzMxjE01N609PYwGlpWuhESpsMcV7KjTtjzfmkuj4YQmYuirmhw6Bd2ItUOT5CNy2Y3HpdGPnPWaaw6REgOwuxYKNJLW+3RSF+L7cwet3rOT53Q4KKLts2VeJ5Rw6jpqvbyVcWvNepOKfGPckR2dbHWRDY9ba36yrG9eSWbq/xZ3+xL0ZbcDtL3/TNjjqVHRu8zInmfzfienrf3tgswuo+6d0P+07jPBDC37heM9+H5my6Tnf2MifGiobPt0fYG1dCt0/kYT89XON0mtVfxl+fjZm1SIQS3268uKBJIg7xMwQiQ1IWgCxJIqPSZ4A1OEaEwLcCox/eFoTgUhN7tHzu5whP3BwAA

const fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

const fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
