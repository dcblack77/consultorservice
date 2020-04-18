const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
	host: '192.168.1.16',
	user: 'root',
	password: '10043829',
	database: 'admincrc001',
	port: 3306
})

app.post('/consulta', (req, res) => {
	const consult = req.body.consult;
	db.query(consult, (err, articulo) => {
		if (err) res.json({ok:false, err});
		res.json({
			ok: true,
			articulo
		});
	});
});


app.listen(3000, ()=>{
	console.log('Server listening in port 3000');
})
