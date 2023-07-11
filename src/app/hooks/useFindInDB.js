import { client, connectToDatabase } from './useConectDB';


export const useFindInDB = (method, searchedCriters) => {
	const reviesCollection = client.db('vlad').collection('cervac') // cream referinta la baza de date dorita daca ea nu va exista va fi creata//
	console.log(searchedCriters);
	const main = async () => {
	  try {
		await connectToDatabase();
		searchedCriters = {typeOfPhone: 'smart'}
		// TODO: Run the method on the accounts collection and assign it to a variable,`result` 💡
		let result =  reviesCollection.find(searchedCriters);
		await result.forEach((doc) => console.log(doc))
	} catch (err) {
		console.error(`Error inserting document: ${err}`)
	  } finally {
		await client.close()
	  }
	}
	main()
}