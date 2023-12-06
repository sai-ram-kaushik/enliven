export default function PageUnderMaintainence({ pageName }) {
    return (
        <div className="text-center h-96 justify-center flex flex-col">
            <span className="text-5xl font-bold text-[#8bc63f]">{`:(`}</span>
            <p className="mt-5">
                This page is under construction! We are working hard to provide you with the {pageName} feature!
            </p>
        </div>
    )
}