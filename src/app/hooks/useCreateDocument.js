import { MongoClient } from 'mongodb'
import uri from '../../../atlas_uri';


console.log(uri);

export const useDataBase = (dbName, colectionName, object) => {
	const client = new MongoClient(uri);
	const reviesCollection = client.db(dbName).collection(colectionName) // cream referinta la baza de date dorita daca ea nu va exista va fi creata//
	const connectToDatabase = async () => {
	  try {
		await client.connect()
		console.log(`Connected to the ${dbName} database 🌍 \nFull connection string: ${uri}`)
	  } catch (err) {
		console.error(`Error connecting to the database: ${err}`)
	  }
	}
	// cream documentul
	// const phone = {
	//   author: "John Doe",
	//   coment: "comentariu",
	//   rating: 4,
	//   typeOFDeliveri: ['fast', 'slow', 'medium fast']
	  
	// }
	
	console.log(object);
	// functia main care se conecteaza la baza de data+ insereaza documentul dorit noua//
	const main = async () => {
	  try {
		await connectToDatabase();
		// TODO: Run the method on the accounts collection and assign it to a variable,`result` 💡
		let result = await reviesCollection.insertOne(object)
		console.log(`Inserted document: ${result.insertedId}`);
	  } catch (err) {
		console.error(`Error inserting document: ${err}`)
	  } finally {
		await client.close()
	  }
	}
	main()
}

