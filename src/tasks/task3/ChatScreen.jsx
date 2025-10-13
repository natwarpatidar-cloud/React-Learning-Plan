import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { useOnlineStatus } from "./useOnlineStatus"

export const ChatScreen = () => {

    const isOnline = useOnlineStatus();

    return (
        <div className="w-full h-[100vh] flex">
            {/* Sidebar */}
            <div className="sidebar h-full w-2/6 border-2 border-black bg-black/20"></div>

            {/* Chat screen */}
            <div className="chat-screen flex flex-col w-full">
                {/* Header */}
                <div className="header w-full h-[100px] border-2 border-black flex gap-2 items-center px-4">
                    <div className="h-14 w-14 border-2 border-black rounded-full"></div>
                    <div>{isOnline? "Online": "Offline"}</div>
                </div>

                {/* Message windoe */}
                <div className="message-screen flex-1">

                </div>

                {/* Input box */}
                <div className="input w-full p-10 border-2 border-black">
                    <div className="w-full flex justify-between items-center gap-2">
                        <input type="text" placeholder="Type a message..." className="outline-none w-full bg-black/20 rounded-4xl p-4" />
                        <Button size="icon"><ArrowUp /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}