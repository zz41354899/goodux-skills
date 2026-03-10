import Link from "next/link";
import { skills, skillCategories } from "@/lib/skills";
import { ArrowRight } from "lucide-react";

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="border-b border-gray-100 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Skill Library
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              探索專業的 UX 設計技能,每個技能都包含詳細的使用指南、最佳實踐和實際範例。
            </p>
          </div>
        </div>
      </section>

      {/* Skills Content */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          
          {/* Categories Nav */}
          <div className="mb-16">
            <div className="flex flex-wrap gap-3">
              {skillCategories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-gray-100 bg-white text-gray-900 border border-gray-200"
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>

          {/* Skill Lists */}
          <div className="space-y-24">
            {skillCategories.map((category) => {
              const categorySkills = skills.filter(
                (skill) => skill.category === category.id
              );
              if (categorySkills.length === 0) return null;

              return (
                <div key={category.id} id={category.id} className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">
                    {category.name}
                  </h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    {categorySkills.map((skill) => (
                      <Link
                        key={skill.id}
                        href={`/skills/${skill.id}`}
                        className="group block p-6 border border-gray-200 rounded-lg hover:border-gray-900 transition-colors bg-white"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {skill.name}
                          </h3>
                          <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-2">
                          {skill.description}
                        </p>
                        <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-50 text-xs font-medium text-gray-600">
                          {skill.id}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-100 bg-gray-50 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
              想要貢獻你的技能?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Good UX Skills 是開源的技能庫。我們歡迎社群成員分享專業知識,共同打造更完整的 UX 生態系。
            </p>
            <Link
              href="/community"
              className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors underline underline-offset-4 inline-flex items-center gap-2"
            >
              加入社群貢獻
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
