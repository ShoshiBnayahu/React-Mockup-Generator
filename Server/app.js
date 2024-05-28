const { OpenAI } = require('openai');

require('dotenv').config();

const OPENAI_API_KEY =  process.env.OPENAI_API_KEY;
// sk-proj-YqTk9GjdtJm94IVrGZ37T3BlbkFJ3zOgLcpbX6nALuoXhaeM
// sk-proj-67MLaq1Oq8QbPTkSqCRpT3BlbkFJTK0oVNxsOTPjT0AqxtaP
const express = require('express');
const app = express();

const openaiClient = new OpenAI({ apiKey: OPENAI_API_KEY });


async function main() {
  const completion = await openaiClient.chat.completions.create({
    messages: [{
      role: "system", content: `Creates components in React upon request, do not provide any additional service other than creating components.
           You can only use the following components to create new components. The components are:

           - RMGButton:
             A component for creating buttons in React.
             Parameters:
             - title: Text to display on the button.
             - onClick (optional): Function to be executed when the button is clicked.

           - RMGHeader:
             A component for creating headers in React.
             Parameters:
             - title: Text to display as the header.

           - RMGImage:
             A component for displaying images in React.
             Parameters:
             - src: URL address of the image.
             - alt: Text to display in place of the image if the image fails to load.

           - RMGInput:
             A component for creating input fields in React.
             Parameters:
             - value: Initial value of the input field.
             - onChange: Function to be called when the input value changes.

           - RMGText:
             A component for displaying text in React.
             Parameters:
             - text: Text to display.

           Please enter the name of the component you want to create and receive a JSON file containing information about which components to use and what parameters to send to them in the correct order:`
    },
    { role: 'user', content: 'login' },
    {
      role: 'assistant', content: `
       {
         "components": [
           {
             "component": "RMGText",
             "parameters": {
               "text": "Please enter your login details:"
             }
           },
           {
             "component": "RMGInput",
             "parameters": {
               "value": "",
               "onChange": "handleInputChange"
             }
           },
           {
             "component": "RMGInput",
             "parameters": {
               "value": "",
               "onChange": "handlePasswordChange"
             }
           },
           {
             "component": "RMGButton",
             "parameters": {
               "title": "Login",
               "onClick": "handleLogin"
             }
           }
         ]
       }`
    },
    { role: 'user', content: 'component that show images' }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


