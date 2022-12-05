const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>
                Oops, sorry, we can't find this page!
              </p>
              <img id='error-img' src='/images/icecream.jpg' alt='ice cream cone fell over' />
              <div>
                Photo by <a href="https://unsplash.com/@rojekilian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sarah Kilian</a> on <a href="https://unsplash.com/s/photos/error?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              </div>
  
          </main>
      </Def>
    )
  }
  

module.exports = error404
