import PageHeader from '@/components/global/PageHeader'
import CompletedProjects from '@/components/sections/projects/CompletedProjects'

export default function Projects() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader
        title="Projects"
        subtitle="Completed, pending, and in progress projects"
        image="https://ik.imagekit.io/e2pess7p4/Didee/contact.jpg?updatedAt=1760181727028?tr=w-1200,h-600,fo-auto"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-4">
            <div className="w-12 h-1 bg-blue-600 mr-4"></div>
            <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">
              Our Projects
            </span>
            <div className="w-12 h-1 bg-blue-600 ml-4"></div>
          </div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto font-medium">
            Discover our portfolio of successful projects across South Africa,
            showcasing our commitment to excellence and innovation in
            construction.
          </p>
        </div>

        <CompletedProjects />
      </div>
    </div>
  )
}
