module.exports = {
  siteTitle: 'Flynndev',
  description: '배우고 개발하면서 느끼고 알게된 것들을 정리하는 블로그입니다.',
  siteUrl: 'https://blog.flynndev.xyz',
  siteImage: 'profile_image.png',
  authorName: 'Flynn',
  authorEmail: 'wphestiraid@gmail.com',
  nickname: 'Flynn',
  realname: 'Inho Park',
  job: 'Common Developer',
  keywords: ['dev', 'blog', '개발', '블로그'],
  email: 'wphestiraid@gmail.com',
  github: 'wphestiraid',
  disqusShortname: 'flynndev',
  siteLanguage: 'ko',
  algolia: {
    appId: process.env.ALGOLIA_APP_ID ? process.env.ALGOLIA_APP_ID : '',
    searchOnlyApiKey: process.env.ALGOLIA_SEARCH_ONLY_API_KEY
      ? process.env.ALGOLIA_SEARCH_ONLY_API_KEY
      : '',
    indexName: process.env.ALGOLIA_INDEX_NAME
      ? process.env.ALGOLIA_INDEX_NAME
      : '',
  },
};
