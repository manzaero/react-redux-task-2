import styles from '../../app.module.css';
import PropTypes from "prop-types";

export const Buttons = ({onClick, disabled, children}) => (<button
    className={styles.btn}
    onClick={onClick}
    disabled={disabled}
>{children}
</button>)

Buttons.propTypes = {
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
}