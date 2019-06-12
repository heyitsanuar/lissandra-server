import bcrypt from 'bcrypt';
import { UserModel } from './user.model';
import { IRequestResponse } from './../app/interfaces/request.interface';

export const saveUser = (user: any): Promise<IRequestResponse> => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(user.password, null, null, (error: Error, hash: string) => {
            if (error) return reject({ code: 500, message: 'Error when creating user password.' });

            let newUser = new UserModel(user);
            newUser.password = hash;

            newUser.save((error, savedUser) => {
                if (error) return reject({ code: 500, message: 'Error when creating user password.' });

                return resolve({ code: 200, data: savedUser });
            });
        });
    });
};

export const updateUser = (user: any): Promise<IRequestResponse> => {
    return new Promise((resolve, reject) => {
        UserModel.findOneAndUpdate({ email: user.email }, (error: any, updatedUser: any) => {
            if (error) return reject({ code: 500, message: 'Error when updating user.' });
            if (!updatedUser) return reject({ code: 404, message: 'User not found.' });

            return resolve({ code: 200, data: updatedUser });
        });
    });
};

export const getUser = ({ email }: any): Promise<IRequestResponse> => {
    return new Promise((resolve, reject) => {
        UserModel.findOne({ email }, (error, foundUser) => {
            if (error) return reject({ code: 500, message: 'Error when finding user.' });
            if (!foundUser) return resolve({ code: 200, message: 'User not found.' });

            return resolve({ code: 200, data: foundUser });
        });
    });
};

export const getUsers = (): Promise<IRequestResponse> => {
    return new Promise((resolve, reject) => {
        UserModel.find((error, foundUsers) => {
            if (error) return reject({ code: 500, message: 'Error when retrieving users.' });
            if (!foundUsers) return resolve({ code: 200, message: 'No users found' });

            return resolve({ code: 200, data: foundUsers });
        });
    });
};

export const hasMissingParams = ({ email, password, name, surname }: any) => {
    if (!email || !password || !name || !surname) throw { code: 200, message: 'Please fill in all the fields.' };

    return false;
};
