
var express = require('express')
const bodyParser = require('body-parser');
var sql = require('mssql/msnodesqlv8');
const cors = require('cors')

var app = express();
app.use('/images' , express.static('images'));
app.use(cors({ origin: 'http://localhost:4200' }))
app.use(bodyParser.json());


const dbConfig= {
 connectionString: 'Driver=SQL Server;Server=WSLKCMP2FTR1-06\\MSSQLSERVER01;Database=angularonlinedb;Trusted_Connection=true;'
  };

  const pool = new sql.ConnectionPool(dbConfig);// sqlconnection

app.get("/show", async function(req,res){
 const request = new sql.Request(pool);//creates new sqlconnection
    const result = await request.query('SELECT * FROM products');//send query to db 
    res.json(result.recordset); //read output of query in json format
});
app.post("/add",async function(req,res){
    const { uname,password,gender,DOB,email,nationality} = req.body;
    const request = new sql.Request(pool);
        await request.query(`INSERT INTO register  VALUES ('${uname}', '${password}','${gender}', '${DOB}','${email}','${nationality}')`);
        res.json({ message: 'new user created successfully' });

    });

 app.post("/login",async function(req,res){
      const {uname,pwd} = req.body;
      const request = new sql.Request(pool);
      const result =  await request.query(`select count(*) from register where uname = '${uname}' and pwd='${password}'`);
          res.json(result.recordset);
  
      });

pool.connect().then(() => {
         app.listen(3000, () => {
         console.log(`Server is ready to communicate`);
          });
        });
