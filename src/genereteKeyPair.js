import { generateKeyPairSync } from 'crypto';
import fs from 'fs';
import path from 'path';

function genKeyPair() {
   try {
      const rootDir = path.join(__dirname, '../');
      // Generates an object where the keys are stored in properties `privateKey` and `publicKey`
      const keyPair = generateKeyPairSync('rsa', {
         modulusLength: 4096, // bits - standard for RSA keys
         publicKeyEncoding: {
            type: 'pkcs1', // "Public Key Cryptography Standards 1"
            format: 'pem', // Most common formatting choice
         },
         privateKeyEncoding: {
            type: 'pkcs1', // "Public Key Cryptography Standards 1"
            format: 'pem', // Most common formatting choice
         },
      });

      fs.writeFileSync(rootDir + '/id_rsa_pub.pem', keyPair.publicKey);
      fs.writeFileSync(rootDir + '/id_rsa_priv.pem', keyPair.privateKey);
      console.log('Generete pair key successful');
   } catch (err) {
      Logger.error(err);
   }
}

genKeyPair();
