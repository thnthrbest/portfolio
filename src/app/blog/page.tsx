import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects, certificates and contests.",
};

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
  return (
    <section id="projects">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-semibold tracking-tight mb-2">Projects</h1>
        <p className="text-sm text-muted-foreground mb-8">
          ผลงานโปรเจค เกียรติบัตร และงานแข่งขัน
        </p>
      </BlurFade>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 auto-rows-fr">
        {DATA.portfolio.map((project, id) => (
          <BlurFade key={project.slug} delay={BLUR_FADE_DELAY * 2 + id * 0.05} className="h-full">
            <Link
              href={`/blog/${project.slug}`}
              className="flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 hover:ring-muted transition-all duration-200"
            >
              {project.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              ) : (
                <div className="w-full h-48 bg-muted" />
              )}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold">{project.title}</h3>
                  <time className="text-xs text-muted-foreground">{project.dates}</time>
                </div>
                <p className="text-sm text-muted-foreground flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1 mt-auto">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-[11px] font-medium border border-border h-6 w-fit px-2">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
