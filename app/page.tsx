import Link from "next/link";
import { ArrowRight, Package, Zap, Users2, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - 極簡風格 */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
              Cultivating UX Skills
            </h1>
            <p className="mt-8 text-xl sm:text-2xl text-gray-600 leading-relaxed">
              人人創造設計思維
            </p>
            <p className="mt-4 text-base text-gray-500 leading-relaxed max-w-2xl">
              專業的 UX 設計技能包，符合 Agent Skills 標準。基於設計思考流程的 5 個核心技能 + 內建 20 個 UI 風格，支援 6 種 AI 工具。包含避免錯亂機制、專案檢測、開發選項，整合 9 個詳細參考方法。
            </p>
            
            {/* NPM 安裝 - 簡潔版 */}
            <div className="mt-10 inline-block">
              <div className="rounded-lg border border-gray-200 bg-gray-50 px-6 py-4">
                <code className="text-sm font-mono text-gray-900">
                  npx goodux-ux-skills
                </code>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/skills"
                className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors underline underline-offset-4"
              >
                探索技能 →
              </Link>
              <Link
                href="/getting-started"
                className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
              >
                開始使用
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 特色區塊 - 簡潔卡片風格 */}
      <section className="py-24 border-t border-gray-100">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-16">
            Gathering Skills, Sharpening Design
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* 卡片 1 */}
            <div className="group">
              <div className="mb-4">
                <Package className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                5 個核心技能 + 智慧推薦
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                基於設計思考流程：Empathize（同理洞察）、Define（問題定義）、Ideate（發想構思，含 20 個 UI 風格）、Prototype（原型製作）、Test（可用性驗證）。內建避免錯亂機制，確保 AI 推薦正確的 skill
              </p>
            </div>

            {/* 卡片 2 */}
            <div className="group">
              <div className="mb-4">
                <Zap className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Agent Skills 標準
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                符合 Agent Skills 規範,直接整合到 Windsurf、Claude Code、Cursor 等 AI 工具
              </p>
            </div>

            {/* 卡片 3 */}
            <div className="group">
              <div className="mb-4">
                <Users2 className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                開源社群
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                MIT 授權,完全開源。歡迎社群貢獻新技能,共同打造更完整的 UX 技能庫
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI 工具整合說明 */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              與 AI 工具無縫整合
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              安裝後，這 5 個核心 UX 技能會自動整合到支援 Agent Skills 的 AI 工具中。v2.3.0 支援 6 種 AI 工具，可透過 <code className="bg-gray-100 px-2 py-1 rounded text-sm">--tool</code> 參數指定，支援單一技能選裝、多工具同時支援、強制覆蓋更新與 JSON 輸出。
            </p>
            
            <div className="flex flex-wrap gap-3 mb-10">
              {['Windsurf', 'Cursor', 'Claude Code', 'Continue', 'Cline', 'Aider'].map((tool) => (
                <span key={tool} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700">
                  {tool}
                </span>
              ))}
            </div>

            <div className="border-l-2 border-gray-300 pl-6 space-y-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-gray-900">使用範例:</strong><br />
                在 AI 工具中輸入「幫我規劃使用者研究」,AI 會自動使用 <code className="bg-gray-100 px-2 py-1 rounded text-xs">$empathize</code> 技能提供專業指導
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-gray-900">斜線命令:</strong><br />
                在 Windsurf 中輸入 <code className="bg-gray-100 px-2 py-1 rounded text-xs">/empathize</code>，在 Continue 中輸入 <code className="bg-gray-100 px-2 py-1 rounded text-xs">@prototype</code>，快速觸發對應技能
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-gray-900">多工具支援:</strong><br />
                <code className="bg-gray-100 px-2 py-1 rounded text-xs">npx goodux-ux-skills --tool windsurf --tool cursor --tool claude-code</code>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 區塊 - 極簡風格 */}
      <section className="py-32 border-t border-gray-100">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              立即開始你的<br />UX 學習之旅
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              從同理洞察到可用性驗證，5 個核心技能帶你走完設計思考流程
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/skills"
                className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors underline underline-offset-4"
              >
                查看所有技能 →
              </Link>
              <a
                href="https://github.com/zz41354899/goodux-skills"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
