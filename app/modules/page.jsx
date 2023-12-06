import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getPostMetadata } from "@/utils/getPostMetadata";
import Link from "next/link";

export default function page() {

    const moduleMetadata = getPostMetadata();

    return (
        <main className="flex flex-col justify-center items-center">
            <h1 className="text-center lg:mt-10 mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-5xl">Explore Fun
                <span className="green_gradient"> Learning Modules</span>
            </h1>
            <p className="my-5 text-lg text-gray-600 sm:text-xl max-w-2xl font-normal  text-center ">
                Studying modules to bring children closer in a happy family.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
                {
                    moduleMetadata.map((module) => (
                        <Link href={`/modules/${module.slug}`} key={module.slug}>
                            <Card className="lg:w-[350px] w-[300px] p-7 rounded-xl shadow-md hover:border-[#8bc63f] border h-full">
                                <CardHeader>
                                    <CardTitle className="capitalize">{module.title}</CardTitle>
                                </CardHeader>
                                <hr className="mb-5" />
                                <CardContent className="text-gray-600">
                                    {module.subtitle}
                                </CardContent>
                                <CardFooter className="text-[#8bc63f]">
                                    Read More &rarr;
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
            </div>
        </main>
    )
}