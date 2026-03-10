import Link from "next/link";
import { BookOpen, Users, Zap, ArrowRight } from "lucide-react";

export default function GettingStartedPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            開始學習
          </h1>
          <p className="text-xl text-gray-600">
            歡迎來到 Good UX Skills!這裡將引導你如何使用技能庫,提升你的 UX 設計能力
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            什麼是 UX Skills?
          </h2>
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              UX Skills 是一套結構化的設計技能知識庫,每個技能都包含:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                <span className="text-gray-700">
                  <strong>清晰的說明</strong>:了解技能的定義和重要性
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                <span className="text-gray-700">
                  <strong>使用時機</strong>:知道何時應該應用這個技能
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                <span className="text-gray-700">
                  <strong>執行步驟</strong>:跟隨具體的操作指南
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                <span className="text-gray-700">
                  <strong>最佳實踐</strong>:學習專業設計師的經驗
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                <span className="text-gray-700">
                  <strong>實際範例</strong>:參考真實的應用情境
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            如何使用技能庫
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    瀏覽技能分類
                  </h3>
                  <p className="text-gray-600">
                    技能庫按照使用者研究、介面設計、原型製作、可用性測試、無障礙設計和設計系統等類別組織,你可以根據需求選擇相關分類
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    選擇感興趣的技能
                  </h3>
                  <p className="text-gray-600">
                    點擊技能卡片進入詳細頁面,閱讀完整的說明、步驟和最佳實踐
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    在專案中實踐
                  </h3>
                  <p className="text-gray-600">
                    將學到的技能應用到實際專案中,透過實作加深理解和掌握
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    分享與交流
                  </h3>
                  <p className="text-gray-600">
                    加入社群,與其他設計師分享你的經驗和心得,持續學習成長
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            推薦學習路徑
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="rounded-lg bg-blue-100 p-3 w-fit mb-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                初學者
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                從基礎的使用者研究和介面設計技能開始,建立扎實的 UX 基礎
              </p>
              <Link
                href="/skills#research"
                className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1"
              >
                開始學習
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="rounded-lg bg-purple-100 p-3 w-fit mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                進階者
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                深入學習原型製作、可用性測試和無障礙設計,提升專業能力
              </p>
              <Link
                href="/skills#prototyping"
                className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1"
              >
                探索進階技能
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="rounded-lg bg-green-100 p-3 w-fit mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                專家級
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                掌握設計系統建立和團隊協作,成為 UX 領域的專家
              </p>
              <Link
                href="/skills#systems"
                className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1"
              >
                查看專家技能
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">準備好開始了嗎?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            立即探索技能庫,開始你的 UX 設計學習之旅
          </p>
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-gray-100 transition-colors"
          >
            探索所有技能
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
