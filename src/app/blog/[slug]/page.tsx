/* eslint-disable @next/next/no-img-element */
import { DATA } from "@/data/resume";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";

type Params = { params: Promise<{ slug: string }> };

function findProject(slug: string) {
  return DATA.portfolio.find((p) => p.slug === slug);
}

export function generateStaticParams() {
  return DATA.portfolio.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata | undefined> {
  const project = findProject((await params).slug);
  if (!project) return undefined;
  return { title: project.title, description: project.description };
}

export default async function ProjectPage({ params }: Params) {
  const project = findProject((await params).slug);
  if (!project) notFound();

  return (
    <section id="project">
      <Link
        href="/blog"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-2 py-1 inline-flex items-center gap-1 mb-6 group"
      >
        <ChevronLeft className="size-3 group-hover:-translate-x-px transition-transform" />
        Back to Projects
      </Link>

      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-3xl tracking-tighter leading-tight">{project.title}</h1>
        <time className="text-sm text-muted-foreground">{project.dates}</time>
        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-[11px] font-medium border border-border h-6 w-fit px-2">
              {tag}
            </Badge>
          ))}
        </div>
        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.links.map((link) => (
              <Link key={link.title} href={link.href} target="_blank" rel="noopener noreferrer">
                <Badge className="text-xs bg-primary text-primary-foreground">{link.title}</Badge>
              </Link>
            ))}
          </div>
        )}
      </div>

      {project.image && (
        <img src={project.image} alt={project.title} className="w-full mt-8 rounded-xl border border-border object-cover max-h-96" />
      )}

      {project.gallery.length > 0 && (
        <div className="mt-10 flex flex-col gap-4">
          <h2 className="text-xl font-bold">ภาพตัวอย่าง</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.gallery.map((src, i) => (
              <img key={src + i} src={src} alt={`${project.title} ${i + 1}`} className="w-full rounded-xl border border-border object-cover" />
            ))}
          </div>
        </div>
      )}

      {project.certificates.length > 0 && (
        <div className="mt-10 flex flex-col gap-4">
          <h2 className="text-xl font-bold">ใบเกียรติบัตร</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.certificates.map((src, i) => (
              <img key={src + i} src={src} alt={`Certificate ${i + 1}`} className="w-full rounded-xl border border-border object-contain bg-card" />
            ))}
          </div>
        </div>
      )}

      {project.competitions.length > 0 && (
        <div className="mt-10 flex flex-col gap-4">
          <h2 className="text-xl font-bold">งานแข่งขัน</h2>
          <div className="flex flex-col gap-3">
            {project.competitions.map((c) => (
              <div key={c.name + c.date} className="border border-border rounded-xl p-4 flex flex-col gap-1">
                <h3 className="font-semibold">{c.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {c.date} · {c.location}
                </p>
                <p className="text-sm">ผล: {c.result}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
