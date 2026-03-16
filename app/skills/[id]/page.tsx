import { getSkillById, getSkillContentFromFile, skillCategories } from "@/lib/skills";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronRight, TerminalSquare, BookOpen, Target, AlertCircle, FileCheck, Users, Lightbulb } from "lucide-react";
import { SkillMarkdown } from "@/components/SkillMarkdown";

export default function SkillDetailPage({ params }: { params: { id: string } }) {
  const skill = getSkillById(params.id);
  const skillContent = getSkillContentFromFile(params.id);

  if (!skill || !skillContent) {
    notFound();
  }

  const category = skillCategories.find((c) => c.id === skill.category);
  const { metadata, content } = skillContent;

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
          <div className="lg:col-span-2 space-y-16">
            
            {/* Task Definition */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="h-6 w-6 text-gray-900" />
                <h2 className="text-2xl font-bold text-gray-900">任務定義</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">{content.taskDefinition}</p>
              </div>
            </section>

            {/* When to Use */}
            {content.whenToUse.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <Target className="h-6 w-6 text-gray-900" />
                  <h2 className="text-2xl font-bold text-gray-900">何時使用</h2>
                </div>
                <ul className="space-y-3">
                  {content.whenToUse.map((item, index) => (
                    <li key={index} className="flex gap-3 text-gray-600">
                      <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Required Input */}
            {content.requiredInput.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">必要輸入</h2>
                <ul className="space-y-3">
                  {content.requiredInput.map((item, index) => (
                    <li key={index} className="flex gap-3 text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-gray-400 mt-2.5 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Expected Output */}
            {content.expectedOutput.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">預期輸出</h2>
                <ul className="space-y-3">
                  {content.expectedOutput.map((item, index) => (
                    <li key={index} className="flex gap-3 text-gray-600">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Execution Steps */}
            {content.executionSteps.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">執行步驟</h2>
                <div className="space-y-6">
                  {content.executionSteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-bold mt-1">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <SkillMarkdown content={step} className="text-gray-600" />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Related Skills */}
            {content.relatedSkills.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <Users className="h-6 w-6 text-gray-900" />
                  <h2 className="text-2xl font-bold text-gray-900">可搭配技能</h2>
                </div>
                <ul className="space-y-3">
                  {content.relatedSkills.map((item, index) => (
                    <li key={index} className="flex gap-3 text-gray-600">
                      <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* References */}
            {content.references.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb className="h-6 w-6 text-gray-900" />
                  <h2 className="text-2xl font-bold text-gray-900">參考資料</h2>
                </div>
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 space-y-4">
                  {content.references.map((ref, index) => (
                    <div key={index}>
                      <SkillMarkdown content={ref} />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Example Output */}
            {content.exampleOutput && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">精簡範例輸出</h2>
                <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                  <SkillMarkdown content={content.exampleOutput} className="prose-invert" />
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              
              {/* AI Command */}
              <div className="bg-gray-900 rounded-xl p-6 text-white">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-4">
                  <TerminalSquare className="h-4 w-4" />
                  在 AI 工具中使用
                </h3>
                <code className="block text-sm text-green-400 font-mono mb-4 bg-black/50 p-3 rounded-lg">
                  /{skill.id}
                </code>
                <p className="text-xs text-gray-400 leading-relaxed">
                  在 Windsurf、Cursor 等工具中輸入斜線指令即可觸發此技能。
                </p>
              </div>

              {/* Metadata */}
              <div className="border border-gray-200 rounded-xl p-6 bg-white">
                <h3 className="font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">技能資訊</h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-gray-500 mb-1">版本</dt>
                    <dd className="text-gray-900 font-mono">{metadata.metadata.version}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500 mb-1">作者</dt>
                    <dd className="text-gray-900">{metadata.metadata.author}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500 mb-1">授權</dt>
                    <dd className="text-gray-900">{metadata.license}</dd>
                  </div>
                </dl>
              </div>

              {/* Trigger Conditions */}
              {content.triggerConditions.length > 0 && (
                <div className="border border-gray-200 rounded-xl p-6 bg-white">
                  <h3 className="font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">觸發條件</h3>
                  <div className="space-y-3">
                    {content.triggerConditions.map((condition, index) => (
                      <div key={index} className="text-sm text-gray-600">
                        <SkillMarkdown content={condition} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Completion Criteria */}
              {content.completionCriteria.length > 0 && (
                <div className="border border-gray-200 rounded-xl p-6 bg-white">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                    <FileCheck className="h-4 w-4 text-gray-900" />
                    <h3 className="font-bold text-gray-900">完成條件</h3>
                  </div>
                  <ul className="space-y-3">
                    {content.completionCriteria.map((criteria, index) => (
                      <li key={index} className="flex gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{criteria}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Not Applicable */}
              {content.notApplicable.length > 0 && (
                <div className="border border-orange-200 bg-orange-50 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-orange-200">
                    <AlertCircle className="h-4 w-4 text-orange-700" />
                    <h3 className="font-bold text-orange-900">不適用情境</h3>
                  </div>
                  <ul className="space-y-3">
                    {content.notApplicable.map((item, index) => (
                      <li key={index} className="text-sm text-orange-800 leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Execution Checklist */}
              {content.executionChecklist.length > 0 && (
                <div className="border border-gray-200 rounded-xl p-6 bg-white">
                  <h3 className="font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">執行檢查</h3>
                  <ul className="space-y-3">
                    {content.executionChecklist.map((item, index) => (
                      <li key={index} className="flex gap-2 text-sm text-gray-600">
                        <input type="checkbox" className="mt-1 rounded" />
                        <span className="leading-relaxed">{item.replace(/^- \[ \] /, '')}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
