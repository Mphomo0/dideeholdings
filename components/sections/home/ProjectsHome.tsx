import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import commercial from '@/public/images/projects/commercial.jpg'
import residential from '@/public/images/projects/residential.jpg'
import industrial from '@/public/images/projects/industrial.jpg'
import { Calendar, ExternalLink, MapPin } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'Gamsberg: Magnette Recovery - Civil Works',
    category: 'Commercial',
    location: 'Springbok, Northern Cape',
    completionDate: '2019-10-22',
    image:
      'https://ik.imagekit.io/e2pess7p4/Didee/projects/commercial.jpg?updatedAt=1760181726538?tr=w-800,h-600,fo-auto',
    status: 'Completed',
  },
  {
    id: 2,
    title: 'Skorpion: Mining Phase 2 _ Bulk Water Reticulation',
    category: 'Industrial',
    location: 'Northern Cape',
    completionDate: '21-Mar-23',
    image:
      'https://ik.imagekit.io/e2pess7p4/Didee/projects/industrial.jpg?updatedAt=1760181726008?tr=w-800,h-600,fo-auto',
    status: 'In Progress',
  },
  {
    id: 3,
    title:
      'Randfontein: Construction of 204 Stand Alones, 84 BNG Walk-ups Units including Water, Sewer & Electrical Works',
    category: 'Residential',
    location: 'Randfontein, Gauteng',
    completionDate: '31-Mar-23',
    image:
      'https://ik.imagekit.io/e2pess7p4/Didee/projects/residential.jpg?updatedAt=1760181726515?tr=w-800,h-600,fo-auto',
    status: 'Completed',
  },
]

export default function ProjectsHome() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-4">
            <div className="w-12 h-1 bg-blue-600 mr-4"></div>
            <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">
              Our Projects
            </span>
            <div className="w-12 h-1 bg-blue-600 ml-4"></div>
          </div>
          <h2 className="text-5xl font-black text-gray-900 mb-4 leading-tight">
            Featured Projects
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto font-medium">
            Discover our portfolio of successful projects across South Africa,
            showcasing our commitment to excellence and innovation in
            construction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group bg-white border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden -top-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  unoptimized
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed'
                        ? 'bg-green-500/90 text-white'
                        : project.status === 'In Progress'
                        ? 'bg-yellow-500/90 text-white'
                        : 'bg-blue-500/90 text-white'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 text-foreground rounded-full shadow-sm text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6 -mt-10">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {project.title}
                </h3>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                    {project.completionDate}
                  </div>
                </div>

                <Button className="w-full group hover:bg-blue-600 border border-blue-600 text-black hover:text-white transition-colors">
                  <Link href="/projects">View Details</Link>
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="w-full md:w-1/3 bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-6"
          >
            <Link href="/projects">VIEW ALL PROJECTS</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
