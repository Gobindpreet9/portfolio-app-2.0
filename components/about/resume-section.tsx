import { Badge } from "@/components/ui/badge"

export function ResumeSection() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">GOBINDPREET</h1>
        <div className="space-y-2 text-muted-foreground">
          <p>78 Doman Road</p>
          <p>Victoria, BC V9A 4E6</p>
          <p>343-961-3035</p>
          <p>gobindpreet9@gmail.com</p>
          <div className="flex gap-2">
            <a href="https://github.com/Gobindpreet9" className="text-primary hover:underline">Github: Gobindpreet9</a>
            <span>•</span>
            <a href="https://linkedin.com/in/Gobindpreet" className="text-primary hover:underline">LinkedIn: Gobindpreet</a>
          </div>
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
              <li>Led development of RESTful APIs in .NET Core 8 for microservices application, reducing response times by 30% through optimization techniques</li>
              <li>Contributed to company's products evolution towards cloud-native, scalable microservices architecture using Azure and GitHub Actions for CI/CD</li>
              <li>Enhanced database performance through complex SQL queries and stored procedures</li>
              <li>Ensured product reliability through unit and automated tests within CI/CD pipelines</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium">Software Engineer</h3>
                <p className="text-primary font-medium">Infovista</p>
              </div>
              <Badge variant="outline">Jan 2022 - July 2024</Badge>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Optimized software performance achieving 2x to 20x improvements using advanced algorithms</li>
              <li>Led transition from .NET Framework to .NET Core</li>
              <li>Resolved critical bugs and introduced new features in WPF desktop applications</li>
              <li>Integrated third-party libraries addressing security vulnerabilities</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">SKILLS</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <SkillCategory title="DevOps & Cloud" skills={["Docker", "Kubernetes", "Azure", "Github Actions"]} />
          <SkillCategory title="Languages" skills={["C#", "Java", "C++", "Python", "Javascript"]} />
          <SkillCategory title="Databases" skills={["PostgreSQL", "MySQL", "MongoDB"]} />
          <SkillCategory title="Web/Mobile Dev" skills={["React JS", "Flutter", "ReactNative"]} />
          <SkillCategory title="Machine Learning" skills={["Algorithms", "Tensorflow", "Langchain", "LLMs", "RAG"]} />
          <SkillCategory title="Tools & OS" skills={["Git/GitHub", "Visual Studio", "Jetbrains", "Windows", "Linux"]} />
        </div>
      </section>

      {/* Education */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">EDUCATION</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium">University of Victoria</h3>
            <p className="text-primary">Victoria, BC</p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Computer Engineering Technology</h3>
            <p className="text-primary">Algonquin College, Ottawa, ON</p>
            <div className="flex gap-2 text-muted-foreground mt-1">
              <span>Jan 2019 - December 2021</span>
              <span>•</span>
              <span>GPA: 3.98/4.0</span>
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
            {["Soccer", "Video Games", "Reading", "Guitar", "Quantum Computing", "Machine Learning"].map((hobby) => (
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