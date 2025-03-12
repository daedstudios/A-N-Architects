import Image from "next/image";
import Link from "next/link";

const ProjectAndContact = () => (
    <>
        <div className="col-span-1 lg:col-span-2 text-3xl">
            PROJECT COMING UP?
        </div>
        <Link href='/contact' className="col-span-1 lg:col-span-2 text-3xl ">
            <p className="text-3xl flex items-center justify-start md:justify-end">
                CONTACT US
                <span className="w-6 h-6 relative ml-4">
                    <Image
                        fill
                        src='/images/arrow_outward.svg'
                        alt='arrow_outward'
                        className='object-cover'
                    />
                </span>
            </p>
        </Link>
    </>
);

export default ProjectAndContact;