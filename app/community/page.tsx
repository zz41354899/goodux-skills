import Link from "next/link";
import { Github, Mail, MessageCircle, Users2, MessageSquare } from "lucide-react";

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="border-b border-gray-100 py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Community
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            加入 Good UX Skills 社群,與其他 UX 設計師交流經驗、分享知識
          </p>
        </div>
      </section>

      {/* Join Community */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            參與方式
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            {/* GitHub */}
            <div className="border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors">
              <div className="mb-4">
                <Github className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                GitHub
              </h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                查看原始碼、回報問題、提交 Pull Request,一起改善 UX Skills
              </p>
              <a
                href="https://github.com/zz41354899/goodux-skills"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors underline underline-offset-4"
              >
                前往 GitHub →
              </a>
            </div>

            {/* NPM */}
            <div className="border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors">
              <div className="mb-4">
                <MessageCircle className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                NPM Package
              </h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                查看套件資訊、版本更新、使用統計
              </p>
              <a
                href="https://www.npmjs.com/package/goodux-ux-skills"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors underline underline-offset-4"
              >
                前往 NPM →
              </a>
            </div>

            {/* LINE */}
            <div className="border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors">
              <div className="mb-4">
                <MessageSquare className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                LINE 社群
              </h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                加入 LINE 社群,與其他 UX 設計師即時交流討論
              </p>
              <a
                href="https://pse.is/8t8cyf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors underline underline-offset-4"
              >
                加入 LINE 社群 →
              </a>
            </div>

            {/* Email */}
            <div className="border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors">
              <div className="mb-4">
                <Mail className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Email
              </h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                有任何問題或建議?歡迎直接聯繫我們
              </p>
              <a
                href="mailto:usefulvibecode@gmail.com"
                className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors underline underline-offset-4"
              >
                發送郵件 →
              </a>
            </div>

            {/* Contribute */}
            <div className="border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors">
              <div className="mb-4">
                <Users2 className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                貢獻技能
              </h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                分享你的專業知識,為社群貢獻新的 UX 技能
              </p>
              <Link
                href="/skills"
                className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors underline underline-offset-4"
              >
                了解更多 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How to Contribute */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            如何貢獻
          </h2>
          
          <div className="space-y-8 max-w-3xl">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                1. Fork Repository
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                前往 GitHub fork 專案到你的帳號
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                2. 建立新技能
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                在 <code className="bg-gray-100 px-2 py-1 rounded text-xs">.agents/skills/</code> 目錄下建立新資料夾,加入 <code className="bg-gray-100 px-2 py-1 rounded text-xs">SKILL.md</code> 檔案
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                參考現有技能的格式,包含技能摘要、適用情境、工作流程、最佳實踐等
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                3. 提交 Pull Request
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                提交 PR 並說明你新增的技能內容,我們會盡快審查
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-16 border-t border-gray-100">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            社群規範
          </h2>
          
          <div className="max-w-3xl space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              我們致力於為所有人提供友善、包容的社群環境。參與社群時,請遵守以下規範:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>尊重他人,保持友善和專業</li>
              <li>歡迎不同觀點和建設性討論</li>
              <li>分享知識,互相學習成長</li>
              <li>避免垃圾訊息和不當內容</li>
              <li>尊重智慧財產權</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
