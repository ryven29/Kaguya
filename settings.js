/*================================
☢️ NOXZ CRY
• Creator: Noxz Cry
=================================*/


//Kalo kurang tambahin array nya ["Nomor lu"]
global.owner = [
  ["6282159690832"],
]; 

global.numberbot = "6285345047847";
global.nameowner = "👤Ryven",
global.nomorown = "6282159690832";

/*Ini Isi dengan Payment kalian masing masing*/
global.dana = "6282159690832";
global.pulsa = "6285822136384";
global.ovo = "6282159690832";


/*Apa Itu apikey ??*/
global.APIs = {}
global.APIKeys = {}

//Other Settings
global.namebot = "Glyphic";
global.sgc = "https://chat.whatsapp.com/CnkVILeaMQP6v1c5xS9nvq";
global.isPairing = true //Mau pake pairing? true = idup, false = mati
global.sig = "https://chat.whatsapp.com/CnkVILeaMQP6v1c5xS9nvq";
global.swa = "wa.me/6282159690832";
global.version = "5.0";
global.access_denied = "https://telegra.ph/file/e1b2d7c0ac4838ebd20d1.jpg";

global.wm = "Glyphic Bot WhatsApp"
global.done = "```© Glyphic 2024```";
global.icon = "https://telegra.ph/file/e1b2d7c0ac4838ebd20d1.jpg"
global.fla =
  "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text="
global.wait = "```L o a d i n g ...```";
global.eror = "`! Error Command Failed`"
global.packname = "© Glyphic";
global.author = "Bot Whatsapp"
//Ini Isi pakai video & poto lu
global.gif = "https://telegra.ph/file/e1b2d7c0ac4838ebd20d1.jpg"; 
global.thumb = "https://telegra.ph/file/e1b2d7c0ac4838ebd20d1.jpg"
global.multiplier = 45;
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    let emot = {
      exp: "✉️",
      money: "💵",
      potion: "🥤",
      diamond: "💎",
      common: "📦",
      uncommon: "🎁",
      mythic: "🗳️",
      legendary: "🗃️",
      pet: "🎁",
      sampah: "🗑",
      armor: "🥼",
      sword: "⚔️",
      kayu: "🪵",
      batu: "🪨",
      string: "🕸️",
      kuda: "🐎",
      kucing: "🐈",
      anjing: "🐕",
      petFood: "🍖",
      gold: "👑",
      emerald: "💚",
    };
    let results = Object.keys(emot)
      .map((v) => [v, new RegExp(v, "gi")])
      .filter((v) => v[1].test(string));
    if (!results.length) return "";
    else return emot[results[0][0]];
  },
};
const Jimp = require('jimp');
const fetch = require('node-fetch');

let resizeThumb =  resize(thumb, 300, 250)
    global.Thumbnails = resizeThumb
    
/*====[ FAKE THUMBNAIL ACCESS DENIED ]======*/

       global.danied = {
        contextInfo: {
            mentionedJid: [],
            groupMentions: [],
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363198449115557@newsletter',
                newsletterName: "🔴 FOLLOW ME ON CHANNEL",
                serverMessageId: -1
            },
            forwardingScore: 256,
externalAdReply: {
        title: `[ x ] Your Acces has Danied`,
        body: null,
        thumbnailUrl: access_denied,
        sourceUrl: sgc,
        mediaType: 1,
        renderLargerThumbnail: true
          }
        }
    }
/*========[ GLOBAL ADREPLY ]============*/
   global.adReply = {
        contextInfo: {
            mentionedJid: [],
            groupMentions: [],
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363198449115557@newsletter',
               newsletterName: "🔴 FOLLOW ME ON CHANNEL",
                serverMessageId: -1
            },
            forwardingScore: 256,
externalAdReply: {
        title: `☢️ Noxz Cry ver 5.0 - Noxz`,
        body: wm,
        thumbnailUrl: thumb,
        sourceUrl: "",
        mediaType: 1,
        renderLargerThumbnail: true
          }
        }
    }
/*=========[ FAKE IG ( SMALL AD REPLY ) ]==============*/

  global.fakeig = {
        contextInfo: {
            mentionedJid: [],
            groupMentions: [],
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363198449115557@newsletter',
               newsletterName: "🔴 FOLLOW ME ON CHANNEL",
                serverMessageId: -1         
            },
            forwardingScore: 256,
externalAdReply: {
        title: `☢️ Noxz Cry -- Simple WhatsApp bot\n• Version: ${global.version}`,
        body: wm,
        thumbnailUrl: icon,
        sourceUrl: "",
        mediaType: 1,
        renderLargerThumbnail: false
          }
        }
    }
    
let fs = require("fs");
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log("Update settings.js");
  delete require.cache[file];
  require(file);
});

async function resize(url, width, height, referer = null) {
    try {
        const fetchOptions = {
            redirect: 'follow',
            headers: {},
        };

        if (referer) {
            fetchOptions.headers['Referer'] = referer;
        }

        const response = await fetch(url, fetchOptions);

        if (response.ok) {
            const finalUrl = response.url;
            const arrayBuffer = await response.arrayBuffer();
            return await Jimp.read(Buffer.from(arrayBuffer)).then(image => image.resize(width, height).getBufferAsync(Jimp.MIME_JPEG));
        } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error:', error.message);

        try {
            const undiciFetchOptions = {
                redirect: 'follow',
                headers: {},
            };

            if (referer) {
                undiciFetchOptions.headers['Referer'] = referer;
            }

            const arrayBuffer = await undiciFetch(url, undiciFetchOptions).then(response => response.arrayBuffer());
            return await Jimp.read(Buffer.from(arrayBuffer)).then(image => image.resize(width, height).getBufferAsync(Jimp.MIME_JPEG));
        } catch (retryError) {
            console.error('Retry Error:', retryError.message);
            return Buffer.from([]);
        }
    }
}

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())];
}