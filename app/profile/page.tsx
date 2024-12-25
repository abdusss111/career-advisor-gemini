import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Profile",
  description: "User profile page for AI Career Advisor",
}

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
      <form className="space-y-4 max-w-md">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Your email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" placeholder="Tell us about yourself" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="career-goals">Career Goals</Label>
          <Textarea id="career-goals" placeholder="What are your career aspirations?" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="skills">Skills</Label>
          <Input id="skills" placeholder="Your key skills (comma-separated)" />
        </div>
        <Button type="submit">Save Changes</Button>
      </form>
      <div className="mt-8">
        <Link href="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </div>
    </div>
  )
}

