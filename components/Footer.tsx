export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} AI Career Advisor. All rights reserved.
      </div>
    </footer>
  )
}

