
import express from 'express';
import rUser from '../routers/users.routers';
import rHome from '../routers/home.routers';

class Server {
    private app: express.Application;
    private port: string | undefined; 

    constructor () {
        this.app = express();
        this.port = process.env.PORT || '8443';
        this.lisen();
        this.midlewares();
        this.routes();
    }

    lisen() {
        this.app.listen(this.port,() => {
            console.log('QvaEx running on ' + this.port);
        })
    }

    routes(){
        this.app.use('/api/home', rHome);
        this.app.use('/api/users', rUser);
    }

    midlewares(){
        this.app.use(express.json());
    }
}

export default Server;
