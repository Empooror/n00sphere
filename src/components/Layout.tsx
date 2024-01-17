


  /**
 * v0 by Vercel.
 * @see https://v0.dev/t/lyAsRZakjbg
 */
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div className="grid h-screen grid-cols-[80px_1fr_240px]">
      <nav className="bg-gray-800 text-gray-300 py-2 px-4 space-y-4">
        <div className="flex items-center justify-center h-16">
          <HomeIcon className="h-6 w-6 text-white" />
        </div>
        <div className="flex items-center justify-center h-16">
          <ServerIcon className="h-6 w-6 text-white" />
        </div>
        <div className="flex items-center justify-center h-16">
          <MessageCircleIcon className="h-6 w-6 text-white" />
        </div>
        <div className="flex items-center justify-center h-16">
          <SignalIcon className="h-6 w-6 text-white" />
        </div>
      </nav>
      <main className="bg-gray-100 dark:bg-gray-900 flex flex-col">
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-800">
          <h1 className="text-lg font-semibold">General</h1>
          <Button size="sm" variant="outline">
            Join Voice
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="flex items-start space-x-2">
            <Avatar className="h-9 w-9">
              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
              <AvatarFallback>SH</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-sm font-medium">Shadcn</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Hello, world!</div>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <Avatar className="h-9 w-9">
              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
              <AvatarFallback>SH</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-sm font-medium">Shadcn</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">How's it going?</div>
            </div>
          </div>
        </div>
        <div className="h-20 px-4 py-2 border-t border-gray-200 dark:border-gray-800">
          <Input className="w-full" placeholder="Message #general" />
        </div>
      </main>
      <aside className="bg-gray-200 dark:bg-gray-800 p-4 space-y-4">
        <h2 className="text-lg font-semibold">Online — 2</h2>
        <div className="flex items-center space-x-2">
          <Avatar className="h-9 w-9">
            <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>
          <div className="text-sm font-medium">Shadcn</div>
        </div>
        <div className="flex items-center space-x-2">
          <Avatar className="h-9 w-9">
            <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>
          <div className="text-sm font-medium">Shadcn</div>
        </div>
      </aside>
    </div>
  )
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  )
}


function ServerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  )
}


function SignalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 4v16" />
    </svg>
  )
}

