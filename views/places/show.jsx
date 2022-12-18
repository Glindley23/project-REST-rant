const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className='inactive'>
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings/ data.place.comments.length)
        let stars = ''
        for (let i=0; i < averageRating; i++) {
            stars += '⭐'
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
    }
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className='border'>
                    <h2 className='rant'>{c.rant ? 'Rant! ' : 'Rave! '}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}/5</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-sm-6">
                            <img src={data.place.pic} alt={data.place.name} />
                            <h3>
                                Located in {data.place.city}, {data.place.state}
                            </h3>
                        </div>
                        <div id='show-content' className="col-sm-6">
                            <h2>
                                Description
                            </h2>
                            <h3>
                                {data.place.showEstablished()}
                            </h3>
                            <h4>
                                Signature Cuisines: {data.place.cuisines}
                            </h4>
                            <h2>Rating: </h2>
                            <h3>{rating}</h3>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <a href={`/places/${data.place.id}/edit`} className="btn btn-warning row">
                                        Edit
                                    </a>
                                </div>
                                <div className='col-sm-6'>
                                    <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                                        <button type="submit" className="btn btn-danger">
                                            Delete
                                        </button>
                                    </form>
                                </div>
                            </div>



                        </div>
                    </div>
                    <div>
                        <h2>Comments</h2>
                        <h3>{comments}</h3>
                    </div>
                </div>
            </main>
        </Def>
    )
}


module.exports = show