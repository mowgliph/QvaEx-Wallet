import express from 'express'; 

class Server {
    private app: express.Application;
    private port: string | undefined; 

    constructor () {
        this.app = express();
        this.port = process.env.PORT;
        this.lisen();
    }

    lisen() {
        this.app.listen(this.port,() => {
            console.log('QvaEx running on ' + this.port);
        })
    }
}

export default Server;