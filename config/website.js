const meta = {
  // Metadata
  siteTitle: 'Catherine Burns',
  siteDescription:
    'Anurag Hazra - Creative frontEnd web developer who loves javascript and modern web technologies.',
  siteTitleAlt: 'Catherine Burns',
  siteShortName: 'Catherine Burns',
  siteUrl: 'https://catherineburns.netlify.app', // No trailing slash!
};

const social = {
  siteLogo: `src/static/CBLogo.png`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@anuraghazru',
};

const website = {
  ...meta,
  ...social,
  disqusShortName: 'anuraghazra',
  googleAnalyticsID: 'UA-119972196-1',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
};

module.exports = website;
