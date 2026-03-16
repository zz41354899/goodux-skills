import Link from "next/link";
import { BookOpen, Download, Terminal, Zap, CheckCircle, ArrowRight, Package, Code, Users, FileText } from "lucide-react";

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold tracking-tight text-gray-900 mb-6">
              文件
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed">
              讓 AI 工具掌握專業 UX 設計方法的完整指南
            </p>
          </div>
        </div>
      </section>

      {/* Why Good UX Skills */}
      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">為什麼使用 Good UX Skills?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">專業 UX 方法</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                基於設計思考流程的 5 個核心技能，整合使用者訪談、人物誌、資訊架構等 9 個詳細參考方法，讓 AI 能夠提供專業級的設計建議。
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">內建 20 個 UI 風格</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                內建 20 個精選 UI 風格資料庫,涵蓋科技極簡、賽博龐克、日式和風等多種風格,快速提升介面設計品質。
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">處理複雜業務需求</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                特別針對 B2B SaaS、企業後台、多角色系統等複雜場景優化,能夠理解並拆解複雜的業務流程。
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">跨工具互通</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                基於 Agent Skills 開放標準,可在 Windsurf、Claude Code 等支援的 AI 工具中使用。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">快速開始</h2>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="h-6 w-6 text-gray-900" />
                <h3 className="text-xl font-semibold text-gray-900">安裝</h3>
              </div>
              <p className="text-gray-600 mb-6">
                使用 npx 快速安裝,無需全域安裝:
              </p>
              <div className="bg-white border border-gray-300 rounded-lg p-4 font-mono text-base mb-4">
                <code className="text-gray-900">npx goodux-ux-skills</code>
              </div>
              <p className="text-sm text-gray-500">
                技能會自動複製到 <code className="bg-gray-100 px-2 py-1 rounded text-gray-900">.agents/skills</code> 目錄
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started - Card Navigation */}
      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">開始使用</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/skills"
              className="border border-gray-200 rounded-lg p-6 hover:border-gray-900 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <Package className="h-8 w-8 text-gray-900" />
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:underline">
                瀏覽所有技能
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                查看完整的 5 個核心 UX 技能，涵蓋設計思考完整流程。
              </p>
            </Link>

            <Link
              href="/getting-started"
              className="border border-gray-200 rounded-lg p-6 hover:border-gray-900 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <Zap className="h-8 w-8 text-gray-900" />
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:underline">
                開始學習
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                從基礎概念開始,逐步掌握 UX 設計的核心技能。
              </p>
            </Link>

            <Link
              href="/best-practices"
              className="border border-gray-200 rounded-lg p-6 hover:border-gray-900 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <CheckCircle className="h-8 w-8 text-gray-900" />
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:underline">
                最佳實踐
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                學習業界認可的 UX 設計最佳實踐與工作流程。
              </p>
            </Link>

            <a
              href="https://agentskills.io/specification"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 rounded-lg p-6 hover:border-gray-900 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <FileText className="h-8 w-8 text-gray-900" />
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:underline">
                Agent Skills 規範
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                了解 Agent Skills 的完整格式規範與標準。
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">使用範例</h2>

          <div className="space-y-8">
            {/* Implicit Invocation */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">隱式調用(自動)</h3>
              <p className="text-gray-600 mb-4">
                直接描述你的需求,AI 會自動選擇合適的技能:
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">範例 1: 使用者研究</p>
                  <p className="text-gray-900">
                    "我需要了解使用者為什麼放棄購物車,該怎麼做?"
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    → AI 會自動使用 <code className="bg-gray-100 px-2 py-1 rounded">empathize</code> 技能
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">範例 2: 介面設計</p>
                  <p className="text-gray-900">
                    "幫我設計一個電商結帳頁面的線框圖"
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    → AI 會自動使用 <code className="bg-gray-100 px-2 py-1 rounded">ideate</code> 技能
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">範例 3: 可用性測試</p>
                  <p className="text-gray-900">
                    "我想測試這個新功能是否好用"
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    → AI 會自動使用 <code className="bg-gray-100 px-2 py-1 rounded">test</code> 技能
                  </p>
                </div>
              </div>
            </div>

            {/* Explicit Invocation */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">顯式調用(手動)</h3>
              <p className="text-gray-600 mb-4">
                在 Windsurf 等工具中,可以直接指定技能名稱:
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">使用 /skills 選單</p>
                  <div className="font-mono text-sm text-gray-900">
                    /empathize → 觸發「Empathize 同理洞察」技能
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">使用 $ 符號(Windsurf)</p>
                  <div className="font-mono text-sm text-gray-900">
                    $ideate 設計一個登入頁面的線框圖
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Skill Users */}
      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">支援的 AI 工具</h2>
          <p className="text-gray-600 mb-8">在這些工具中使用 Good UX Skills</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Code className="h-6 w-6 text-gray-900" />
                <h3 className="font-semibold text-gray-900">Windsurf</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                使用 <code className="bg-gray-100 px-2 py-1 rounded">$skill-name</code> 或 <code className="bg-gray-100 px-2 py-1 rounded">/skills</code> 選單觸發技能
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Terminal className="h-6 w-6 text-gray-900" />
                <h3 className="font-semibold text-gray-900">Claude Code</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                自動掃描 <code className="bg-gray-100 px-2 py-1 rounded">.agents/skills</code> 目錄並載入技能
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="h-6 w-6 text-gray-900" />
                <h3 className="font-semibold text-gray-900">Cursor</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                支援自訂 AI 指令,可整合 Agent Skills 技能庫
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Package className="h-6 w-6 text-gray-900" />
                <h3 className="font-semibold text-gray-900">其他工具</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                任何支援 Agent Skills 標準的工具
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Skills */}
      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">可用技能</h2>
          <p className="text-gray-600 mb-8">5 個核心 UX 設計技能，基於設計思考流程，整合 9 個詳細參考方法</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Empathize 同理洞察", id: "empathize", desc: "使用者訪談、人物誌與研究洞察整理" },
              { name: "Define 問題定義", id: "define", desc: "問題界定、需求優先順序、限制與成功指標" },
              { name: "Ideate 發想構思", id: "ideate", desc: "概念發散、線框與視覺方向探索（含 20 種 UI 風格）" },
              { name: "Prototype 原型製作", id: "prototype", desc: "建立可操作的互動原型" },
              { name: "Test 可用性驗證", id: "test", desc: "可用性測試與回饋收斂（可涵蓋 a11y 驗證）" },
            ].map((skill) => (
              <Link
                key={skill.id}
                href={`/skills/${skill.id}`}
                className="border border-gray-200 rounded-lg p-4 hover:border-gray-900 transition-colors group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:underline">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{skill.desc}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gray-900 flex-shrink-0 mt-1" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/skills"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors"
            >
              查看完整技能列表
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">常見問題</h2>
          
          <div className="space-y-6">
            <div className="border-l-2 border-gray-900 pl-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Q: 技能沒有被 AI 偵測到怎麼辦?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A: 確認技能已正確安裝到 <code className="bg-gray-100 px-2 py-1 rounded">.agents/skills</code> 目錄。
                如果使用 Windsurf,可以重啟編輯器讓它重新掃描技能。
              </p>
            </div>

            <div className="border-l-2 border-gray-900 pl-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Q: 可以自訂或修改技能嗎?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A: 可以!技能都是 Markdown 格式的文件,你可以直接編輯 <code className="bg-gray-100 px-2 py-1 rounded">.agents/skills/*/SKILL.md</code> 來調整內容。
              </p>
            </div>

            <div className="border-l-2 border-gray-900 pl-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Q: 如何更新到最新版本?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A: 重新執行 <code className="bg-gray-100 px-2 py-1 rounded">npx goodux-ux-skills</code> 即可更新到最新版本。
                已存在的技能會被跳過,只會安裝新增的技能。
              </p>
            </div>

            <div className="border-l-2 border-gray-900 pl-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Q: 技能適用於哪些類型的專案?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A: 這些技能特別適合 B2B SaaS、企業後台、多角色系統等複雜業務場景,
                也同樣適用於一般的網站、App 設計專案。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">下一步</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              安裝完成後,開始使用技能來提升你的 UX 設計工作流程:
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/skills"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-700 transition-colors"
              >
                <CheckCircle className="h-4 w-4" />
                瀏覽所有技能
              </Link>
              <Link
                href="/best-practices"
                className="inline-flex items-center gap-2 border border-gray-900 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-50 transition-colors"
              >
                學習最佳實踐
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
