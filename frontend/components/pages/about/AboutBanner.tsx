import Image from 'next/image'
import { Breadcrumb } from '@/components/navigation/breadcrumb'

export default function AboutBanner() {
    return (
        <section className="relative bg-secondary min-h-[70vh] w-full overflow-hidden flex items-end px-24 pb-24">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Image src={"https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770178795/joseph-paul-jOi8CLM2aaI-unsplash_hytc3b.jpg"} alt="About Banner" fill className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/70 z-10" />
            </div>
            <div className="container relative z-20 flex flex-col  gap-4">
                <Breadcrumb className="mb-2" items={[{ label: 'Home', href: '/' }, { label: 'About Us', href: '/about' }]} />
                <div className="max-w-4xl">
                    <h1 className="text-4xl uppercase md:text-7xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
                        Grow Trucking
                    </h1>
                    <p className="text-basexl text-white font-primary--400 tracking-wide">
                        Reliable Dispatch & Freight Solutions
                        Powering Independent Truckers Nationwide
                    </p>
                </div>
            </div>
        </section>
    )
}
