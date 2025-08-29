# Medusa立ち上げ手順

---

## Backend
### 1. スクリプト実行権限付与(初回のみ必要)
```bash
chmod +x start.sh
```

### 2. ディレクトリ移動
```bash
cd backend
```

### 3. 依存関係インストール
```bash
npm install
```

### 4. MedusaのBackendを起動
```bash
npm run docker:up
```

### 5. 管理者アカウントの追加
```bash
docker compose run --rm medusa npx medusa user -e admin@example.com -p supersecret
```

### 6. 管理者ダッシュボードへのアクセス
#### 6.1 下記リンクにブラウザからアクセス出来ることを確認
http://localhost:9000/app

#### 6.2 下記ユーザー情報でログイン出来ることを確認
user: admin@example.com
pass: supersecret

---

## Storefront
### 1. ディレクトリ移動(rootディレクトリに戻った状態から)
```bash
cd storefront
```

### 2. 依存関係インストール
```bash
npm install
```

### 3. MedusaのStorefrontを起動
```bash
npm run dev
```

---

## 終了時
### 1. Storefrontの終了
ターミナルにてCtrl+cで終了

### 2. Backendの終了
```bash
cd backend
npm run docker:down
```
