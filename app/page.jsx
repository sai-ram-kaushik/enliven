"use client";

import HeroPointers from "@/components/HeroPointers";
import { Button } from "@/components/ui/button";
import { getProviders, signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {

  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    }
    setUpProviders();
  }, []);


  return (
    <section className="w-full flex justify-center flex-col items-center">
      <h1 className="text-center lg:mt-10 mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl">
        Where Every Child
        <br className="max-md:hidden" />
        <span className="green_gradient"> Shines Bright</span>
      </h1>
      <p className="mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl font-normal  text-center">
        Cultivating resilient minds for a lifetime of happiness and nurturing mental health, one smile at a time
      </p>

      {
        session?.user
          ?
          <div className="flex gap-7 lg:my-20 my-10 items-center lg:flex-row flex-col">
            <Button>
              <Link href="/consult">Consult A Psychologist</Link>
            </Button>
            <Button variant="outline">
            <Link href="/modules">Explore Modules</Link>
            </Button>
          </div>
          :
          <>
            {
              providers &&
              Object.values(providers).map((provider) => (
                <Button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="lg:my-20 my-10">
                  Sign In
                </Button>
              ))
            }
          </>
      }

      <HeroPointers />
    </section>
  )
}