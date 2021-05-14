import bodyParser from 'body-parser';
import cors from 'cors';

export default (app) => {
   app.get('/status', (req, res) => {
      res.status(200).end();
   });
   app.head('/status', (req, res) => {
      res.status(200).end();
   });

   app.use(cors())
   app.use(bodyParser.json)
};
