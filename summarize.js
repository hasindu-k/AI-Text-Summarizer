const axios = require('axios');
// This is the function where the call to the API is made. Returns the summarized text as a string.

async function summarizeText(text) {
  //INPUT CODE SNIPPET FROM POSTMAN 
  let data = JSON.stringify({
    "inputs": text,
    "parameters": {
      "max_length": 100,
      "min_length": 30
    }
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+process.env['ACCESS_TOKEN']
    },
    data: data
  };

  
  try {
    const response = await axios.request(config);
    // console.log(JSON.stringify(response.data));
    return response.data[0].summary_text;
  }
  catch (error) {
    console.log(error);
  }
  




}

// Allows for summarizeText() to be called outside of this file

module.exports = summarizeText;