import { getSkillById, skillCategories } from "@/lib/skills";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronRight, TerminalSquare } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function SkillDetailPage({ params }: { params: { id: string } }) {
  const skill = getSkillById(params.id);

  if (!skill) {
    notFound();
  }

  const category = skillCategories.find((c) => c.id === skill.category);

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="border-b border-gray-100 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mb-10">
            <Link
              href="/skills"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              返回技能庫
            </Link>
          </div>
          
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 rounded-full text-xs font-medium border border-gray-200 text-gray-700">
              {category?.name}
            </span>
            <span className="text-sm font-mono text-gray-400">
              {skill.id}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
            {skill.name}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
            {skill.description}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-24">
            
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">技能摘要</h2>
              <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed">
                <ReactMarkdown>{skill.content.overview}</ReactMarkdown>
              </div>
            </section>

            {/* When to use */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">適用情境</h2>
              <ul className="space-y-6">
                {skill.content.whenToUse.map((item, index) => (
                  <li key={index} className="flex gap-4 text-gray-600">
                    <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* How to use */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">工作流程</h2>
              <div className="space-y-10">
                {skill.content.howToUse.map((step, index) => {
                  const [title, ...descParts] = step.split(":");
                  const description = descParts.join(":");
                  return (
                    <div key={index} className="flex gap-6">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-sm font-bold text-gray-900 mt-1">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {title.replace(/\*\*/g, "")}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Examples */}
            {skill.content.examples && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">應用範例</h2>
                <div className="bg-gray-50 rounded-lg p-8 space-y-6">
                  {skill.content.examples.map((example, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="h-1.5 w-1.5 rounded-full bg-gray-400 mt-2.5 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">{example}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-10">
              
              {/* AI Command */}
              <div className="bg-gray-900 rounded-xl p-8 text-white">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-6">
                  <TerminalSquare className="h-4 w-4" />
                  在 AI 工具中使用
                </h3>
                <code className="block text-sm text-green-400 font-mono mb-6 bg-black/50 p-4 rounded-lg">
                  ${skill.id}
                </code>
                <p className="text-sm text-gray-400 leading-relaxed">
                  複製上方指令並貼到 Windsurf、Claude Code 等支援 Agent Skills 的工具中即可觸發此技能。
                </p>
              </div>

              {/* Best Practices */}
              <div className="border border-gray-200 rounded-xl p-8 bg-white">
                <h3 className="font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">最佳實踐</h3>
                <ul className="space-y-5">
                  {skill.content.bestPractices.map((practice, index) => (
                    <li key={index} className="flex gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="h-5 w-5 text-gray-400 flex-shrink-0" />
                      <span className="leading-relaxed">{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
