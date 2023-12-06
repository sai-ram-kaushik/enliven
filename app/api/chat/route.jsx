import { send } from "@/utils/getMessage";

export const POST = async(request) => {
    const {prompt} = await request.json();
    if(!prompt) return new Response("Please enter a prompt!", {status: 400});

    try {
        const response = await send(prompt);

        return new Response(JSON.stringify(response), {status: 200});
    } catch (error) {
        return new Response("Internal Server Error", {status: 500});
    }
}