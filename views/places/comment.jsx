const React = require('react')
const Def = require('../default')

function new_comment(data) {
    return (
    
        <Def>
            <main>
                <h1>Add a new Rant or Rave</h1>
                <form method ='POST' action={`/places/${data.place._id}/comment`}>
                    <div className='form-group'>
                        <label htmlFor='author'>Name</label>
                        <input className='form-control' id='author' name='author'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='rant'>Rant</label>
                        <input type='checkbox' id='rant' name='rant' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='content'>New Comment</label>
                        <input className='form-control' id='content' name='content' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='stars'>Rating 1-5 Stars</label>
                        <input className='form-control' id='stars' name='stars' required />
                    </div>
                    <input className='btn btn-primary' type="submit" value="Add Comment" />
                </form>
            </main>
        </Def>
    
    )
}

module.exports = new_comment