const meta = {
  // Metadata
  siteTitle: 'Catherine Burns',
  siteDescription:
    'Catherine Burns',
  siteTitleAlt: 'Catherine Burns',
  siteShortName: 'Catherine Burns',
  siteUrl: 'https://catherineburns.netlify.app', // No trailing slash!
};

const social = {
  siteLogo: `src/static/CBLogo.png`,
  //siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@anuraghazru',
};

const website = {
  ...meta,
  ...social,
  disqusShortName: 'anuraghazra',
  googleAnalyticsID: 'UA-119972196-1',
  // Manifest
  themeColor: '#8fb592',
  backgroundColor: '#8fb592',
};

module.exports = website;
