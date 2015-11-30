const autoEmbed = require('./')

describe('main', () => {
  it('replace cloudmusic', done => {
    const string = 'http://music.163.com/#/song?id=36103237'
    const result = '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="http://music.163.com/outchain/player?type=2&id=36103237&auto=1&height=66"></iframe>'
    autoEmbed(string, {cloudmusic: true}).should.equal(result)
    done()
  })
  it('replace kickstarter', done => {
    const string = 'https://www.kickstarter.com/projects/1546683916/treasures-of-the-universe-unique-astrophotography?ref=home_popular'
    const result = '<iframe width="480" height="360" src="https://www.kickstarter.com/projects/1546683916/treasures-of-the-universe-unique-astrophotography/widget/video.html" frameborder="0" scrolling="no"> </iframe>'
    autoEmbed(string, {kickstarter: true}).should.equal(result)
    done()
  })
  it('replace youtube', done => {
    const string = 'https://www.youtube.com/watch?v=5vOAxP-u5KA'
    const result = '<iframe width="560" height="315" src="https://www.youtube.com/embed/5vOAxP-u5KA" frameborder="0" allowfullscreen></iframe>'
    autoEmbed(string, {youtube: true}).should.equal(result)
    done()
  })
})
