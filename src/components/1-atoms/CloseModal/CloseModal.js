import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CloseModalStyled from './CloseModal.styled';
import { toggleModal } from '../../../state/actions/toggleModal';

const mapDispatchToProps = dispatch => ({
  toggleModal: bool => dispatch(toggleModal(bool)),
});

export const CloseModal = ({ toggleModal }) => (
  <CloseModalStyled
    data-close-modal
    aria-label="Close Modal"
    to="/"
    onClick={() => toggleModal(false)}
    tabIndex="0"
  />
);

export default connect(
  null,
  mapDispatchToProps
)(CloseModal);

CloseModal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
