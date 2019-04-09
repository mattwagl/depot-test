const path = require('path');
const fs = require('fs');

const uuid = require('uuidv4');

const DepotClient = require('wolkenkit-depot-client/src/DepotClient');

const depotClient = new DepotClient({
  host: 'local.wolkenkit.io',
  port: 3001
});

(async () => {
  let id;

  const stream = fs.createReadStream(path.join(__dirname, '1mb.dat'));

  try {
    id = await depotClient.addFile({
      id: uuid(),
      content: stream,
      fileName: '1mb.dat'
    });
  } catch (ex) {
    console.log('Error while saving file: ', ex);
  }

  console.log('Saved the file: ', id);
})();
