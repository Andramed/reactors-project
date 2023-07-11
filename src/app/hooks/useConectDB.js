import { MongoClient } from 'mongodb'
import uri from '../../../atlas_uri';

export const client = new MongoClient(uri);

export  const connectToDatabase = async () => {
	try {
	  await client.connect()
	  console.log(`Connected to the ${dbName} database 🌍 \nFull connection string: ${uri}`)
	} catch (err) {
	  console.error(`Error connecting to the database: ${err}`)
	}
  }