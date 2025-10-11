import PageHeader from '@/components/global/PageHeader'
import {
  Building2,
  Users,
  Wrench,
  Shield,
  Clock,
  Award,
  Hammer,
  Building,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import OurProcess from '@/components/sections/services/OurProcess'
import CTA from '@/components/global/CTA'

const services = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    description:
      'Complete commercial building construction services from planning to completion.',
    features: [
      'Office Buildings',
      'Retail Spaces',
      'Industrial Facilities',
      'Warehouses',
    ],
  },
  {
    icon: Building,
    title: 'Residential Construction',
    description:
      'Quality residential construction services for homes and housing developments.',
    features: [
      'Single Family Homes',
      'Multi-unit Developments',
      'Renovations',
      'Extensions',
    ],
  },
  {
    icon: Users,
    title: 'Project Management',
    description:
      'Expert project management ensuring timely delivery and budget compliance.',
    features: [
      'Planning & Scheduling',
      'Budget Management',
      'Quality Control',
      'Risk Management',
    ],
  },
  {
    icon: Wrench,
    title: 'Construction Consulting',
    description:
      'Professional consulting services for construction projects of all sizes.',
    features: [
      'Feasibility Studies',
      'Cost Estimation',
      'Technical Advisory',
      'Compliance Review',
    ],
  },
  {
    icon: Shield,
    title: 'Safety Management',
    description:
      'Comprehensive safety management programs to ensure zero-incident projects.',
    features: [
      'Safety Planning',
      'Risk Assessment',
      'Training Programs',
      'Compliance Monitoring',
    ],
  },
  {
    icon: Hammer,
    title: 'Renovation & Refurbishment',
    description:
      'Complete renovation and refurbishment services for existing structures.',
    features: [
      'Interior Renovations',
      'Structural Upgrades',
      'Modernization',
      'Restoration',
    ],
  },
]

export default function Services() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader
        title="Services"
        subtitle="Our range of construction services"
        image="https://ik.imagekit.io/e2pess7p4/Didee/contact.jpg?updatedAt=1760181727028?tr=w-1200,h-600,fo-auto"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="border border-gray-200 hover:shadow-xl transition-color duration-300 hover:border-blue-600"
                >
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      <OurProcess />
      <CTA />
    </div>
  )
}
