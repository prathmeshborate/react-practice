import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 5000;

app.get('/getFollowerCount', async (req, res) => {
    const userId = req.query.user_id;
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

    const url = `https://graph.instagram.com/${userId}?fields=followers_count&access_token=${accessToken}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching Instagram follower count' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
