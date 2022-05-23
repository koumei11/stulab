# ポートフォリオ　「スタラボ」　のリポジトリ

## URL

## 概要
数学や物理などの理数系の科目を教えられる人と学びたい人のマッチングサイトです。<br>
社会人で学び直したい方やもっと深く学ぶために有識者に教えを請いたい人のためのサービスです。<br>
登録さえすれば誰とでもマッチングできるようになります。

![サンプル](./materials/sample.jpeg)

## 使用技術
- React（主にhooks）
- Node.js（TypeScript）
- Express
- Jest
- Nginx
- Redis
- Docker/Docker-compose（開発環境のみ）
- AWS
  - VPC
  - EC2
  - RDS
  - Route53
  - ALB
  - Auto Scaling
  - CloudFront
  - CodeDeploy
  - S3
  - ACM
- Terraform
- GithubActions

## 機能一覧
- ユーザー登録、ログイン機能（メール or Google認証）
- サービス作成、編集機能
- レビュー機能
- 講師検索機能
- マッチング機能
- メッセージ機能
- プロフィール作成、編集機能
- 契約、契約解除機能
- スケジューリング機能
- 通知機能

## インフラ構成図

## テーブル設計
![ER図](./materials/stulab.png)

## エンドポイント
| エンドポイント | メソッド | 説明 |
| :--:      | :--:  | :--- |
| / | GET | ホーム画面の表示 |
| /signup | GET/POST | ユーザー登録画面の表示/登録 |
| /signin | GET/POST | ログイン画面の表示/ログイン |
| /users/:id | GET | ユーザーの表示/編集/削除 |
| /me | GET/PUT | アカウントの表示/編集/削除　|
| /teachers | GET/POST | 講師一覧画面の表示/講師の編集 |
| /teachers/:id | GET | 講師の表示 |
| /me/teacher/edit | GET | 講師編集画面の表示 |
| /services | POST | 新規サービスの作成 |
| /services/:id | PUT/DELETE | サービスの編集/削除　|
| /me/services/new | GET | 新規サービス作成画面の表示 |
| /me/services/:id/edit | GET | サービス編集画面の表示 |
| /me/schedules | GET | 授業スケジュールの表示 |
| /me/schedules/:id | GET/POST/PUT/DELETE | スケジュール情報の取得/作成/編集/削除 |
| /me/profile | GET/POST | プロフィール設定画面の表示/編集 |
| /me/contracts | GET | 契約サービス一覧の表示 |
| /me/contracts/:id | DELETE | 契約サービスの解除 |
| /me/students | GET | 契約生徒一覧の表示 |
| /students/:id | DELETE | 契約生徒の解除 |
| /me/messages | GET | メッセージ一覧の表示 |
| /me/users/:userId/messages | GET | 特定の人とのメッセージ一覧の表示 |
| /users/:id/messages | POST | メッセージ送信 |
| /me/notifications | GET | お知らせの表示　|
| /contact | GET/POST | お問い合わせ |
| /password/reset | GET/POST | パスワードのリセット申請　|
| /password/new | GET/POST | パスワードのリセット　|
| /version | GET | バージョン情報の取得 |
| /health | GET | ヘルスチェック |
