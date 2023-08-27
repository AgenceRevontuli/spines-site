import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <div className="flex justify-between items-center fixed w-full px-32 py-8">
        <div>
            <Image src="./spines-logo-marketing-acquisition.svg" width={100} height={100} alt="Logo Spines" />
        </div>
        <nav>
            <ul className="flex gap-8 text-white text-l font-bold">
                <li><Link href="">Nos projets</Link></li>
                <li><Link href="">Nos prestations</Link></li>
                <li><Link href="">À propos</Link></li>
                <li><Link href="">Nous contacter</Link></li>
            </ul>
        </nav>
    </div>
  )
}
