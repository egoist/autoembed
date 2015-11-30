# Auto Embed [![Build Status](https://img.shields.io/circleci/project/egoist/autoembed/master.svg?style=flat-square)](https://circleci.com/gh/egoist/autoembed/tree/master)

Auto-embed nice embed-able links.

## Installation

```bash
npm install --save autoembed
```

## Example

```javascript
autoEmbed(string, {
  // eg: render cloudmusic only
  cloudmusic: true
  // eg: render every embed-able link
  embed: true
})
```

## What we support

Feel free to send a PR for supporting more embed-able links.

Now we support:

- Youtube, eg `https://www.youtube.com/watch?v=5vOAxP-u5KA`
- Kickstarter, eg: `https://www.kickstarter.com/projects/1546683916/treasures-of-the-universe-unique-astrophotography?ref=home_popular`
- Cloudmusic, eg: `http://music.163.com/#/song?id=36103237`

## Related

- [autolink.js](https://github.com/egoist/autolink.js) : Use this module to embed videos and music, etc.

## License

MIT &copy; [EGOIST](https://github.com/egoist)
