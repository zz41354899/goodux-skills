import Link from "next/link";
import { Terminal, Lightbulb, Zap, ArrowRight } from "lucide-react";

export default function GettingStartedPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="border-b border-gray-100 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              Getting Started
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              只需要簡單幾個步驟,就能將專業的 UX 設計技能整合到你的開發流程中。
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-24">
            
            {/* Step 1 */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center font-bold text-gray-900">
                  1
                </div>
                <h2 className="text-2xl font-bold text-gray-900">安裝套件</h2>
              </div>
              
              <div className="prose prose-gray max-w-none text-gray-600 space-y-6">
                <p className="leading-relaxed">
                  首先，你需要將 Good UX Skills 安裝到你的開發環境中。請開啟終端機並執行以下指令：
                </p>
                <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-gray-400 text-sm">
                      <Terminal className="h-4 w-4" />
                      安裝所有技能
                    </div>
                    <code className="text-green-400 font-mono text-sm">npx goodux-ux-skills</code>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="text-gray-400 text-sm mb-2">進階用法：</div>
                    <div className="space-y-2 text-xs">
                      <div><code className="text-blue-400">npx goodux-ux-skills -s wireframing</code> <span className="text-gray-500"># 只裝線框圖</span></div>
                      <div><code className="text-blue-400">npx goodux-ux-skills -f</code> <span className="text-gray-500"># 強制覆蓋更新</span></div>
                      <div><code className="text-blue-400">npx goodux-ux-skills --list</code> <span className="text-gray-500"># 列出所有技能</span></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  這個指令會自動將 9 個 UX 技能下載並安裝到你電腦上的 <code className="bg-gray-50 px-1 rounded">.agents/skills</code> 目錄下。支援單一技能選裝、JSON 輸出與 dry-run 模擬。
                </p>
              </div>
            </section>

            {/* Step 2 */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center font-bold text-gray-900">
                  2
                </div>
                <h2 className="text-2xl font-bold text-gray-900">準備 AI 工具</h2>
              </div>
              
              <div className="prose prose-gray max-w-none text-gray-600 space-y-6">
                <p className="leading-relaxed">
                  要使用這些技能,你需要一個支援 Agent Skills 標準的 AI 工具。我們推薦以下幾款:
                </p>
                
                <div className="grid gap-4 sm:grid-cols-2 mt-8">
                  <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-900 transition-colors">
                    <h3 className="font-semibold text-gray-900 mb-2">Windsurf</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">內建強大的 AI 代理功能,能完美整合技能庫。</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-900 transition-colors">
                    <h3 className="font-semibold text-gray-900 mb-2">Claude Code</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">Anthropic 推出的官方開發工具,原生支援 Agent Skills。</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Step 3 */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center font-bold text-gray-900">
                  3
                </div>
                <h2 className="text-2xl font-bold text-gray-900">開始呼叫技能</h2>
              </div>
              
              <div className="prose prose-gray max-w-none text-gray-600 space-y-6">
                <p className="leading-relaxed">
                  有兩種方式可以觸發這些 UX 技能:
                </p>

                <div className="space-y-8 mt-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-gray-400" />
                      顯式呼叫 (Explicit)
                    </h3>
                    <p className="mb-4 leading-relaxed">直接在對話中輸入技能名稱:</p>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <p className="text-gray-900 font-medium">
                        「<span className="text-gray-600 font-mono">$wireframing</span> 幫我設計一個電商結帳頁面」
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-gray-400" />
                      隱式觸發 (Implicit)
                    </h3>
                    <p className="mb-4 leading-relaxed">用自然語言描述需求,AI 會自動配對適合的技能:</p>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <p className="text-gray-900 font-medium">
                        「我們需要了解使用者為什麼在購物車放棄結帳,請幫我規劃一下該怎麼做。」
                      </p>
                      <p className="text-sm text-gray-500 mt-4 pt-4 border-t border-gray-200">
                        → AI 會自動載入 <span className="font-mono text-gray-700">user-interview</span> 技能
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                  學習路徑建議
                </h3>
                <ul className="space-y-6">
                  <li>
                    <h4 className="font-semibold text-gray-900 mb-2">1. 探索階段</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      先了解所有可用的技能與它們的適用情境。
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold text-gray-900 mb-2">2. 實踐階段</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      從單一技能開始,例如在下個專案中試用「使用者訪談」技能。
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold text-gray-900 mb-2">3. 整合階段</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      將多個技能組合使用,建立完整的 UX 流程。
                    </p>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link
                    href="/skills"
                    className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors inline-flex items-center gap-2 underline underline-offset-4"
                  >
                    前往技能庫
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="bg-gray-900 rounded-lg p-8 mx-auto max-w-5xl mb-24 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">準備好開始了嗎?</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          立即探索技能庫,開始你的 UX 設計學習之旅
        </p>
        <Link
          href="/skills"
          className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
        >
          探索所有技能
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
