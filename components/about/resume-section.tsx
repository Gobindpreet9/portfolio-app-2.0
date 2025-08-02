import { Badge } from "@/components/ui/badge"

export function ResumeSection() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">GOBINDPREET</h1>
        <div className="space-y-2 text-muted-foreground">
          <p>Victoria, BC, Canada</p>
          <p>gobindpreet9@gmail.com</p>
        </div>
      </div>

      {/* Experience */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">EXPERIENCE</h2>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium">Senior Software Engineer</h3>
                <p className="text-primary font-medium">Persistent Systems</p>
              </div>
              <Badge variant="outline">August 2024 - PRESENT</Badge>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Served as Scrum Master, facilitating agile ceremonies and removing impediments to ensure the team consistently met sprint goals and project deadlines</li>
              <li>Spearheaded the product's transition from a B2B to a SaaS model by delivering the critical functionality required for a successful day-one launch</li>
              <li>Optimized data flow efficiency by 50%, reducing data import processing time by 30 minutes, by managing robust import/export processes that ensured 100% data validation and integrity</li>
              <li>Re-architected the PostgreSQL database schema and optimized crucial SQL queries and stored procedures, achieving a 70% improvement in data retrieval speeds for key application dashboards</li>
              <li>Facilitated seamless data exchange between microservices and a modern React/Redux UI by developing and consuming RESTful APIs</li>
              <li>Streamlined the deployment pipeline by contributing to a cloud-native architecture on Azure, utilizing GitHub Actions for CI/CD, and configuring critical data-related containers like keycloak, opa, grafana, prometheus</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium">Software Engineer</h3>
                <p className="text-primary font-medium">Infovista</p>
              </div>
              <Badge variant="outline">January 2022 - July 2024</Badge>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Improved software performance by 2x-20x through targeted optimizations and a successful migration of the application from .NET Framework to .NET Core</li>
              <li>Resolved over 25 critical, customer-impacting bugs and implemented 18+ new features for both WPF desktop applications and RESTful APIs, significantly improving software stability and functionality</li>
              <li>Streamlined deployment and scaling operations by managing Docker containers and their lifecycle within a Kubernetes environment</li>
              <li>Proactively managed and updated third-party libraries, promptly addressing security vulnerabilities (CVEs) to ensure system robustness and compliance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">SKILLS</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <SkillCategory title="DevOps & Cloud" skills={["Docker", "Kubernetes", "Azure", "GitHub Actions", "CI/CD", "Helm"]} />
          <SkillCategory title="Languages" skills={["C#", "Python", "Java", "TypeScript", "JavaScript"]} />
          <SkillCategory title="Databases" skills={["PostgreSQL", "MongoDB", "Microsoft SQL Server", "PL/SQL"]} />
          <SkillCategory title="Web & Mobile" skills={["React", "Next.js", "Redux", ".NET", "RESTful APIs", "Flutter", "WPF"]} />
          <SkillCategory title="AI & Machine Learning" skills={["Langchain", "LLMs", "RAG", "Google ADK", "Hugging Face", "n8n"]} />
          <SkillCategory title="Tools & OS" skills={["Git", "GitHub", "Visual Studio", "Cursor", "Claude Code", "Windows", "Linux (WSL)"]} />
          <SkillCategory title="Other" skills={["ROS2", "STM32", "Raspberry Pi"]} />
        </div>
      </section>

      {/* Education */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">EDUCATION</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium">Computer Engineering Technology</h3>
            <p className="text-primary">Algonquin College, Ottawa, ON</p>
            <div className="flex gap-2 text-muted-foreground mt-1">
              <span>Jan 2019 – Dec 2021</span>
              <span>•</span>
              <span>GPA: 3.98/4.0</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium">Computer Science (Part-time)</h3>
            <p className="text-primary">University of Victoria, Victoria, BC</p>
            <div className="flex gap-2 text-muted-foreground mt-1">
              <span>Jan 2025 – Sept 2025</span>
              <span>•</span>
              <span>Advanced coursework completed while working full-time</span>
              <span>•</span>
              <span>GPA: 9.0/9.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">ADDITIONAL INFORMATION</h2>
        <div className="space-y-2">
          <h3 className="font-medium">Hobbies & Interests</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Soccer", 
              "Books", 
              "Guitar", 
              "Hiking", 
              "AI", 
              "Blogging",
              "Video Games"
            ].map((hobby) => (
              <Badge key={hobby} variant="secondary">{hobby}</Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="space-y-2">
      <h3 className="font-medium">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="outline">{skill}</Badge>
        ))}
      </div>
    </div>
  )
}