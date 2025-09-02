// ページリンクを表示するウィジェット

// ウェジットの設定に必要
import { defineWidgetConfig } from "@medusajs/admin-sdk"
// ウィジットの表示に必要
import { Container } from "@medusajs/ui"
// ページリンクを表示するために必要
import { Link } from "react-router-dom"

// ウィジットで表示する内容
const ProductWidget = () => {
  return (
    <Container className="divide-y p-0">
      <Link to={"/orders"}>View Orders</Link> {/* ページリンク */}
    </Container>
  )
}

// ウィジットの設定
export const config = defineWidgetConfig({
  zone: "product.details.before",
})

export default ProductWidget