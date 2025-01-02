/* import mongoose from 'mongoose';
import { MONGODB_URI } from './config.js';


export async function ConnectDB() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(MONGODB_URI)
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
*/