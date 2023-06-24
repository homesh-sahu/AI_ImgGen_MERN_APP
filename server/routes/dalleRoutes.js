import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();        //To export multiple routes under a single variable

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


router.route('/')
.get( (req, res)=>{
    res.send('Hello from OpenAI');
});

//Route for generating image using openAI's API
router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        const aiResponse = await openai.createImage({       //Axios response
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        });

        const image = aiResponse.data.data[0].b64_json;

        res.status(200).json({ photo: image });
    } catch (error) {
        console.log(error);
        res.status(500).send(error?.response.data.error.message);    //To send error for an axios response   
    }
});

export default router;