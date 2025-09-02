// カスタムルートの設定

// カスタムルートの設定に必要
import { defineRouteConfig } from "@medusajs/admin-sdk"
// カスタムルートのサイドバーに表示するアイコンに必要
import { ChatBubbleLeftRight } from "@medusajs/icons"
// カスタムルートの表示に必要
import { Container, Heading } from "@medusajs/ui"

// カスタムルートの表示
const CustomPage = () => {
  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h2">This is my custom route</Heading>
      </div>
    </Container>
  )
}

// カスタムルートの設定
export const config = defineRouteConfig({
  label: "Custom Route", // カスタムルートのサイドバーに表示される内容
  icon: ChatBubbleLeftRight, // カスタムルートのサイドバーに表示されるアイコン
})


export default CustomPage

export const handle = {
  breadcrumb: () => "Custom Route", // パンくずリストに表示される内容
}