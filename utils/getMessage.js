import OpenAI from "openai";

const client = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

const send = async (prompt) => {
    let message = "";
    const response = await client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ "role": "user", "content": `${prompt} and reply in a concise manner` }],
        stream: true
    })

    for await (const chunk of response) {
        message += chunk.choices[0]?.delta?.content || "";
    }

    return message;
}

module.exports = send;

