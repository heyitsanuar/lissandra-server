import { DB_CONNECT_STRING } from '../config/database.config';
import mongoose from 'mongoose';
import { App } from '../../app';

const PORT = process.env.PORT || 5000;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const connectToDatabase = async (): Promise<any> => {
    try {
        await mongoose.connect(DB_CONNECT_STRING, { useNewUrlParser: true });
        App.listen(PORT, (): void => console.log('Server running on port ' + PORT));
    } catch (error) {
        console.log(error);
    }
};

connectToDatabase();
