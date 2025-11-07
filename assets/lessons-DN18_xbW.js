import{_ as h}from"./mermaid-vendor-BOB0bNMi.js";import{aq as o,ag as e}from"./entry.client-DtWayQEr.js";function d(r){const s={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components},{Callout:i,Details:n,Infographic:l,LinkCard:t}=s;return i||a("Callout"),n||a("Details"),l||a("Infographic"),t||a("LinkCard"),e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{children:"#04 JavaScript - WebAPI・Gemini API"}),`
`,e.jsxs(i,{type:"note",title:"配布コード",children:[e.jsx(s.p,{children:"zipファイルをダウンロード後に展開し、VSCodeで開いてください！"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["講義内資料: ",e.jsx(s.a,{href:"../../zip/js04.zip",children:"js04.zip"})]}),`
`]})]}),`
`,e.jsx(s.h2,{children:"Web API"}),`
`,e.jsxs(n,{summary:"Web APIとは",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["機能さえわかっていれば、 ",e.jsx(s.strong,{children:"中身の実際の動作はわからなくても外部から機能を呼び出すことができる仕組み"})," の総称"]}),`
`,e.jsx(s.li,{children:"API（Application Programming Interface）をWeb技術（HTTP/HTTPS通信）で実現したもの が Web API"}),`
`]}),e.jsx(l,{children:e.jsx("div",{className:"text-center max-w-full mx-auto",children:e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"../../images/js/api-about.png",alt:"APIとは",className:"w-full rounded"})})})})]}),`
`,e.jsxs(n,{summary:"Web APIの利用方法",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Web APIの使い方には2つのパターンが存在する"}),`
`]}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsxs("div",{className:"flex items-center mb-3 justify-center",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 4V2a1 1 0 011-1h4a1 1 0 011 1v2h4a1 1 0 011 1v2a1 1 0 01-1 1h-1v9a2 2 0 01-2 2H6a2 2 0 01-2-2V8H3a1 1 0 01-1-1V5a1 1 0 011-1h4z"})})}),e.jsx("div",{className:"font-medium text-blue-800",children:"ライブラリ方式（リモコン型）"})]}),e.jsx("div",{className:"mb-2 max-w-40 mx-auto rounded",children:e.jsx("img",{src:"../../images/js/api-2way-lib.png",alt:"APIの使い方は2パターンある",className:"w-full rounded"})}),e.jsx("div",{className:"text-sm text-blue-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"特徴:"}),e.jsx("br",{}),`
・リモコンみたいにボタンを押すだけ`,e.jsx("br",{}),`
・すごく簡単で使いやすい`,e.jsx("br",{}),`
・ただし、種類ごとに使い方が違う`,e.jsx("br",{}),`
`,e.jsx("strong",{children:"例:"})," Firebase、Tone.js、Leaflet"]})})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-3 justify-center",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),e.jsx("div",{className:"font-medium text-green-800",children:"HTTP/JSON方式（注文書型）"})]}),e.jsx("div",{className:"mb-2 max-w-40 mx-auto rounded",children:e.jsx("img",{src:"../../images/js/api-2way-json.png",alt:"APIの使い方は2パターンある",className:"w-full rounded"})}),e.jsx("div",{className:"text-sm text-green-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"特徴:"}),e.jsx("br",{}),`
・注文書を書いて送る感じ`,e.jsx("br",{}),`
・共通のルール（HTTP + JSON）`,e.jsx("br",{}),`
・一度覚えれば、どんなAPIにも応用可能`,e.jsx("br",{}),`
`,e.jsx("strong",{children:"例:"})," Google Books API、楽天API"]})})]})]})}),e.jsxs(i,{type:"note",title:"FirebaseもAPIだ！",children:[e.jsxs(s.p,{children:["前の授業でやったFirebaseも",e.jsx(s.strong,{children:"ライブラリ方式"}),"のAPIといえます！"]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// Firebase - ライブラリ方式の典型例
import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js';

const db = getDatabase();
const usersRef = ref(db, 'users');
push(usersRef, {
  name: '太郎',
  age: 25
});
`})}),e.jsxs(s.p,{children:["Firebaseは専用の関数（",e.jsx(s.code,{children:"getDatabase()"}),", ",e.jsx(s.code,{children:"ref()"}),", ",e.jsx(s.code,{children:"push()"}),"など）を使って簡単にデータベース操作ができましたよね。",e.jsx(s.br,{}),`
`,"これがまさにライブラリ方式です！"]})]})]}),`
`,e.jsx(n,{summary:"Web API活用のメリット",children:e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"開発速度の向上"}),e.jsx("div",{className:"text-sm text-slate-600",children:"既存サービスを活用してMVP（最小価値製品）を爆速開発"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"コスト削減"}),e.jsx("div",{className:"text-sm text-slate-600",children:"複雑な機能を一から開発する必要がない"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-purple-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"高品質なサービス"}),e.jsx("div",{className:"text-sm text-slate-600",children:"専門企業が提供する高性能・高信頼性のサービスを利用"})]})]})]})})}),`
`,e.jsxs(n,{summary:"[補足] 同期処理と非同期処理",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"API通信は「非同期処理」で行われる"}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"同期処理のイメージ："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`console.log("1番目の処理");
console.log("2番目の処理"); // 1番目が終わってから実行
console.log("3番目の処理"); // 2番目が終わってから実行
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"非同期処理のイメージ："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`console.log("1番目の処理");
setTimeout(() => {
  console.log("2番目の処理（2秒後）");
}, 2000);
console.log("3番目の処理"); // 2番目を待たずに即座に実行
`})}),e.jsx(i,{type:"info",title:"非同期処理の重要性",children:e.jsxs(s.p,{children:["API通信は時間がかかるため、通信完了を待っている間に他の処理を実行できる非同期処理が重要です。",e.jsx(s.code,{children:".then()"}),"や",e.jsx(s.code,{children:"async/await"}),"を使って「通信が完了したら」の処理を書きます。"]})})]}),`
`,e.jsx(s.h2,{children:"Axios（HTTP通信ライブラリ）"}),`
`,e.jsxs(n,{summary:"Axiosとは",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"ウェブサイトと他のWebサービス（API）との「通訳」のような役割"}),`
`,e.jsx(s.li,{children:"HTTPリクエストを簡単に送信できるJavaScriptライブラリ"}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"導入方法："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"><\/script>
`})}),e.jsx(i,{type:"tip",title:"AxiosとjQueryの類似点",children:e.jsxs(s.p,{children:["jQueryと同様にCDNから読み込むだけで使用できます。Live ServerやHTTPサーバー上で動作させる必要があります（",e.jsx(s.code,{children:"file://"}),"では動作しません）。"]})})]}),`
`,e.jsxs(n,{summary:"GETリクエスト（データを取得）",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// 基本的なGETリクエスト
axios.get('https://api.example.com/users')
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(error) {
    console.log('エラーが発生しました：', error);
  });

// パラメータ付きのGETリクエスト
axios.get('https://api.example.com/search', {
  params: {
    keyword: '検索キーワード',
    limit: 10
  }
})
.then(function(response) {
  console.log(response.data);
});
`})}),e.jsx(i,{type:"info",title:"paramsとURLパラメータ",children:e.jsxs(s.p,{children:[e.jsx(s.code,{children:"params"}),"オプションは ",e.jsx(s.code,{children:"?keyword=検索キーワード&limit=10"})," のようなURLパラメータを自動的に生成してくれます。手動でURLに追加する必要がありません。"]})})]}),`
`,e.jsxs(n,{summary:"POSTリクエスト（データを送信）",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// データを送信するPOSTリクエスト
axios.post('https://api.example.com/submit', {
  title: '新しい記事',
  content: 'これは新しい記事の内容です。',
  author: '投稿者名'
})
.then(function(response) {
  console.log('送信成功：', response.data);
})
.catch(function(error) {
  console.log('エラーが発生しました：', error);
});
`})}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"})})}),e.jsx("div",{className:"font-medium text-blue-800",children:"GET"})]}),e.jsx("div",{className:"text-sm text-blue-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"用途:"})," データを「取得」",e.jsx("br",{}),`
`,e.jsx("strong",{children:"例:"})," 商品一覧、ユーザー情報の取得"]})})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})})}),e.jsx("div",{className:"font-medium text-green-800",children:"POST"})]}),e.jsx("div",{className:"text-sm text-green-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"用途:"})," データを「送信」",e.jsx("br",{}),`
`,e.jsx("strong",{children:"例:"})," フォーム送信、記事投稿"]})})]})]})})]}),`
`,e.jsxs(n,{summary:"[補足] JSONとは",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"JavaScript Object Notation の略"}),`
`,e.jsx(s.li,{children:"データ交換フォーマットの一種"}),`
`,e.jsx(s.li,{children:"JavaScriptのオブジェクト記法をベースにした軽量なデータ形式"}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// JSON例
{
  "name": "田中太郎",
  "age": 25,
  "hobbies": ["読書", "映画鑑賞"],
  "address": {
    "prefecture": "東京都",
    "city": "渋谷区"
  }
}
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"JSONの特徴："})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"人間にも読みやすい"}),`
`,e.jsx(s.li,{children:"多くのプログラミング言語でサポート"}),`
`,e.jsx(s.li,{children:"Web APIの標準的なデータ形式"}),`
`]})]}),`
`,e.jsx(s.h2,{children:"Gemini API を使ってみよう！"}),`
`,e.jsxs(n,{summary:"Geminiについて",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Googleが開発した大規模言語モデル（LLM）"}),`
`,e.jsx(s.li,{children:"テキスト生成、質問応答、要約、翻訳など多様なAI機能を提供"}),`
`,e.jsx(s.li,{children:"REST APIを通じてWebアプリケーションから利用可能"}),`
`]}),e.jsx(i,{type:"info",title:"AIで変わる業務スタイル",children:e.jsx(s.p,{children:"Gemini AIを活用することで、文書作成、データ分析、アイデア出しなどの日常業務を大幅に効率化できます。まさに「AIと協働する」新しい働き方の始まりです！"})})]}),`
`,`
`,e.jsxs(n,{summary:"Gemini APIの利用料金",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Gemini APIは ",e.jsx(s.strong,{children:"無料枠"})," と ",e.jsx(s.strong,{children:"従量課金プラン"})," の2つの料金体系がある"]}),`
`,e.jsx(s.li,{children:"無料枠の場合には、１分間のリクエスト回数制限がある"}),`
`]}),e.jsx(s.p,{children:"※ Gemini 2.5 Flash の場合の試算"}),e.jsx(l,{children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-50 rounded p-6 border-2 border-green-200",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-8 h-8 bg-green-100 rounded flex items-center justify-center",children:e.jsx("svg",{className:"w-5 h-5 text-green-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-bold text-lg text-slate-800",children:"無料枠"}),e.jsx("div",{className:"text-green-600 font-semibold",children:"Free Tier"})]})]}),e.jsxs("div",{className:"space-y-2 text-sm text-slate-600",children:[e.jsxs("div",{children:["• ",e.jsx("strong",{children:"リクエスト制限:"})," 10回/分、250回/日"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"トークン制限:"})," 25万トークン/分"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"用途:"})," 開発・学習・プロトタイプ"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"制約:"})," 商用利用に一部制限"]})]})]}),e.jsxs("div",{className:"bg-slate-50 rounded p-6 border-2 border-blue-200",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-8 h-8 bg-blue-100 rounded flex items-center justify-center",children:e.jsx("svg",{className:"w-5 h-5 text-blue-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-bold text-lg text-slate-800",children:"従量課金プラン（Tier1）"}),e.jsx("div",{className:"text-blue-600 font-semibold",children:"Pay-as-you-go"})]})]}),e.jsxs("div",{className:"space-y-2 text-sm text-slate-600",children:[e.jsxs("div",{children:["• ",e.jsx("strong",{children:"リクエスト制限:"})," 1,000回/分、10,000回/日"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"トークン制限:"})," 100万トークン/分"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"入力料金:"})," $0.30/100万トークン（テキスト/画像/動画）"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"出力料金:"})," $2.50/100万トークン"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"用途:"})," 本番環境・商用利用"]})]})]})]})}),e.jsxs(i,{type:"warning",title:"最新の利用料金について",children:[e.jsxs(s.p,{children:["本資料の価格表は 2025年9月10日時点のものです。",e.jsx(s.br,{}),`
`,"最新の価格とレート制限はこちらから確認できます。"]}),e.jsx(t,{url:"https://ai.google.dev/pricing?hl=ja"}),e.jsx(t,{url:"https://ai.google.dev/gemini-api/docs/rate-limits?hl=ja#free-tier"})]})]}),`
`,e.jsxs(n,{summary:"APIキーの取得方法",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"1. Google AI Studioにアクセス"})}),e.jsx(t,{url:"https://aistudio.google.com/"}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"2. アカウントでログイン"})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Googleアカウントでサインイン"}),`
`,e.jsx(s.li,{children:"利用規約に同意"}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"3. APIキーを生成"})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"「Get API key」をクリック"}),`
`,e.jsx(s.li,{children:"「Create API key」を選択"}),`
`,e.jsx(s.li,{children:"生成されたキーをコピーして保存"}),`
`]}),e.jsx(i,{type:"warning",title:"APIキーは絶対に秘密に保管！",children:e.jsx(s.p,{children:"APIキーは他人に知られると不正利用される可能性があります！絶対に安全な場所に保管してください。"})})]}),`
`,e.jsx(s.h2,{children:"チャットボットアプリの実装"}),`
`,e.jsxs(n,{summary:"axiosでGemini APIを叩いてみよう",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!doctype html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Gemini Chat</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"><\/script>
    <link rel="stylesheet" href="css/style.css" />
</head>
<body>
<header>
    <h1>Gemini AI チャット</h1>
</header>
<main>
    <div id="chat-area">
        <div class="message ai">
            🤖 こんにちは！何でもお聞きください！
        </div>
    </div>
    <textarea
        id="user-input"
        placeholder="メッセージを入力..."
    ></textarea>
    <ul>
        <li id="send">送信</li>
        <li id="clear">クリア</li>
    </ul>
</main>

<script type="module">
// APIキーの情報を読み込む
import { GEMINI_API_KEY } from "./js/config.js";

let chatHistory = [];

// メッセージ送信
$("#send").on("click", function () {
    const userMessage = $("#user-input").val(); // ユーザーメッセージを取得
    if (!userMessage) return; // ユーザーメッセージが空の場合は処理を終了
    
    $("#chat-area").append(\`<div class='message user'>👤 \${userMessage}</div>\`); // ユーザーメッセージを表示
    $("#user-input").val(""); // 入力欄をクリア

    // Gemini API を実行する関数を呼び出す
    callGeminiAPI(userMessage);
});

// チャットクリア
$("#clear").on("click", function () {
    $("#chat-area").html(\`<div class='message ai'>🤖 こんにちは！何でもお聞きください！</div>\`); // 初期メッセージをセット
    chatHistory = []; // 会話履歴をクリア
});

// Gemini API呼び出し関数
function callGeminiAPI(message) {
    // Google AI Studio のAPIリファレンスを参考にURLを設定
    const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

    // Gemini APIに渡すデータを作成
    const data = {
        contents: [
            {
                parts: [{ text: message }],
            },
        ],
    };
    
    // Gemini APIを呼び出し
    axios.post(\`\${url}?key=\${GEMINI_API_KEY}\`, data) // URL, データ, クエリパラメータでAPIキー
        .then(function (response) {
            // AIの回答を取得
            const aiResponse = response.data.candidates[0].content.parts[0].text;

            $("#chat-area").append(\`<div class='message ai'>🤖 \${aiResponse}</div>\`); // AIの回答を表示
        })
        .catch(function (error) {
            console.error("API Error:", error); // APIエラーを表示
            $("#chat-area").append(\`<div class="message ai">🤖 エラーが発生しました。API キーを確認してください。</div>\`);
        });
}
<\/script>
</body>
</html>
`})}),e.jsxs(n,{summary:"[補足] APIキーの管理方法",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"js/config.js ファイルを作成："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// js/config.js
export const GEMINI_API_KEY = "YOUR_API_KEY_HERE"; // 実際のAPIキーに置き換える
`})}),e.jsx(i,{type:"warning",title:"APIキーの取り扱い注意",children:e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"APIキーは絶対に公開しないでください"}),`
`,e.jsxs(s.li,{children:["GitHubにアップする際は",e.jsx(s.code,{children:".gitignore"}),"に",e.jsx(s.code,{children:"js/config.js"}),"を追加"]}),`
`,e.jsx(s.li,{children:"本番環境では環境変数を使用しましょう"}),`
`]})})]}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"1. ユーザー入力"}),e.jsx("div",{className:"text-sm text-slate-600",children:"テキストエリアからメッセージを取得"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-orange-50 rounded border border-orange-200",children:[e.jsx("div",{className:"w-6 h-6 text-orange-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"2. API呼び出し"}),e.jsx("div",{className:"text-sm text-slate-600",children:"axiosでGemini APIにリクエスト送信"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"3. レスポンス処理"}),e.jsx("div",{className:"text-sm text-slate-600",children:"AIの回答を画面に表示"})]})]})]})})]}),`
`,e.jsxs(n,{summary:"ライブラリでGemini APIを使ってみよう",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"@google/genai"})," ライブラリを使うと、Gemini APIを簡単に使える"]}),`
`]}),e.jsx(i,{type:"tip",title:"ライブラリを使う利点",children:e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"URLを覚えなくて良い"}),`
`,e.jsx(s.li,{children:"データ形式を気にしなくて良い"}),`
`,e.jsx(s.li,{children:"エラーハンドリングが簡単"}),`
`,e.jsx(s.li,{children:"最新のAPI仕様に自動対応"}),`
`]})}),e.jsx(s.p,{children:"同じチャット機能をライブラリで実装:"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!doctype html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Gemini Chat - ライブラリ版</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"><\/script>
    <link rel="stylesheet" href="css/style.css" />
</head>
<body>
<header>
    <h1>Gemini AI チャット | ライブラリ版</h1>
</header>
<main>
    <div id="chat-area">
        <div class="message ai">
            🤖 こんにちは！何でもお聞きください！
        </div>
    </div>
    <textarea
        id="user-input"
        placeholder="メッセージを入力..."
    ></textarea>
    <ul>
        <li id="send">送信</li>
        <li id="clear">クリア</li>
    </ul>
</main>

<script type="module">
// APIキーの情報を読み込む
import { GEMINI_API_KEY } from './js/config.js';

// 🔥 @google/genai ライブラリを読み込む
import { GoogleGenAI } from 'https://cdn.jsdelivr.net/npm/@google/genai';

// @google/genai ライブラリを初期化
const genAI = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

let chatHistory = [];

// メッセージ送信
$('#send').on('click', function () {
    const userMessage = $('#user-input').val();
    if (!userMessage) return;

    $('#chat-area').append(\`<div class='message user'>👤 \${userMessage}</div>\`);
    $('#user-input').val('');

    // Gemini API を実行する関数を呼び出す
    callGeminiAPI(userMessage);
});

// チャットクリア
$('#clear').on('click', function () {
    $('#chat-area').html(\`<div class='message ai'>🤖 こんにちは！何でもお聞きください！</div>\`);
    chatHistory = [];
});

// Gemini API呼び出し関数
function callGeminiAPI(message) {

    // 🔥 @google/genai ライブラリを使用して Gemini API を呼び出す
    genAI.models
        .generateContent({
            model: 'gemini-2.5-flash',
            contents: message,
        })
        .then(function (response) {
            const aiResponse = response.text; // 🔥 AIの回答を取得
            $('#chat-area').append(\`<div class='message ai'>🤖 \${aiResponse}</div>\`);
        })
        .catch(function (error) {
            console.error('API Error:', error);
            $('#chat-area').append(\`<div class="message ai">🤖 エラーが発生しました。API キーを確認してください。</div>\`);
        });
}
<\/script>
</body>
</html>
`})}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsx("div",{className:"text-center mb-3",children:e.jsx("div",{className:"font-medium text-blue-800",children:"axios版（JSON型）"})}),e.jsxs("div",{className:"text-sm text-blue-700 space-y-2",children:[e.jsx("div",{children:"✓ URLを自分で管理"}),e.jsx("div",{children:"✓ データ形式を理解が必要"}),e.jsx("div",{children:"✓ 細かい制御が可能"}),e.jsx("div",{children:"✗ 設定が複雑"})]})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"text-center mb-3",children:e.jsx("div",{className:"font-medium text-green-800",children:"ライブラリ版"})}),e.jsxs("div",{className:"text-sm text-green-700 space-y-2",children:[e.jsx("div",{children:"✓ 設定が簡単"}),e.jsx("div",{children:"✓ URLを覚える必要なし"}),e.jsx("div",{children:"✓ 最新仕様に自動対応"}),e.jsx("div",{children:"✗ ライブラリの読み込みが必要"})]})]})]})})]}),`
`,e.jsxs(n,{summary:"発展: ストリーミング読み込み",children:[e.jsx(i,{type:"info",title:"ストリーミングとは？",children:e.jsxs(s.p,{children:["通常のAPIは「全部考えてから一気に回答」ですが、ストリーミングは「考えながら順次表示」します。",e.jsx(s.br,{}),`
`,"ChatGPTのように文字が徐々に現れる感じです！"]})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!doctype html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Gemini Chat - ストリーミング版</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"><\/script>
    <link rel="stylesheet" href="css/style.css" />
</head>
<body>
<header>
    <h1>Gemini AI チャット | ストリーミング版</h1>
</header>
<main>
    <div id="chat-area">
        <div class="message ai">
            🤖 こんにちは！何でもお聞きください！
        </div>
    </div>
    <textarea
        id="user-input"
        placeholder="メッセージを入力..."
    ></textarea>
    <ul>
        <li id="send">送信</li>
        <li id="clear">クリア</li>
    </ul>
</main>

<script type="module">
// APIキーの情報を読み込む
import { GEMINI_API_KEY } from './js/config.js';

// @google/genai ライブラリを読み込む
import { GoogleGenAI } from 'https://cdn.jsdelivr.net/npm/@google/genai';

// @google/genai ライブラリを初期化
const genAI = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

let chatHistory = [];

// メッセージ送信
$('#send').on('click', function () {
    const userMessage = $('#user-input').val();
    if (!userMessage) return;

    $('#chat-area').append(\`<div class='message user'>👤 \${userMessage}</div>\`);
    $('#user-input').val('');

    // Gemini API を実行する関数を呼び出す
    callGeminiAPI(userMessage);
});

// チャットクリア
$('#clear').on('click', function () {
    $('#chat-area').html(\`<div class='message ai'>🤖 こんにちは！何でもお聞きください！</div>\`);
    chatHistory = [];
});

// Gemini API ストリーミング呼び出し関数
async function callGeminiAPI(message) {

    // AIメッセージの枠を先に作成
    const aiMessageId = \`ai-message-\${Date.now()}\`;
    $('#chat-area').append(
        \`<div class='message ai' id='\${aiMessageId}'>🤖 <span class="typing-indicator">考え中...</span></div>\`
    );

    try {
        // ストリーミングでレスポンスを取得
        const responseStream = await genAI.models.generateContentStream({
            model: 'gemini-2.5-flash',
            contents: message,
            config: { thinkingConfig: { thinkingBudget: 0 } } // ストリーミングをわかりやすくするために思考時間を0にする
        });

        // タイピングインジケーターを削除
        $(\`#\${aiMessageId} .typing-indicator\`).remove();

        let aiResponse = '';

        // ストリームからデータを逐次取得
        for await (const chunk of responseStream) {
            aiResponse += chunk.text;

            // リアルタイムでテキストを更新
            $(\`#\${aiMessageId}\`).html(
                \`🤖 \${aiResponse}<span class="cursor">|</span>\`
            );

            // チャットエリアを最下部にスクロール
            $('#chat-area').scrollTop(
                $('#chat-area')[0].scrollHeight
            );
        }

        // 最終的にカーソルを削除
        $(\`#\${aiMessageId} .cursor\`).remove();
    } catch (error) {
        console.error('API Error:', error);
        $(\`#\${aiMessageId}\`).html(
            \`🤖 エラーが発生しました。API キーを確認してください。\`
        );
    }
}
<\/script>
</body>
</html>
`})}),e.jsxs(n,{summary:"[補足] ストリーミングの仕組み",children:[e.jsx(s.p,{children:"ストリーミングでは以下のような処理が行われています："}),e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"メッセージ枠を先に作成"}),": 空のメッセージ枠を用意"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"ストリーム開始"}),": ",e.jsx(s.code,{children:"generateContentStream"}),"でストリーミングを開始"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"逐次受信"}),": ",e.jsx(s.code,{children:"for await"}),"でチャンクごとにデータを受信"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"リアルタイム更新"}),": 受信したテキストを即座に表示"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"スクロール調整"}),": 新しいテキストが見えるように自動スクロール"]}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// ストリーミングの核となる部分
for await (const chunk of responseStream) {
    aiResponse += chunk.text;  // 受信したテキストを追加
    
    // リアルタイムで画面を更新
    $(\`#\${aiMessageId}\`).html(\`🤖 \${aiResponse}<span class="cursor">|</span>\`);
    
    // 自動スクロール
    $('#chat-area').scrollTop($('#chat-area')[0].scrollHeight);
}
`})})]})]}),`
`,e.jsxs(n,{summary:"応用例：他のAPIとの組み合わせ",children:[e.jsxs(s.p,{children:["例: ",e.jsx(s.strong,{children:"位置情報API"}),"と",e.jsx(s.strong,{children:"Gemini API"}),"を組み合わせた観光ガイドアプリ"]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!doctype html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>AI 観光ガイド</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"><\/script>
    <!-- Bulma CSS -->
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
    />
    <!-- Font Awesome for icons -->
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
</head>
<body>
<div class="container mt-5">
    <div class="columns is-centered">
        <div class="column is-8">
            <!-- Location Status -->
            <div
                class="notification is-primary is-light"
                id="location-info"
            >
                <p id="location-status">
                    <i class="fas fa-spinner fa-pulse"></i>
                    位置情報を取得中...
                </p>
            </div>

            <!-- Chat Area -->
            <div class="box">
                <div
                    id="chat-area"
                    style="
                        height: 400px;
                        overflow-y: auto;
                        padding: 1rem;
                    "
                >
                    <div class="message is-info">
                        <div class="message-body">
                            <i class="fas fa-robot"></i>
                            こんにちは！現在位置を取得して、おすすめの観光スポットをご案内します！
                        </div>
                    </div>
                </div>
            </div>

            <!-- Button Area -->
            <div class="field is-grouped is-grouped-centered">
                <p class="control">
                    <button
                        class="button is-primary is-medium"
                        id="get-location"
                    >
                        <span class="icon">
                            <i class="fas fa-location-arrow"></i>
                        </span>
                        <span>現在位置で観光案内</span>
                    </button>
                </p>
            </div>
        </div>
    </div>
</div>

<script type="module">
// APIキーの情報を読み込む
import { GEMINI_API_KEY } from './js/config.js';

let currentLocation = null;

// 現在位置取得ボタン
$('#get-location').on('click', function () {
    if (currentLocation) {
        // 位置情報がある場合は観光案内を開始
        startTourGuide();
    } else {
        // 位置情報がない場合は取得してから観光案内
        getCurrentLocation(true);
    }
});

// 現在位置を取得する関数
function getCurrentLocation(startGuideAfter = false) {
    $('#location-info')
        .removeClass('is-primary is-success is-danger')
        .addClass('is-info');
    $('#location-status').html(
        '<i class="fas fa-spinner fa-pulse"></i> 位置情報を取得中...'
    );

    if (!navigator.geolocation) {
        $('#location-info')
            .removeClass('is-info')
            .addClass('is-danger');
        $('#location-status').html(
            '<i class="fas fa-times"></i> お使いのブラウザは位置情報に対応していません'
        );
        return;
    }

    navigator.geolocation.getCurrentPosition(
        function (position) {
            // 位置情報取得成功
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            currentLocation = { lat, lng };

            $('#location-info')
                .removeClass('is-info')
                .addClass('is-success');
            $('#location-status').html(
                \`<i class="fas fa-map-marker-alt"></i> 現在位置: 緯度 \${lat.toFixed(4)}, 経度 \${lng.toFixed(4)}\`
            );

            // ボタンが押された場合のみ観光案内を開始
            if (startGuideAfter) {
                startTourGuide();
            }
        },
        function (error) {
            // 位置情報取得失敗
            $('#location-info')
                .removeClass('is-info')
                .addClass('is-danger');
            $('#location-status').html(
                '<i class="fas fa-exclamation-triangle"></i> 位置情報の取得に失敗しました'
            );
        }
    );
}

// 観光案内を開始する関数
function startTourGuide() {
    if (!currentLocation) {
        alert('位置情報が取得できていません');
        return;
    }

    const locationPrompt = \`
        現在位置の緯度経度情報: \${currentLocation.lat}, \${currentLocation.lng}

        この位置周辺のおすすめ観光スポットを教えてください。以下の形式で回答してお願いします：

        🏛️ **観光スポット名**
        - 📍 場所・アクセス方法
        - ⏰ 営業時間・料金
        - 🌟 おすすめポイント
        - 📸 見どころ

        できれば3-5箇所程度、徒歩や電車でアクセスしやすい場所を中心に紹介してください。
        地元の人しか知らない穴場スポットがあれば、それも含めてください！
    \`;

    $('#chat-area').append(\`
        <div class="message is-warning">
            <div class="message-body">
                <i class="fas fa-location-arrow"></i> 現在位置での観光案内をお願いします
            </div>
        </div>
    \`);

    callGeminiAPI(locationPrompt);
}

// Gemini API呼び出し関数
function callGeminiAPI(message) {
    const url = \`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=\${GEMINI_API_KEY}\`;

    // ローディング表示
    $('#chat-area').append(\`
        <div class="message is-info">
            <div class="message-body">
                <i class="fas fa-spinner fa-pulse"></i> 観光情報を検索中...
            </div>
        </div>
    \`);

    axios
        .post(url, {
            contents: [
                {
                    parts: [{ text: message }],
                },
            ],
        })
        .then(function (response) {
            // ローディングメッセージを削除
            $('#chat-area .message:last').remove();

            const aiResponse =
                response.data.candidates[0].content.parts[0].text;
            $('#chat-area').append(\`
                <div class="message is-success">
                    <div class="message-body">
                        <i class="fas fa-robot"></i> \${aiResponse.replace(/\\n/g, '<br>')}
                    </div>
                </div>
            \`);
            $('#chat-area').scrollTop(
                $('#chat-area')[0].scrollHeight
            );
        })
        .catch(function (error) {
            // ローディングメッセージを削除
            $('#chat-area .message:last').remove();

            console.error('API Error:', error);
            $('#chat-area').append(\`
                <div class="message is-danger">
                    <div class="message-body">
                        <i class="fas fa-exclamation-triangle"></i> エラーが発生しました。API キーを確認してください。
                    </div>
                </div>
            \`);
        });
}

// ページ読み込み時に位置情報取得を開始（観光案内は手動）
$(document).ready(function () {
    // 自動で位置情報取得を開始（観光案内はしない）
    setTimeout(() => getCurrentLocation(false), 1000);
});
<\/script>
</body>
</html>
`})}),e.jsx(i,{type:"success",title:"複数のAPIを組み合わせる利点",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"位置情報API"}),": ユーザーの現在位置を取得"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Gemini API"}),": その位置に基づいた観光情報を生成"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"結果"}),": パーソナライズされた観光ガイドアプリの完成！"]}),`
`]})})]}),`
`,e.jsxs(n,{summary:"[補足]セキュリティについて",children:[e.jsxs(s.p,{children:["今回の例では",e.jsx(s.strong,{children:"フロントエンドで直接APIを叩いて"}),"いますが、これは",e.jsx(s.strong,{children:"学習・内部利用"}),"に限定してください！"]}),e.jsx(i,{type:"warning",title:"フロントエンドでのAPI利用の注意点",children:e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"APIキーがブラウザに露出してしまう"}),`
`,e.jsx(s.li,{children:"悪意のあるユーザーがAPIキーを盗む可能性"}),`
`,e.jsx(s.li,{children:"一般公開するアプリでは絶対に避ける"}),`
`]})}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),e.jsx("div",{className:"font-medium text-green-800",children:"学習・内部利用"})]}),e.jsxs("div",{className:"text-sm text-green-700 space-y-2",children:[e.jsx("div",{children:"✓ 個人の学習用途"}),e.jsx("div",{children:"✓ 社内ツール"}),e.jsx("div",{children:"✓ プロトタイプ作成"}),e.jsx("div",{children:"✓ 限定された環境"})]})]}),e.jsxs("div",{className:"p-4 bg-red-50 rounded border border-red-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-red-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),e.jsx("div",{className:"font-medium text-red-800",children:"一般公開アプリ"})]}),e.jsxs("div",{className:"text-sm text-red-700 space-y-2",children:[e.jsx("div",{children:"✗ Webサイトの公開"}),e.jsx("div",{children:"✗ モバイルアプリ配布"}),e.jsx("div",{children:"✗ 不特定多数の利用"}),e.jsx("div",{children:"✗ 商用サービス"})]})]})]})}),e.jsx(s.h3,{children:"一般公開する場合の正しい方法"}),e.jsxs(s.p,{children:["一般公開するアプリを作る場合は、",e.jsx(s.strong,{children:"バックエンド"}),"でAPIを呼び出しましょう："]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// ❌ フロントエンドで直接API呼び出し（公開アプリでは危険）
const response = await axios.post(geminiUrl, data, {
    headers: { 'x-goog-api-key': GEMINI_API_KEY }  // APIキーが露出！
});

// ✅ バックエンドを経由してAPI呼び出し（安全）
const response = await axios.post('/api/chat', {  // 自分のサーバーに送信
    message: userMessage
});
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"バックエンドの例（Node.js/Express）:"})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// server.js
app.post('/api/chat', async (req, res) => {
    try {
        // サーバー側でGemini APIを呼び出し
        const geminiResponse = await axios.post(geminiUrl, {
            contents: [{ parts: [{ text: req.body.message }] }]
        }, {
            headers: { 'x-goog-api-key': process.env.GEMINI_API_KEY }  // 環境変数で管理
        });
        
        res.json({ response: geminiResponse.data });
    } catch (error) {
        res.status(500).json({ error: 'API Error' });
    }
});
`})}),e.jsx(i,{type:"info",title:"まとめ",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"学習段階"}),": フロントエンドで直接APIを使ってOK"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"本格運用"}),": バックエンドでAPIを呼び出してセキュリティを確保"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"APIキー"}),": 常に安全に管理し、絶対に公開しない"]}),`
`]})})]})]})}function x(r={}){const{wrapper:s}={...o(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(d,{...r})}):d(r)}function a(r,s){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const m=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"})),c=Object.assign({"../lessons/js04-API.mdx":m});function j(){var s;const r=[];for(const i in c){const n=c[i],l=i.replace("../lessons/","").replace(/\.mdx$/,""),t=((s=n.frontmatter)==null?void 0:s.title)||l;r.push({slug:l,title:t})}return r.sort((i,n)=>i.slug.localeCompare(n.slug))}async function u(){const{publicSlugs:r}=await h(async()=>{const{publicSlugs:n}=await import("./public-lessons-BK_w146z.js");return{publicSlugs:n}},[]),s=j(),i=[];for(const n of r){const l=s.find(t=>t.slug===n);l&&i.push(l)}return i}function v(r){const s=`../lessons/${r}.mdx`,i=c[s];return i?i.default:null}export{v as a,u as b,j as g};
