import Link from "next/link";
import { skills, skillCategories } from "@/lib/skills";
import { ArrowRight } from "lucide-react";

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              UX 設計技能庫
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              探索專業的 UX 設計技能,每個技能都包含詳細的使用指南、最佳實踐和實際範例
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">技能分類</h2>
          <div className="flex flex-wrap gap-3">
            {skillCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:shadow-md ${category.color}`}
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>

        {skillCategories.map((category) => {
          const categorySkills = skills.filter(
            (skill) => skill.category === category.id
          );
          if (categorySkills.length === 0) return null;

          return (
            <section key={category.id} id={category.id} className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {category.name}
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {categorySkills.map((skill) => (
                  <Link
                    key={skill.id}
                    href={`/skills/${skill.id}`}
                    className="group relative bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all hover:border-primary"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        {skill.name}
                      </h3>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {skill.description}
                    </p>
                    <div className="mt-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${category.color}`}
                      >
                        {category.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              想要貢獻你的技能?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Good UX Skills 是開放式的技能庫,歡迎社群成員分享你的專業知識和經驗
            </p>
            <div className="mt-10">
              <Link
                href="/community"
                className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                加入社群
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
