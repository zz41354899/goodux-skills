import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function BestPracticesPage() {
  const practices = [
    {
      category: "使用者研究",
      items: [
        {
          title: "訪談至少 5-8 位使用者",
          description: "尼爾森研究顯示,5 位使用者可發現 85% 的可用性問題"
        },
        {
          title: "使用開放式問題",
          description: "避免引導性問題,讓使用者自由表達真實想法"
        },
        {
          title: "基於真實資料建立人物誌",
          description: "避免假設,所有人物誌特徵都應有研究資料支撐"
        }
      ]
    },
    {
      category: "介面設計",
      items: [
        {
          title: "保持資訊架構層級在 3-4 層",
          description: "過深的層級會讓使用者迷失,難以找到資訊"
        },
        {
          title: "使用真實內容而非 Lorem Ipsum",
          description: "真實內容能幫助發現實際的排版和空間問題"
        },
        {
          title: "遵循 7±2 原則",
          description: "每層導航項目不超過 7±2 個,避免選擇過載"
        }
      ]
    },
    {
      category: "可用性測試",
      items: [
        {
          title: "盡早且頻繁地測試",
          description: "在開發早期就開始測試,問題修正成本更低"
        },
        {
          title: "保持中立態度",
          description: "不要引導或幫助使用者,觀察他們的真實行為"
        },
        {
          title: "記錄定量與定性數據",
          description: "同時記錄完成率、時間等數據和使用者的想法感受"
        }
      ]
    },
    {
      category: "無障礙設計",
      items: [
        {
          title: "色彩對比度達到 4.5:1",
          description: "符合 WCAG AA 標準,確保文字清晰可讀"
        },
        {
          title: "所有功能可用鍵盤操作",
          description: "不依賴滑鼠,確保鍵盤使用者也能完整使用"
        },
        {
          title: "提供清晰的焦點指示器",
          description: "讓使用者知道目前焦點在哪個元素上"
        }
      ]
    },
    {
      category: "設計系統",
      items: [
        {
          title: "從小規模開始",
          description: "先建立核心元件,再逐步擴展到完整系統"
        },
        {
          title: "優先處理最常用元件",
          description: "Button、Input 等基礎元件應該最先完成"
        },
        {
          title: "建立治理流程",
          description: "定義如何提案、審查和發布新元件或變更"
        }
      ]
    },
    {
      category: "原型製作",
      items: [
        {
          title: "根據目標決定保真度",
          description: "早期概念驗證用低保真,最終驗證用高保真"
        },
        {
          title: "專注關鍵流程",
          description: "不需要完整產品,只需要測試的核心流程"
        },
        {
          title: "加入完整狀態",
          description: "包含載入、錯誤、空狀態等真實情境"
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="border-b border-gray-100 py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Best Practices
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            精選的 UX 設計最佳實踐,幫助你在實際專案中做出更好的設計決策
          </p>
        </div>
      </section>

      {/* Best Practices List */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="space-y-16">
            {practices.map((category) => (
              <div key={category.category}>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  {category.category}
                </h2>
                <div className="space-y-6">
                  {category.items.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle2 className="h-5 w-5 text-gray-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-100 py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              想要更深入學習?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              查看完整的技能指南,包含詳細步驟、範例和工具推薦
            </p>
            <Link
              href="/skills"
              className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors underline underline-offset-4 inline-flex items-center gap-2"
            >
              探索所有技能
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
