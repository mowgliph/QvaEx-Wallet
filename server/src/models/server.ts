/* Imports Globales */ 
import express from 'express';

/* Importaciones de Rutas */
import rUser from '../routers/users.routers';
import rHome from '../routers/home.routers';
import rBalance from '../routers/balance.routers';
import rP2P from '../routers/p2p.routers';

/* Importaciones de BD */
import { Users } from './users';
import { p2p } from './p2p';

class Server {
    private app: express.Application;
    private port: string | undefined; 

    constructor () {
        this.app = express();
        this.port = process.env.PORT || '8443';
        this.lisen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    lisen() {
        this.app.listen(this.port,() => {
            console.log('QvaEx running on ' + this.port);
        })
    }

    routes(){
        this.app.use('/api/home', rHome);
        this.app.use('/api/users', rUser);
        this.app.use('/api/balance', rBalance);
        this.app.use('/api/p2p', rP2P)
    }

    midlewares(){
        this.app.use(express.json());
    }

    async dbConnect(){
        try {
            await Users.sync({
                alter: true
            });
            
            await p2p.sync({
                alter: true
            });
            
        } catch (error){
            console.error('No se puede conectar con la base de datos:', error);
        }
    }
}

export default Server;
