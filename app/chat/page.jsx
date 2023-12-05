"use client";

import { Button } from "@/components/ui/button";
import send from "@/utils/getMessage";
import { useEffect, useState } from "react";
import { LuSendHorizonal } from "react-icons/lu";


export default function page() {


    const [chat, setChat] = useState("");
    const [loading, setLoading] = useState(false);

    const [messages, setMessages] = useState(["How can I help you today?"]);

    const handleSend = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessages((prevMessages) => [...prevMessages, chat]);
        setChat("");
        const response = await send(chat);
        setMessages((prevMessages) => [...prevMessages, response]);
        setLoading(false);
        console.log(response);

    }


    return (
        <main className="w-full h-screen">

            <div className="overflow-y-auto p-2">
                <div className="flex flex-col">
                    {
                        messages.length > 0 && messages.map((msg, i) => (
                            <div className={`flex mb-2 ${i % 2 == 0 ? "justify-start" : "justify-end"}`} key={i}>
                                <div className={`rounded-lg p-2 text-white ${i % 2 == 1 ? "bg-[#8bc63f]" : "bg-gray-800"} max-w-xs self-start`}>
                                    <span>{msg}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


            {/* chat input  */}
            <form className="flex p-4 gap-5 items-center fixed bottom-5 left-0 w-full" onSubmit={handleSend}>
                <input type="text" placeholder="Talk to us..." className="w-full focus:outline-none border rounded-xl p-3" value={chat} onChange={(e) => setChat(e.target.value)} />
                <Button disabled={!chat || loading}><LuSendHorizonal color='#e4e7eb' /></Button>
            </form>

        </main>
    )
}