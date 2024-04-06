import PropTypes from 'prop-types';
import { BreadcrumbContainer, Chevron, CurrentPath, StyledLink } from "./styled"

const Breadcrumb = ({pathsList}) => {
  return <BreadcrumbContainer>
    {pathsList.map((path, i) => {
      const isLast = pathsList.length === i+1
      if (isLast) {
        return <CurrentPath key={`${path.label}-${i}`}>
          {path.label}
        </CurrentPath>
      }
      return <div key={`${path.label}-${i}`}>
        <StyledLink href={path.href}>{path.label}</StyledLink>
        <Chevron>{'>'}</Chevron>
      </div>
    })}
  </BreadcrumbContainer>

}

Breadcrumb.propTypes = {
  pathsList: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  })),
}

export default Breadcrumb;
