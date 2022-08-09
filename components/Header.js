import Link from "next/link"
import { useRouter } from "next/router"
import User from "./User"

const Header = () => {
  const router = useRouter()
  return (
    <header className="flex justify-between p-5 text-sm text-gray-700 select-none">
      <div className="flex space-x-4 items-center">
        <Link className="link" href="https://about.google">
          About
        </Link>
        <Link className="link" href="https://store.google.com">
          Store
        </Link>
      </div>
      <div className="flex space-x-4 items-center">
        <Link className="link" href="https://mail.google.com">
          Gmail
        </Link>
        <p
          className="link"
          onClick={() => {
            router.push(
              `/search?terms=${router.query.terms || "google"}&searchType=image`
            )
          }}
        >
          Images
        </p>
        <User />
      </div>
    </header>
  )
}

export default Header
