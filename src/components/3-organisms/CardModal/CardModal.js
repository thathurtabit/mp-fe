import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardModalStyled, { CardModalBG } from './CardModal.styled';

export default class CardModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <CardModalBG>
        <CardModalStyled
          role="dialog"
          aria-labelledby="modal-title"
          aria-modal="true"
        >
          <h3>I am a modal</h3>
        </CardModalStyled>
      </CardModalBG>
    );
  }
}

CardModal.propTypes = {};
