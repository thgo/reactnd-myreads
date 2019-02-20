import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import BookCard from './../BookCard'
import { shelfs } from './../../../config/shelfs'
configure({adapter: new Adapter()})

const props = {
  book: {
    "title": "Satire TV",
    "subtitle": "Politics and Comedy in the Post-Network Era",
    "authors": [
      "Jonathan Gray",
      "Jeffrey P. Jones",
      "Ethan Thompson"
    ],
    "publisher": "NYU Press",
    "publishedDate": "2009-04-01",
    "description": "Satirical TV has become mandatory viewing for citizens wishing to make sense of the bizarre contemporary state of political life. Shifts in industry economics and audience tastes have re-made television comedy, once considered a wasteland of escapist humor, into what is arguably the most popular source of political critique. From fake news and pundit shows to animated sitcoms and mash-up videos, satire has become an important avenue for processing politics in informative and entertaining ways, and satire TV is now its own thriving, viable television genre. Satire TV examines what happens when comedy becomes political, and politics become funny. A series of original essays focus on a range of programs, from The Daily Show to South Park, Da Ali G Show to The Colbert Report, The Boondocks to Saturday Night Live, Lil’ Bush to Chappelle’s Show, along with Internet D.I.Y. satire and essays on British and Canadian satire. They all offer insights into what today’s class of satire tells us about the current state of politics, of television, of citizenship, all the while suggesting what satire adds to the political realm that news and documentaries cannot.",
    "industryIdentifiers": [
      {
        "type": "ISBN_10",
        "identifier": "081473216X"
      },
      {
        "type": "ISBN_13",
        "identifier": "9780814732168"
      }
    ],
    "readingModes": {
      "text": true,
      "image": false
    },
    "pageCount": 288,
    "printType": "BOOK",
    "categories": [
      "Performing Arts"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": true,
    "contentVersion": "0.6.4.0.preview.2",
    "panelizationSummary": {
      "containsEpubBubbles": false,
      "containsImageBubbles": false
    },
    "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=1wy49i-gQjIC&printsec=frontcover&dq=satire&hl=&cd=3&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=1wy49i-gQjIC&source=gbs_api",
    "canonicalVolumeLink": "https://market.android.com/details?id=book-1wy49i-gQjIC",
    "id": "1wy49i-gQjIC",
    "shelf": "currentlyReading"
  },
  shelfs: shelfs,
  handleChangeShelf: () => {}
}

describe('BookCard component', () => {
  it('renders three <BookCard /> components', () => {
    const wrapper = mount(<BookCard book={props.book} shelfs={props.shelfs} handleChangeShelf={props.handleChangeShelf} />)
    console.log(wrapper.html())
    //expect(wrapper.find('book').exists()).toEqual(true)
  })
})
