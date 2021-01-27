import Server from './server';

const port: number = parseInt(process.env.PORT as string) || 5001;

const server = new Server({ port });

server.init();
server.listen(() => console.log(`Server is running at http://localhost:${port}`));
