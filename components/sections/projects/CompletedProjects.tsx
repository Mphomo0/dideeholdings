'use client'

import projects from '../../../lib/projects.json'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function CompletedProjects() {
  return (
    <div className="w-full">
      {/* Desktop Table View */}
      <div className="hidden md:block">
        <Table>
          <TableCaption>A list of all our projects.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Project Name</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Completed</TableHead>
              <TableHead>Contact Person</TableHead>
              <TableHead>Designation</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell>{project.id}</TableCell>
                <TableCell>
                  <span className="line-clamp-4 whitespace-normal">
                    {project.projectName}
                  </span>
                </TableCell>
                <TableCell>{project.client}</TableCell>
                <TableCell>{project.completed}</TableCell>
                <TableCell>{project.contactPerson}</TableCell>
                <TableCell>{project.designation}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Card View */}
      <div className="block md:hidden space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-md p-4 shadow-sm bg-white"
          >
            <div className="mb-2">
              <span className="font-semibold">Project Name:</span>{' '}
              <span className="line-clamp-4 whitespace-normal">
                {project.projectName}
              </span>
            </div>
            <div className="mb-2">
              <span className="font-semibold">Client:</span> {project.client}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Completed:</span>{' '}
              {project.completed}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Contact Person:</span>{' '}
              {project.contactPerson}
            </div>
            <div>
              <span className="font-semibold">Designation:</span>{' '}
              {project.designation}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
