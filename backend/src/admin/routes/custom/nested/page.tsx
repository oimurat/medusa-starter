// ネストされたカスタムルートの設定

// ネストされたカスタムルートの設定に必要
import { defineRouteConfig } from "@medusajs/admin-sdk"
// ネストされたカスタムルートの表示に必要
import { Container, Heading } from "@medusajs/ui"

// ネストされたカスタムルートの表示
const NestedCustomPage = () => {
  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h2">This is my nested custom route</Heading>
      </div>
    </Container>
  )
}

export const config = defineRouteConfig({
  label: "Nested Route", // ネストされたカスタムルートのサイドバーに表示される内容
})

export default NestedCustomPage

export const handle = {
  breadcrumb: () => "Nested Custom Route", // パンくずリストに表示される内容
}