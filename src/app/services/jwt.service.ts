import jwt from 'jwt-simple';
import moment from 'moment';

export class JwtService {
    private _secret: string;

    constructor() {
        this._secret = 'Just think of tacos as a gold mine.';
    }

    createToken(user: any) {
        const payload = {
            sub: user._id,
            name: user.name,
            surname: user.surname,
            email: user.email,
            role: user.role,
            iat: moment().unix(),
            exp: moment()
                .add(30, 'days')
                .unix(),
        };

        return jwt.encode(payload, this._secret);
    }
}
