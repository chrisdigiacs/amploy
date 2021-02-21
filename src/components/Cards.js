import React, {useState} from 'react'
import TinderCard from "react-tinder-card"
import "./Cards.css"

function Cards() {
    const[people, setPeople] = useState([
        {
            name: 'Chris Pereira',
            url: "https://binaries.templates.cdn.office.net/support/templates/en-us/lw00002110_quantized.png",
        }

    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("swiped on:" + nameToDelete);
    }


    const outOfWindow = (name) => {
            console.log(name + "is gone");
    }

    return (
        <div className="cards">
            <div className='tinderCards__cardContainer'>
            {people.map((person) => (
                 <TinderCard 
                 className="swipe"
                 key={person.name}
                 preventSwipe={["up", "down"]}
                 onSwipe={(direction) => swiped(direction, person.name)}
                 onCardLeftScreen={() => outOfWindow( person.name)}
                 >
                     <div
                    style={{backgroundImage: "url("+person.url+")"}}
                    className="card"
                    >
                    <h2>{person.name}</h2>
                    </div>

                </TinderCard>
            )) }
            </div>
        </div>
    )
}

export default Cards
