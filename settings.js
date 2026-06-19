const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94768223718' : process.env.OWNER_NUMBER,
SESSION_ID: process.env.SESSION_ID === undefined ? 'KnightBot!eFlU0w7I#w0Y6G3M9_T4nKl1P2qR5sV7bN8mX0zC3xV6bB9n' : process.env.SESSION_ID,
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME === undefined ? 'ravinu177' : process.env.GITHUB_USER_NAME,
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '' : process.env.GITHUB_AUTH_TOKEN
};

/* RAVI MD BOT DEVELOPED BY RAVI
(\ (\,,/)        /),,/)
(-•(    )       (•_•  )
(> ( '  )       ( 💔 )/
 U u  u         U  U
*/
