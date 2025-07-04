import Image, { StaticImageData } from "next/image"

const ProfileAccount = ({ img, personName, personDescription }: { img: StaticImageData, personName: string, personDescription: string }) => {
    return (
        <div className="center-flex m-2">
            <Image src={img.src} height={45} width={45} alt="s" className="rounded-[50%]" />
            <div className="column !gap-0">
                <h3 className="text-lg font-semibold"> {personName} </h3>
                <p className="paragraph special font-semibold"> {personDescription} </p>
            </div>
        </div>
    )
}

export default ProfileAccount