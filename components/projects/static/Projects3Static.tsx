"use client";

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLinkIcon } from 'lucide-react';
import { renderIcon } from '@/lib/hybrid-icon-resolver';
import Image from 'next/image';

interface StaticProjectsData {
  projects: Array<{
    name: string | null
    description: string | null
    picUrl: string | null
    technologies: Array<{
      name: string
      logo: string | null
    }>
    custom_links: Array<{
      icon: string      // Library key OR custom SVG data
      title: string
      url: string
    }>
  }>
}


export default function Projects3Static({ projects }: StaticProjectsData) {
  return (
    <section className="mb-14">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-5">Projects</h2>
        <p className="text-base text-muted-foreground mb-3">
          A selection of projects that showcase different skills and approaches
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const githubLink = project.custom_links?.find(link => link.icon === 'github');
            const liveLink = project.custom_links?.find(link => link.icon === 'website' || link.icon === 'demo');
            const githubUrl = githubLink?.url;
            const liveUrl = liveLink?.url;

            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  {project.description && (
                    <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: project.description }} />
                  )}

                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 5).map((tech, techIndex) => (
                        <div key={techIndex} className="flex items-center gap-1">
                          {tech.logo && (
                            <Image
                              src={tech.logo}
                              alt={tech.name}
                              width={16}
                              height={16}
                              className="object-contain"
                              unoptimized
                            />
                          )}
                          <span className="text-xs text-muted-foreground">{tech.name}</span>
                        </div>
                      ))}
                      {project.technologies.length > 5 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 5} more
                        </Badge>
                      )}
                    </div>
                  )}

                  <div className="flex justify-between gap-4">
                    {liveUrl && (
                      <Button asChild variant="outline" className="w-full">
                        <a
                          href={liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          View Project <ExternalLinkIcon className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {githubUrl && (
                      <Button asChild variant="outline" className="w-full">
                        <a
                          href={githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          GitHub <svg className="ml-2 h-4 w-4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}