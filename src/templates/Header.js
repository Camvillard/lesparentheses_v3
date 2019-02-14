import React from "react";

// import files
import NavigationItem from '../components/navigation';

// import data
import internalLinks from '../data/internal-links';



class Header extends React.Component {


  render() {
  console.log(internalLinks);

    const rightNavLinks = [
      {id: 1, name: 'à propos', slug: 'about'},
      {id: 2, name: 'contact', slug: 'contact'},
      {id: 3, name: 'en savoir plus', slug: 'more'}
    ];

    const leftNavLinks = [
      {id: 1, name: 'catégories', slug: 'categories'},
      {id: 2, name: 'projets', slug: 'projets'},
    ];

    const rightLinksComponents = rightNavLinks.map(link => {
      return <NavigationItem slug={link.slug} name={link.name} key={link.id}/>
    });

    const leftLinksComponents = leftNavLinks.map(link => {
      return <NavigationItem slug={link.slug} name={link.name} key={link.id}/>
    });


    return (
      <header>
      <div id="left-navigation">
        {leftLinksComponents}
      </div>
      <div id="right-navigation">
        {rightLinksComponents}
      </div>
      </header>
    )
  }
}

export default Header;
