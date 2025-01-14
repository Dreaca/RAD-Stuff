import express from "express";
import path from 'path';
const app = express();
const dash = path.join(process.cwd(), 'Dashboard.html');
const adc = path.join(process.cwd(), 'AddCustomer.html');
app.use('/add', (req, res, next) => {
    console.log(" Add middleware");
    res.send('');
    next();
});
app.use((req, res, next) => {
    console.log("Middleware 2");
});
app.listen(3000, () => {
    console.log("Server started on port 3000");
});
