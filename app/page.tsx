import UserInfo3Static from '@/components/userInfo/static/UserInfo3Static'
import Skills3Static from '@/components/skills/static/Skills3Static'
import Projects3Static from '@/components/projects/static/Projects3Static'
import CustomSection3Static from '@/components/custom/static/CustomSection3Static'
import CustomSectionListStatic from '@/components/custom/static/CustomSectionListStatic'
import CustomSectionTimelineStatic from '@/components/custom/static/CustomSectionTimelineStatic'
import portfolioData from '@/data/portfolio.json'

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <UserInfo3Static personal={portfolioData.personal} />
        {portfolioData.workExperience && <CustomSectionTimelineStatic section={{
          section_name: "Work Experience",
          layout_type: "timeline",
          items: portfolioData.workExperience.map((exp, index) => ({
            primaryTitle: exp.company,
            secondaryTitle: exp.position,
            dateInfo: `${exp.start_date || ''} - ${exp.end_date || 'Present'}`.trim(),
            location: exp.location,
            description: exp.description,
            logoUrl: exp.logoUrl,
            customLinks: exp.custom_links
          }))
        }} />}
        {portfolioData.education && <CustomSectionListStatic section={{
          section_name: "Education",
          layout_type: "list",
          items: portfolioData.education.map((edu, index) => ({
            primaryTitle: edu.university,
            secondaryTitle: edu.degree,
            dateInfo: `${edu.start_year || ''} - ${edu.end_year || 'Present'}`.trim(),
            location: edu.location,
            description: edu.description,
            logoUrl: edu.logoUrl,
            customLinks: edu.custom_links
          }))
        }} />}
        {portfolioData.projects && <Projects3Static projects={portfolioData.projects} />}
        {portfolioData.skills && <Skills3Static skills={portfolioData.skills} />}
      </div>
    </main>
  )
}