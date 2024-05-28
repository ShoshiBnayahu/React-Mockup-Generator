const { OpenAI } = require('openai');

const OPENAI_API_KEY = 'sk-proj-67MLaq1Oq8QbPTkSqCRpT3BlbkFJTK0oVNxsOTPjT0AqxtaP';

const express = require('express');
const app = express();

const openaiClient  = new OpenAI({apiKey:OPENAI_API_KEY});


async function main() {
  const completion = await openaiClient.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." },
    { role: 'user', content: 'How can I assist you today?' }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


