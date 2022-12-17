const db = require('../models')
const places = require('../models/places')

async function seed() {
    
    //find a specific place
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })
    
    //create a fake comment
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })
    let comment2 = await db.Comment.create({
        author: 'Famished Frank',
        rant: true,
        stars: 2.0,
        content: 'Wow, simply terrible! Do not recommend!'
    })

    //add that comment to the specific Place's comment array
    place.comments.push(comment.id)
    place.comments.push(comment2.id)

    //save the place now that a new comment is added
    await place.save()

    //exit this process
    process.exit()
}

seed()
