import { MongoClient, ObjectId } from 'mongodb';
import modules from './modules.json' assert { type: 'json' }; // Ensure this is an array

(async () => {
  const client = new MongoClient('mongodb+srv://jinhe1248:supersecretpassword@cluster0.9poff.mongodb.net/Kanbas?retryWrites=true&w=majority&appName=Cluster0');
  try {
    await client.connect();
    const db = client.db('Kanbas');
    const modulesCollection = db.collection('modules');

    // Ensure modules is an array
    if (!Array.isArray(modules)) {
      throw new Error('modules.json does not contain an array');
    }

    // Convert course field to ObjectId
    modules.forEach((module) => {
      if (module.course) {
        module.course = new ObjectId(module.course); // Convert string to ObjectId
      }
    });

    // Insert into the database
    await modulesCollection.deleteMany({});
    await modulesCollection.insertMany(modules);

    console.log('Modules updated successfully!');
  } catch (error) {
    console.error('Error seeding modules:', error);
  } finally {
    await client.close();
  }
})();
