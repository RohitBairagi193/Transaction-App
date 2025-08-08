
const mysql = require("mysql2/promise"); रें


const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 0
});


module.exports = async (req, res) => {
   
    if (req.method !== "GET") {
        res.status(405).json({ message: "Method Not Allowed" });
        return;
    }

    try {
        const [rows] = await pool.query("SELECT * FROM your_table");
        res.status(200).json(rows);
    } catch (err) {
        console.error("Error executing query:", err);
        res.status(500).json({ error: "Failed to fetch data from the database." });
    }
};