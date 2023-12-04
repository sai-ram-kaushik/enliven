"use client";

import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"

export default function Navbar() {

    const { data: session } = useSession();

    const [providers, setProviders] = useState(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }
        setUpProviders();
    }, []);

    return (
        <nav className="flex justify-between items-center pt-3 w-full mb-16">
            <Link href={"/"} className="font-bold text-2xl">
                <p className="green_gradient">Enliven</p>
            </Link>

            {/* nav for desktop  */}
            <div className="sm:flex hidden">
                {
                    session?.user
                        ?
                        (
                            <div className="flex gap-3 md:gap-10 items-center">
                                <Link href={"/chat"} className="">
                                    Chat
                                </Link>
                                <Link href={"/consult"} className="">
                                    Consult Psychologist
                                </Link>
                                <Button className="" type="button" onClick={signOut}>
                                    Sign Out
                                </Button>
                                <Link href={"/profile"}>
                                    <Image src={session.user.image} width={37} height={37} className="rounded-full" alt="profile" />
                                </Link>
                            </div>
                        )
                        :
                        <>
                            {
                                providers &&
                                Object.values(providers).map((provider) => (
                                    <Button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="">
                                        Sign In
                                    </Button>
                                ))
                            }
                        </>
                }
            </div>

            {/* nav for mobile  */}
            <div className="sm:hidden flex relative">
                {
                    session?.user
                        ?
                        (
                            <div className="flex">
                                <Image src={session?.user.image} width={37} height={37} className="rounded-full" alt="profile" onClick={() => setToggle((prev) => !prev)} />
                                {
                                    toggle && (
                                        <div className="absolute right-0 top-full mt-3 w-full p-5 rounded-lg bg-white min-w-[210px] flex flex-col gap-2 justify-end text-center border items-center">
                                            <Button variant="outline" className="mt-5 w-full">
                                                <Link href={"/profile"} className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium " onClick={() => setToggle(false)}>
                                                    My Profile
                                                </Link>
                                            </Button>
                                            <Button variant="outline" className="mt-5 w-full">
                                                <Link href={"/consult"} className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium " onClick={() => setToggle(false)}>
                                                    Consult Psychologist
                                                </Link>
                                            </Button>
                                            <Button variant="outline" className="mt-5 w-full">
                                                <Link href={"/chat"} className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium " onClick={() => setToggle(false)}>
                                                    Chat
                                                </Link>
                                            </Button>
                                            <Button onClick={() => {
                                                setToggle(false);
                                                signOut();
                                            }} className="mt-5 w-full">
                                                Sign Out
                                            </Button>
                                        </div>
                                    )
                                }
                            </div>
                        )
                        :
                        <>
                            {
                                providers &&
                                Object.values(providers).map((provider) => (
                                    <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black-btn">
                                        Sign In
                                    </button>
                                ))
                            }
                        </>
                }
            </div>
        </nav>
    )
}