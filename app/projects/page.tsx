import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, ExternalLink, MapPin } from 'lucide-react'
import PageHeader from '@/components/global/PageHeader'
import commercial from '@/public/images/projects/commercial.jpg'
import residential from '@/public/images/projects/residential.jpg'
import industrial from '@/public/images/projects/industrial.jpg'

const projects = [
  {
    id: 1,
    title: 'Pretoria Corporate Complex',
    category: 'Commercial',
    location: 'Pretoria, Gauteng',
    duration: '18 months',
    image: commercial,
    description:
      'Modern 12-story office complex featuring sustainable design and state-of-the-art facilities.',
    status: 'Completed',
  },
  {
    id: 2,
    title: 'Springbok Mining Facility',
    category: 'Industrial',
    location: 'Springbok, Northern Cape',
    duration: '24 months',
    image: industrial,
    description:
      'Large-scale mining facility with processing plants and administrative buildings.',
    status: 'In Progress',
  },
  {
    id: 3,
    title: 'Residential Estate Development',
    category: 'Residential',
    location: 'Centurion, Gauteng',
    duration: '36 months',
    image: residential,
    description:
      'Luxury residential estate with 200+ homes, parks, and community facilities.',
    status: 'Planning',
  },
]

export default function Projects() {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <PageHeader
        title='Projects'
        subtitle='Completed, pending, and in progress projects'
        image='/images/contact.jpg'
      />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='text-center mb-16'>
          <div className='flex justify-center items-center mb-4'>
            <div className='w-12 h-1 bg-blue-600 mr-4'></div>
            <span className='text-blue-600 font-bold text-sm tracking-wider uppercase'>
              Our Projects
            </span>
            <div className='w-12 h-1 bg-blue-600 ml-4'></div>
          </div>
          <p className='text-gray-700 text-lg max-w-3xl mx-auto font-medium'>
            Discover our portfolio of successful projects across South Africa,
            showcasing our commitment to excellence and innovation in
            construction.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          {projects.map((project) => (
            <Card
              key={project.id}
              className='group bg-white border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300'
            >
              <div className='relative overflow-hidden -top-6'>
                <Image
                  src={project.image}
                  alt={project.title}
                  className='w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute top-4 left-4'>
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
                <div className='absolute top-4 right-4'>
                  <span className='px-3 py-1 bg-white/90 text-foreground rounded-full shadow-sm text-xs font-medium'>
                    {project.category}
                  </span>
                </div>
              </div>

              <CardContent className='p-6 -mt-10'>
                <h3 className='text-xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors'>
                  {project.title}
                </h3>
                <p className='text-muted-foreground mb-4 leading-relaxed'>
                  {project.description}
                </p>

                <div className='space-y-2 mb-6'>
                  <div className='flex items-center text-sm text-muted-foreground'>
                    <MapPin className='h-4 w-4 mr-2 text-blue-600' />
                    {project.location}
                  </div>
                  <div className='flex items-center text-sm text-muted-foreground'>
                    <Calendar className='h-4 w-4 mr-2 text-blue-600' />
                    {project.duration}
                  </div>
                </div>

                <Button className='w-full group hover:bg-blue-600 border border-blue-600 text-black hover:text-white transition-colors'>
                  View Details
                  <ExternalLink className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
