const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <img src={data.place.pic} alt={data.place.name} />
                <div><h2>Rating</h2>
                    <p>unrated</p>
                </div>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a> 
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
                <h2>Description</h2>
                <h4>
                            City: {data.place.city}
                        <br></br>
                            State: {data.place.state}
                       
                </h4>
                <div class="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Cuisines
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button"> {data.place.cuisines} </button>

                    </div>
                </div>

                <div><h2>Comments:</h2>
                    <p>No comments yet!

                    </p>
                </div>
            </main>
        </Def>
    )
}

module.exports = show