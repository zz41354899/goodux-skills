import { notFound } from "next/navigation";
import Link from "next/link";
import { getSkillById, skills, skillCategories } from "@/lib/skills";
import { ArrowLeft, CheckCircle2, Lightbulb, Rocket } from "lucide-react";

export async function generateStaticParams() {
  return skills.map((skill) => ({
    id: skill.id,
  }));
}

export default function SkillDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const skill = getSkillById(params.id);

  if (!skill) {
    notFound();
  }

  const category = skillCategories.find((cat) => cat.id === skill.category);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-6 py-8 lg:px-8">
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            返回技能庫
          </Link>
          <div className="mb-4">
            {category && (
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${category.color}`}
              >
                {category.name}
              </span>
            )}
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            {skill.name}
          </h1>
          <p className="text-xl text-gray-600">{skill.description}</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        <section className="mb-12">
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">概述</h2>
            <p className="text-gray-700 leading-relaxed">
              {skill.content.overview}
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-lg bg-blue-100 p-2">
                <Lightbulb className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">何時使用</h2>
            </div>
            <ul className="space-y-3">
              {skill.content.whenToUse.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-lg bg-purple-100 p-2">
                <Rocket className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">如何使用</h2>
            </div>
            <ol className="space-y-4">
              {skill.content.howToUse.map((item, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-semibold text-sm">
                    {index + 1}
                  </span>
                  <div className="flex-1 pt-1">
                    <p className="text-gray-700">{item}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              最佳實踐
            </h2>
            <ul className="space-y-3">
              {skill.content.bestPractices.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-600 mt-2" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {skill.content.examples && skill.content.examples.length > 0 && (
          <section className="mb-12">
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                實際範例
              </h2>
              <ul className="space-y-3">
                {skill.content.examples.map((example, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                  >
                    <span className="text-primary font-semibold">
                      {index + 1}.
                    </span>
                    <span className="text-gray-700">{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <div className="bg-blue-50 rounded-lg border border-blue-200 p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            準備好應用這個技能了嗎?
          </h3>
          <p className="text-gray-600 mb-6">
            探索更多相關技能,或加入社群與其他 UX 設計師交流經驗
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/skills"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary border border-primary hover:bg-primary hover:text-white transition-colors"
            >
              探索更多技能
            </Link>
            <Link
              href="/community"
              className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
            >
              加入社群
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
