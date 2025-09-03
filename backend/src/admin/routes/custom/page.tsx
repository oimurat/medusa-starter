// Admin のカスタムUIルートをサイドバーに表示するために必要
import { defineRouteConfig } from "@medusajs/admin-sdk"

// サイドバー用のアイコンを表示するために必要
import { Typescript } from "@medusajs/icons"

// ページのUI構成に必要
import { Button, Container, Heading, toast } from "@medusajs/ui"

// 管理画面からバックエンドへリクエストするためのJS SDKを利用するために必要
import { sdk } from "../../lib/sdk"

type HelloWorldResponse = { message: string }

const CustomPage = () => {
  // GET ボタン押下時のハンドラ
  // src/api/hello-world/route.ts に対応する /hello-world を呼ぶ

  const handleGet = async () => {
    try {
      const data = (await sdk.client.fetch(`/hello-world`)) as HelloWorldResponse
      toast.success(`GET: ${data.message}`)
      console.log(data)
    } catch (e: any) {
      toast.error(`GET failed: ${e.message}`)
    }
  }

  // POST ボタン押下時のハンドラ
  // src/api/hello-world/route.tsのPOSTハンドラが実行され、JSON が返る
  const handlePost = async () => {
    try {
      const data = (await sdk.client.fetch(`/hello-world`, {
        method: "POST",
        body: { any: "payload" },
      })) as HelloWorldResponse
      toast.success(`POST: ${data.message}`)
      console.log(data)
    } catch (e: any) {
      toast.error(`POST failed: ${e.message}`)
    }
  }

  // ページの表示
  // Container/Heading は Medusa UI コンポーネント
  // 2つのボタンから GET/POST を実行
  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h2">This is my custom route</Heading>
        <div className="flex gap-2">
          <Button size="small" variant="secondary" onClick={handleGet}>
            Call GET
          </Button>
          <Button size="small" variant="primary" onClick={handlePost}>
            Call POST
          </Button>
        </div>
      </div>
    </Container>
  )
}

// サイドバーに項目を追加するためのルート設定
export const config = defineRouteConfig({
  label: "Hello World",
  icon: Typescript,
})

// パンくずリストの設定
export const handle = {
  breadcrumb: () => "Hello World",
}

export default CustomPage