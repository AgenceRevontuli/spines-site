import Link from "next/link"

export default function Header() {
  return (
    <div className="flex justify-between px-32 py-8">
        <div>
            Logo
        </div>
        <nav>
            <ul className="flex gap-8">
                <li><Link href="">Nos projets</Link></li>
                <li><Link href="">Nos prestations</Link></li>
                <li><Link href="">À propos</Link></li>
                <li><Link href="">Nous contacter</Link></li>
            </ul>
        </nav>
    </div>
  )
}
