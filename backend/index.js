const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try { 
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "d0af8a11-db92-4e21-9506-b1211f1e68a9" } }
        );
    return res.status(r.status).json(r.data);
} catch (e) { 
    return res.status(e.response.status).json(e.response.data);
} 
return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);