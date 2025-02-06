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

// LBWM-XMD;;;H4sIAAAAAAAAA5VUW4+iSBj9K5N6lZ4WQUGTTgZQAfGGgLfNPBRQQCn3KlDs+N83tN3p2WRntvetUpfznTrnO98rSDNMkIEaMHoFeYlrSFG7pE2OwAjIVRCgEjDAhxSCEUjUJZdcsgWrPjuzU4Qw7AQ9ZX2cFZK6VhZu7qGTMszqIXt5AXcG5JUbY+8PgKzbs4MwjLW1L/qGDatgM/SkQDtIp3of0nNTu5W6uJVrZfEC7i0ixCVOw0keoQSVMDZQs4a4/Br9zLht2CTJkYTZrHNV7U1OdboiY3rarQfF2SAlFsNcSTXyNfr2INleulGew619m8KuEtvz2XKOV1drMJtW7IaXAmOw7W8c50Gf4DBFvu6jlGLafFl3foLp9eBIDsfOV1Pso0BYBcnJ3Hfl9Pkow8mhInqxW/anzteI36B5CTW0MveBMp2b3nk4H94uxFWErSErkid1/X01qRX1wv9KfF1+9Mr5/+jem7FzZbAkkTILc0uzGsO+HcsqTcNs7sRNj4eJWR82en8/+Rp9c+vcNBHmfpUF2/GWRlK2clKB8pUzPIQXR9ssTn1pGT53vU/6kFbln1gu0k7hD1Tb7RXmxRfcwpJzfIz9fbgSl2khj40gkDusVqjDWXwRJ4csgU26nV7lQexK80y4DWvT1gt08gJx5bpcJPuK9PL2ozNqdB+M2DsDShRiQktIcZa2exzHAOjXFvJKRN/UBe5RPyW3+lYftLjZXQyPZTczNnHKetE9Hk/zpt7I28AMwqn4AhiQl5mHCEG+hgnNymaBCIEhImD0108GpOhKH769VWMZEOCSUCet8jiD/oepH4fQ87IqpVaTekq7QCUYdT+3EaU4DUkrY5XC0otwjZQIUgJGAYwJujPARzX2UIsHqr3KFsKl2OyTheFZK+QRfRa2lKMsfVzxewLPddngacAGwhMPEf809HriU88PIOojN+B6ImAAfo9M++a3DtbdM2cnPaiijKvsmaaQtX7ujHdD/hGLh/SoRD4Y0bJCDHChd65yOzuj9A+4rtyPamwp6VzmwibTiDNFw0O5faTjn5aC0evnmFIyv8XTOE3bWNwYMCB560Dc/rzX5wWe7Q97PD8cscIP8v3SCgnz/HuKKGBACtvb4AcmEHrfjAim3xKU0qxsa74b0qL5iEIcEzACytqimauPJ6uxfS67qipNQkkJJfBp4EcQHp3mh4Fl6ZzR9a2pfEuEvOoczobujpfZ0doNG6HWOtOl3nCN9PIvIGAEDNN1lPFkK0wm84lve6y/POg3q7/v26l4hXMdF1KfPzz3YqVAnelyBzktaoJouDFNex5Lu3XddMzbVSIXY8oV8jNRCyl8aas9GunXYtLSH6Pk5qbl8ykza93QYNGT+5F4KomrWMpOPPomivTVwY4ihYyLfW7W0ySpT44aI8E9ONLRqIWBoBpCL7ss1cg+Su8RfRsR8ftoxm/peX1vuwCjt0n3bsh/GveZgO6d+QXjfXb+psvk/UHrnvGyoZoTmV6/Grh1MlOwerlB1YlrrxKuz5FtLagYgvv9JwPyGNIgKxMwAiRxIWBADAmVPhNs4wQRCpMcjFiBE0WeH/S5+98BgTh29gcAAA==oad environment variables from config.env if it exists
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
};

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
