import Image from 'next/image'

interface PageHeaderProps {
  title: string
  subtitle: string
  image: string
}

export default function PageHeader({
  title,
  subtitle,
  image,
}: PageHeaderProps) {
  return (
    <section className="relative py-56 bg-gradient-to-r from-blue-900 to-cyan-900">
      {image && (
        <div className="absolute bg-black inset-0 opacity-10">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight text-shadow-2xl">
            {title}
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed font-medium">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}
