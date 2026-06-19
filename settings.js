const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94768223718' : process.env.OWNER_NUMBER, // ඔබේ WhatsApp අංකය ඇතුළත් කර ඇත
    SESSION_ID: process.env.SESSION_ID === undefined ? '' : process.env.SESSION_ID, //ADD YOUR SESSION ID
    GITHUB_USER_NAME: process.env.GITHUB_USER_NAME === undefined ? 'ravinu177' : process.env.GITHUB_USER_NAME, //ADD YOUR GITHUB USERNAME
    GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '' : process.env.GITHUB_AUTH_TOKEN //ADD YOUR GITHUB AUTH TOKEN WITHOUT gph_
};

/*
RAVI MD BOT DEVELOPED BY RAVI

(\ (\,,/)        /),,/)
(-•(    )       (•_•  )
(> ( '  )       ( 💔 )/
  U u  u         U  U
*/
