import express, { Application } from "express";
import cors from "cors";

import pagersRoutes from "../routes/pagers.routes";


class Server {
    
    private app: Application;
    private port: String;
    private paths = {
        pagers: '/api/pagers'
    }
    
    constructor() {
        this.app  = express();
        this.port = process.env.PORT || '8000';
        
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.paths.pagers, pagersRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server started at port:', this.port);
        });
    }

}

export default Server;