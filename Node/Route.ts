import fs from 'fs';
import path from 'path';
import http from 'http';

export default function Routes(req:http.IncomingMessage, res:http.ServerResponse){

    const dash: string = path.join(process.cwd(), 'Dashboard.html');
    const adc: string = path.join(process.cwd(), 'AddCustomer.html');

    if (req.url === "/") {
        res.setHeader('Content-Type', 'text/html');
        fs.readFile(dash, (err, data) => {
            if (err) {
                res.write("INTERNAL SERVER ERROR");
                res.end();
            } else {
                res.end(data);
            }
        });
    } else if (req.url==='/add' && req.method==='POST') {
        res.setHeader('Content-Type', 'text/html');
        fs.readFile(adc, (err, data) => {
            if (err) {
                res.write("INTERNAL SERVER ERROR");
                res.end();
            } else {
                const body: Buffer[]=[];
                req.on('data',(data)=>{
                    body.push(data)
                });
                req.on('end',()=>{
                    const parsedBody = Buffer.concat(body).toString();
                    const itemName = parsedBody.split('=')[1];
                    fs.writeFile('items.txt',itemName,(err)=>{
                        res.write("Items List")
                        res.end();
                    });
                });
            }
        });
    } else {
        res.end('404 Not Found');
    }
}
