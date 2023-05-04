import "./header.css"

const Header = () => {
  return (
    <div className="Header">
      <div className="headerTitles">
        <span className="headerTitleSm">Share With Me</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img className="headerImage" src="https://images.unsplash.com/photo-1506104489822-562ca25152fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8NGslMjBuYXR1cmV8ZW58MHx8MHx8&w=1000&q=80" alt="#"/>
    </div>
  )
}

export default Header
