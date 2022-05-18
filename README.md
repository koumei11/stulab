# ポートフォリオ　「スタラボ」　のリポジトリ
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
  - CloudWatch
  - CodeDeploy
  - S3
  - ACM
- Terraform
- GithubActions
- Datadog


## 機能一覧
- ユーザー登録、ログイン機能（メール or Google認証）
- プラン作成、編集機能
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
## エンドポイント設計
| エンドポイント | メソッド | 説明 |
| :---       | :---  | :--- |
|   /   | GET   | ユーザー一覧の取得 |
