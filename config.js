const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61V2Y7iRhT9l3qFGbxiG6mleAVsMLsxRHko7LJdjTfKZcCM+iEfk3/IW6T5lHxJ5KZb09FsHSl+KpWrzj333nNPfQJ5gSvkoAYMPoGS4DOkqF3SpkRgALQ6ihABXRBCCsEAyDY/ERlNNmP9OpY6DNGjtXxgwvmN9gTEpTsjl3zqH7RR8ACeuqCsDykOfgBoy2aftYnjE59w+myb9RuX6c+Pt4lvj0pWVLdpvQjRUrvID+CpRYSY4Dw2ywRliMDUQc0cYvI++idn3PF0ZpXo1+Wcutp0aAtOUoqCpQQmd002+jUlzKmDLfV99Nn9vifxa6fqqNYtGPnrlBN5Md4tjYkVMY6W9JpOr+OMbvHmTr/CcY7CcYhyimnz7rrP5nvrYCwnPUEocrbc+h1tvLk6sj+mTLYT7bMVrfV4Yezyy/uIQ/0xKxO4aUZThbW5ym32YQwXa45h+JPK6FP+4nYufnO7Hd8Sn5NXrRz/S91nY3fBM9PHvkQ3Illz3llUL4Y2ibdlXS+PATe2NpMSFke2eB99J7iWzox3+R7c9IR8vR12bEf106EqrIpFSPZqZGlbL0v4N3WHtCY/YiksLgFU59747Aec3jhVQ92dPNIkaG+doZPanpUcrWaZEr1ektzuX7hjOTEwzg9X5fi4NViszFbT9Zyw5WU399IdGSaXh+eMjqgZh2DAPnUBQTGuKIEUF3m7x/FcF8DwvEIBQfS5vMCI7OWxFvfmAgorkzvLsPMoptQOt43KO4W8G575zS7vbLziAXRBSYoAVRUKR7iiBWmmqKpgjCow+PW5U23SBGUFRTYOwQBwoiCJkswqjMj8Un28JJBWsCw/5oiCLohIkU0RGFBSoy54viAasspJkqGqvMppotwX+oaoSrKm8KysSmKbYnYPusYZqijMSjBgJYETGa7PCk/d/4eHweiqrvclkdMtheVYnhcVzmL7PCsphmwwP+XxWxfk6ErvOm6rz7NdEGFS0U1el2kBw1eRv/6EQVDUOV01eaC3C0TA4M02ohTncdVmVueQBAk+I73NAwwimFboqQtCdMYBavFAmiVWcl6Wi6g5YbpeVOVGy9S2g0mR34/IbCCKMJI/SAzX/yBAIfigsHL0AQZMyCp9eDiwPGjLcbeQ9s53FT010ASefB5Zs06NO1aCe3qNb/3bePesyrsUEUHha5UPMDjW5bo4ovxHPtqw5qYwEukgwjnjjCIV3qKg3qVS8Qb3LnEw+PTFtvUibPGW3HYx1y0HtN1q43ylhgH3tR5y2B4Gn//4+/c/P//VoLwN9dKHFiREFOK0AgOgzzpTvl8MzemalQ/CcKiasarHbaFf+/bqB/d58ypzzoyXvufR5hKb7MziZNVNeWapbEN0YhY7aaGxE5VJLg/fAAEDsKkeJ/L8GNeraYJdTZgZJeeqjdjb7Wqrb3Bzf+mt9nW635d2vO7rlMv1ZhOap864KFSnw9rD6YylG8IUKWZc7QjpSI8f2mh3/fwrWDScmCzNGJOaQVK7SynCwllR2OLoLeplepAjn5bxxCnZvKr99cENtr10EXhIJE19aSy82Dau5vlllp3E0Q6WXozVu1M9O2X68kLhFw+5qy3C6NnwXxrxs3590T3z1H0D8fKCfEdbmnfQDEU3PdY7BNVYc9dJeFaNfaiYkZf7J2oOZ4wari7uOABP7UCXKaRRQbL2WctDUuAQdEEKK6p+Gd1vuQHTBVmjluWKQvo68UBtP/vGg6d/ACJ31s4cCQAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "khan",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254741592449",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE_MESSAGES || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});





