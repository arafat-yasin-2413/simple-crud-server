const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();

const cors = require("cors");
const port = process.env.PORT || 3000;

// middleWare
app.use(cors());
app.use(express.json());

// user : simpleDBUser
// pass : EBPdO9u1L6baiPNy

const uri =
	"mongodb+srv://simpleDBUser:EBPdO9u1L6baiPNy@cluster0.j4wv0oh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

async function run() {
	try {
		// const simple_crud_DB = client.db("simple_crud_DB");
		// const usersCollection = simple_crud_DB.collection("usersCollection");

        // app.get('/',async(req,res)=>{
        //     const result = await usersCollection.find({}).toArray();
        //     res.send(result);
        // })
		// Connect the client to the server	(optional starting in v4.7)
		console.log("try block a dhuksi");
		await client.connect();
		console.log("connection done");



        const database = client.db('users');
        const usersCollection = database.collection('users')

        // data post korar jonno api create kori
        app.post('/users', async (req, res)=>{
            console.log('data in the server: ', req.body);
            const newUser = req.body;
            const result = await usersCollection.insertOne(newUser)
            res.send(result);
        })
		
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        // Send a ping to confirm a successful connection
		await client.db("admin").command({ ping: 1 });
		console.log(
			"Pinged your deployment. You successfully connected to MongoDB!"
		);
	} finally {
	}
}

run().catch(console.dir);






app.get("/", (req, res) => {
	res.send("simple crud server is running");
});

app.listen(port, () => {
	console.log(`Simple CRUD SERVER Running on : ${port}`);
});
