import { heroPointerItems } from "@/utils/constants/heroPointerItems";

export default function HeroPointers() {
    return (
        <div className="flex gap-10">
            {
                heroPointerItems.map((item) => (
                    <span className="flex flex-col items-center text-center" key={item.title}>
                        <span>{item.icon}</span>
                        <span className="font-semibold">{item.title}</span>
                        <span className="text-sm text-gray-500">{item.subtitle}</span>
                    </span>
                ))
            }
        </div>
    )
}