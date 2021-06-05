import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const Influx = require('influx');
  const influx = new Influx.InfluxDB({
    host: '161.97.179.79',
    port: 8086,
    database: 'waterbox',
    schema: [
      {
        measurement: 'flow_sensor',
        fields: {
          debit: Influx.FieldType.INTEGER,
          waterbox_id: Influx.FieldType.STRING,
        },
        tags: ['host'],
      },
    ],
  });

  influx
    .query(
      `
     select * from flow_sensor
   `
    )
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.stack);
    });

  res
    .status(200)
    .json({ status: 'Success', message: 'Successfully Get Debit' });
};
