const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUXZOiOBT9L3nVngZBBKu6ahERP8AvQMSteQgQIA0EhKDglP99i7a7uh92Znt5SiXk3JNzzr2/AMlxhVaoBeNfoCjxBVLULWlbIDAGkzoMUQn6IIAUgjEwZy2Fq8reH5ZxHMaCV/GKZ7ls0/MbUT07xZ5GcYsana1ewL0PitpLsf8HQLQKN/Z8cJS0SlfD11GCTS/Oc6rapbNWicFs4zi15WTT2C/g3iFCXGISqUWMMlTCdIXaLcTl9+hvtBu3Hy115bzhyfRw8s6ONggSx5joh0LOsV9Js9Orw4ip+D36VSYJc215YNLz3tJ97xxyLZv20rCxtEz2JHSBrhEZQWHzD/oVjggKFgEiFNP227rvdAsn29OZqmbjZs9zw+K9TcpnJNio3EFzzWW0W2vnMxnk3yM+89dHtONPrDap0tVqVt8uFqonNN9wy+FuyV+3YeDWt96CJF+Jb8uPrCT/R3dfsffS5brinkep4Z8t/apwfEbX8yIzYnZ95mptZGYBl2j+9+i/NlSX0qF19UpDuY2CZs6zXJ33BIQTWZR2y8kBn7i5aqn5J31I6/JPLLfPhXIK2tckD7LCOyY9VTYtbzpaXlvKpa/XTe2sR9w+SIOwOalyvEK79W0kHslGrfWdt0iYlLnxjjqRBnA6EDxOZmx8fXl7UYLaRQDG7L0PShThipaQ4px0ewNu0AcwuJjILxF9kxcM92aMdroqa+7RXiet34Sy7AwLYb847I/PZLgg6gVeNjfHfgF9UJS5j6oKBXNc0bxsDVRVMEIVGP/9sw8IaujDuK4cx/ZBiMuK2qQu0hwGH65+HELfz2tCzZb4SrdAJRgzn9uIUkyiqtOxJrD0Y3xBSgxpBcYhTCt074MAXbCPOjzA5vzVmBwu5tPTK1Hkizehu3DXUY5z8vglDDzOh0h6GvqB+MT7I+FJ4gXhiQ94bxgKLM8zAegD/N4z3Z3fz6cyCWVHnpwHPfWZ+tLMm2Y7Z7Yu6SNYD+1RiQIwpmWN+sCDflIXVp4g8gdcWzsn4oJEpS/4um1IonBg4hXry6L9BffhKRj/+pxTSh50eNuVornGUAR9kL1FEHcvl/jRSGClocANx+zwr+rHtdMRFsUPgmgH+655dyFAFOK0AmOg6KQqoDxXV+G6GPGaJi8iWYlk8OnRR9gfYdru3Zm37oXRWpi44bSVIunksvJiJ8YMNW7FTG+c0Dftve2+/AsIGIOjk185whTpKJh64Wkz9eBiUNbEHXJJrlqD8sTGy+eZMNXRZEs3KifHrNzbaHWrwNmZZ449qbE3aR5AxQ8PTcNPzFqOXrpqj6x8LdZMhbC056KRLfyDWo4Y47ll8LKpFrZPqu3CNl2lNZVgy08tEbsYK7qULISbl1y1yY23ValuEj46HMX5sH3N0mWoGfHu0YZvYyB9H7/4rUF+vScrxOhtmhHYOfQf3nzNOHPvf4F4H4+/ydHEYpyJcwsJP0WRM7+KF3frOOudom4XgW4Zwt4UD4RTU/Wggfv9Zx8UKaRhXmZgDCAJyhx3vZDCisqfbWrhDFUUZgUYsyOeHYhDhuf7IGvlojAppB/dDeS3zzTA/R+c8IEo+QcAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254710772666,254106727593",              
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
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
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





