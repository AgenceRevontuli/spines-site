import Image from "next/image"

export default function Clients() {
  return (
    <div className="flex gap-8 items-cente mt-8">   
      <Image src="./logo-esa.svg" height={100} width={100} alt="Logo Esa" />
      <Image src="./logo-google.svg" height={100} width={100} alt="Logo Google" />
      <Image src="./logo-ritmo.svg" height={100} width={100} alt="Logo Ritmo" />
      <Image src="./logo-psynyou.svg" height={100} width={100} alt="Logo Psynyou" />
    </div>
  )
}
