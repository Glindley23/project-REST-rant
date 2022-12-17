const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <div className = 'container-fluid'>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={data.place.pic} alt={data.place.name} />
                        <h3>
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                    </div>
                    <div className="col-sm-6">
                        <h2>
                            Description
                        </h2>
                        <h3>
                            {data.place.showEstablished()}
                        </h3>
                        <h4>
                            Signature Cuisines: {data.place.cuisines}
                        </h4>
                        <h2>Comments</h2>
                        <p>No comments yet</p>
                        <div className='row'>
                            <div className ='col-sm-6'>
                            <a href={`/places/${data.id}/edit`} className="btn btn-warning row">
                                Edit
                            </a>
                            </div>
                            <div className = 'col-sm-6'>
                            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                                <button type="submit" className="btn btn-danger">
                                    Delete
                                </button>
                            </form>
                            </div>
                        </div>
                        


                    </div>
                </div>
                <div>
                    <h2>Rating: </h2>
                    <p>No Ratings yet</p>
                </div>
                </div>
            </main>
        </Def>
    )
}


module.exports = show