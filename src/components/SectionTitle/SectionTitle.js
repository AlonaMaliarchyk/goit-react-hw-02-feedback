
import PropTypes from 'prop-types';

const SectionTitle = ({ children, title }) => (
    <div>
        <h2>{title}</h2>
        {children}
    </div>
)

export default SectionTitle;

SectionTitle.propType = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
}