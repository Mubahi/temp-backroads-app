import { pageLinks } from "../Data";

const PageLinks = ({itemClass}) => {
  return (
    <ul className="nav-links" id="nav-links">
            {pageLinks.map((link) => {
                return (
                <li key={link.id}>
                  <a href={link.href} className={itemClass}> {link.Text} </a>
                </li> 
                );
            })}
        </ul>
  )
}
export default PageLinks