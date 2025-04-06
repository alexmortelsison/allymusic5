import Image from "next/image";
import Socials from "./Socials";

export default function AboutUs() {
  return (
    <div className="z-10 tracking-tighter flex justify-center text-center pt-8 h-[70vh]">
      <div className="">
        <div>
          <Image
            src={"/bg.png"}
            alt="background"
            fill
            quality={80}
            loading="eager"
            className="object-cover -z-50 brightness-50 h-[80vh]"
          />
        </div>
        <div>
          <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
            <Image
              src={"/logo.png"}
              alt="background"
              width={200}
              height={200}
              quality={80}
              loading="eager"
              className="object-cover -z-50"
            />
            <p className="w-2/3 text-xl leading-10">
              As a leading music production company, Ally Music is dedicated to
              bringing talented artists from around the world to showcase their
              unique music and performances. Our mission is to bridge cultures,
              expand horizons, and provide an unforgettable musical experience
              for audiences everywhere. In addition to our music production
              expertise, Ally Music also operates a film production division,
              capturing the energy and emotion of live performances and
              behind-the-scenes moments. Our vision is to not only create
              spectacular concert events but also to immortalize these moments
              on film for future generations to enjoy. Whether it&apos;s
              discovering emerging talent or producing world-class concerts,
              Ally Music is committed to elevating the music industry, creating
              a platform for artists to thrive, and delivering exceptional
              experiences for fans. Join us on this exciting journey as we
              continue to bring the best in music to life.
            </p>
            <div>
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
