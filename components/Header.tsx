import Link from 'next/link'
import { UserCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">AI Career Advisor</Link>
        <div className="flex items-center space-x-4">
          <Link href="/profile">
            <Button variant="ghost" className="text-gray-600 hover:text-blue-600 transition-colors">
              <UserCircle className="h-5 w-5 mr-2" />
              Profile
            </Button>
          </Link>
          {/*<Link href="/auth">*/}
          {/*  *<Button variant="outline">Login / Sign Up</Button>*!/}
          {/*</Link>*/}
        </div>
      </div>
    </header>
  )
}

