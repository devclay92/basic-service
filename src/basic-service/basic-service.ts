import { ServiceConfig } from '../interfaces';
import { ServerApplication } from '../interfaces/server-application';
import { Server } from './server';

export class BasicService{

    private readonly serviceConfig?: ServiceConfig;
    protected readonly server: ServerApplication;

    public constructor(serviceConfig?: ServiceConfig) {
        if (serviceConfig){
            this.serviceConfig = serviceConfig;
        }

        this.server = Server.getInstance();

        if (this.serviceConfig?.swagger !== false){
            this.server.prepareSwagger(serviceConfig?.docsPath, serviceConfig?.swaggerLocation);
        }
    }

    public run(callback?: () => void): void {
        this.server.listen(this.serviceConfig?.port, callback);
    }

}