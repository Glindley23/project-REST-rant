const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src='/images/vegetables.jpg' alt='vegetables in baskets' />
                </div>
                <div>
                Photo by <a href="https://unsplash.com/@organicdesignco?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Megan Thomas</a> on <a href="https://unsplash.com/s/photos/agriculture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
                <a href='/places'>
                    <button className='btn-primary'>Places Page</button>
                </a>

            </main>
        </Def>
    )
} 

module.exports = home 

