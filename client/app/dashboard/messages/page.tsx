"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Send, Phone, Video, MoreHorizontal, PaperclipIcon } from "lucide-react"

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState(0)
  const [message, setMessage] = useState("")

  const contacts = [
    {
      id: 0,
      name: "Emily Davis",
      status: "online",
      lastMessage: "Thanks for the information!",
      time: "10:30 AM",
      unread: 2,
    },
    {
      id: 1,
      name: "Michael Brown",
      status: "online",
      lastMessage: "When can we schedule a call?",
      time: "Yesterday",
      unread: 0,
    },
    {
      id: 2,
      name: "Jessica Wilson",
      status: "offline",
      lastMessage: "The product looks amazing!",
      time: "Yesterday",
      unread: 0,
    },
    {
      id: 3,
      name: "David Miller",
      status: "offline",
      lastMessage: "I'd like to place an order for...",
      time: "Mar 15",
      unread: 0,
    },
    {
      id: 4,
      name: "Sarah Johnson",
      status: "online",
      lastMessage: "Do you offer international shipping?",
      time: "Mar 14",
      unread: 0,
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "Emily Davis",
      content: "Hi there! I'm interested in your handcrafted jewelry collection.",
      time: "10:15 AM",
      isMe: false,
    },
    {
      id: 2,
      sender: "Me",
      content:
        "Hello Emily! Thank you for your interest. We have a wide range of handcrafted jewelry. Is there something specific you're looking for?",
      time: "10:18 AM",
      isMe: true,
    },
    {
      id: 3,
      sender: "Emily Davis",
      content: "I'm looking for a necklace for a special occasion. Do you have any recommendations?",
      time: "10:20 AM",
      isMe: false,
    },
    {
      id: 4,
      sender: "Me",
      content:
        "Our pendant necklaces are perfect for special occasions. They're made with sustainable materials and come in various designs. I can send you some photos if you'd like.",
      time: "10:25 AM",
      isMe: true,
    },
    {
      id: 5,
      sender: "Emily Davis",
      content: "That would be great! I'd love to see some options.",
      time: "10:26 AM",
      isMe: false,
    },
    {
      id: 6,
      sender: "Me",
      content:
        "Here are some of our most popular designs. All of these can be customized with different gemstones or metals.",
      time: "10:28 AM",
      isMe: true,
    },
    { id: 7, sender: "Emily Davis", content: "Thanks for the information!", time: "10:30 AM", isMe: false },
  ]

  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real app, this would send the message to the backend
      setMessage("")
    }
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex flex-col gap-2 mb-4">
        <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
        <p className="text-muted-foreground">Communicate with your customers and network.</p>
      </div>

      <div className="flex flex-1 overflow-hidden rounded-lg border">
        {/* Contacts sidebar */}
        <div className="w-80 border-r">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search messages..." className="w-full pl-8" />
            </div>
          </div>

          <div className="overflow-auto h-[calc(100vh-13rem)]">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-muted/50 ${
                  activeChat === contact.id ? "bg-muted" : ""
                }`}
                onClick={() => setActiveChat(contact.id)}
              >
                <div className="relative">
                  <Avatar>
                    <AvatarImage src="" alt={contact.name} />
                    <AvatarFallback>
                      {contact.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  {contact.status === "online" && (
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background"></span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-medium truncate">{contact.name}</h3>
                    <span className="text-xs text-muted-foreground">{contact.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{contact.lastMessage}</p>
                </div>
                {contact.unread > 0 && (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                    {contact.unread}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat area */}
        <div className="flex-1 flex flex-col">
          {/* Chat header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="" alt={contacts[activeChat].name} />
                <AvatarFallback>
                  {contacts[activeChat].name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">{contacts[activeChat].name}</h3>
                <p className="text-xs text-muted-foreground">
                  {contacts[activeChat].status === "online" ? "Online" : "Offline"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Video className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}>
                <div className={`flex gap-2 max-w-[80%] ${msg.isMe ? "flex-row-reverse" : ""}`}>
                  {!msg.isMe && (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="" alt={msg.sender} />
                      <AvatarFallback>
                        {msg.sender
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <div className={`rounded-lg p-3 ${msg.isMe ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                      <p className="text-sm">{msg.content}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{msg.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message input */}
          <div className="p-4 border-t">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <PaperclipIcon className="h-4 w-4" />
              </Button>
              <Input
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSendMessage()
                  }
                }}
              />
              <Button size="icon" onClick={handleSendMessage} disabled={!message.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

