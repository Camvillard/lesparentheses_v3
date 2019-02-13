import React from "react";
import Navigation from '../components/navigation';



class Header extends React.Component {

  render() {
    const navLinks = [
      {id: 1, name: 'à propos', slug: 'about'},
      {id: 2, name: 'contact', slug: 'contact'},
      {id: 3, name: 'en savoir plus', slug: 'more'}
    ];

    const linksComponents = navLinks.map(link => {
      return <Navigation slug={link.slug} name={link.name} key={link.id}/>
    });

    console.log(linksComponents);

    return (
      <div>
        {linksComponents}
      </div>
    )
  }
}

export default Header;
