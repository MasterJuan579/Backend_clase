declare class Server {
    private app;
    private port;
    private env;
    constructor(appInit: {
        port: number;
        env: string;
        middlewares: any[];
        controllers: any[];
    });
    private initMiddlewares;
    private initControllers;
    private connecDB;
    init(): void;
}
export default Server;
//# sourceMappingURL=Server.d.ts.map