import { client, connectToDatabase } from './useConectDB';

export const useDataBase = (dbName, colectionName, object) => {
	const reviesCollection = client.db(dbName).collection(colectionName) // cream referinta la baza de date dorita daca ea nu va exista va fi creata//
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

