import Image from "next/image";

export default function AllConcertsPage() {
  return (
    <div>
      <div>
        <Image
          src={"/tj1.png"}
          alt="tj1"
          width={200}
          height={200}
          className="object-cover"
        />
      </div>
    </div>
  );
}
