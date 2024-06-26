import DBClient from '../utils/db';
import RedisClient from '../utils/redis';

class AppController {
    static getStatus(req, res) {
        const data = {
            db: DBClient.isAlive(),
            redis: RedisClient.isAlive(),
        };
        return res.status(200).send(data);
    }

    static async getStats(req, res) {
        const data = {
            users: await DBClient.nbUsers(),
            files: await DBClient.nbFiles(),
        };
        return res.status(200).send(data);
    }
}

module.exports = AppController;