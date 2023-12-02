import { FaUserDoctor, FaPeopleGroup, FaBook} from "react-icons/fa6";

export default function Home() {
  return (
    <section className="w-full flex justify-center flex-col items-center">
      <h1 className="text-center mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl">
        Where Every Child
        <br className="max-md:hidden" />
        <span className="green_gradient">Shines Bright</span>
      </h1>
      <p className="mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl font-normal  text-center">
        Cultivating resilient minds for a lifetime of happiness and nurturing mental health, one smile at a time
      </p>
      <div className="flex gap-10 my-10">
        <span className="flex flex-col items-center">
          <span><FaUserDoctor size={20} color="#8bc63f"/></span>
          <span className="font-semibold">Physical Counselling</span>
          <span className="text-sm text-gray-500">in a 6 mile raduis</span>
        </span>
        <span className="flex flex-col items-center">
          <span><FaPeopleGroup size={20} color="#8bc63f"/></span>
          <span className="font-semibold">Strong Community</span>
          <span className="text-sm text-gray-500">with 24/7 support</span>
        </span>
        <span className="flex flex-col items-center">
          <span><FaBook size={20} color="#8bc63f"/></span>
          <span className="font-semibold">Studying Modules</span>
          <span className="text-sm text-gray-500">for absolutely free</span>
        </span>
      </div>
    </section>
  )
}
// Physical Counselling

// in a 6 mile radius

// Strong community

// 24/7 support

// Studying Modules

// 0.00 ₹